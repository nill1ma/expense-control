import { useEffect, useState } from "react";
import { faEdit, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRegisterItems } from "../../contexts/ItemsContext";
import { useReference } from "../../contexts/ReferenceContext";
import { InputValue } from "../../models/InputValue";
import { removeItemfromRegisterItem } from "../../helpers/Results";
import * as Styles from "./styles";
import { useRegisterItem } from "../../contexts/ItemContext";
import { useEditMode } from "../../contexts/EditMode";

export default function Visualize() {
    const { registerItems, setRegisterItems } = useRegisterItems()
    const { reference } = useReference()
    const [items, setItems] = useState<InputValue[]>([] as InputValue[])
    const { registerItem, setRegisterItem } = useRegisterItem()
    const { setEditMode } = useEditMode()

    useEffect(() => {
        setItems([...registerItems.filter((register: InputValue) => register.reference === reference)])
    }, [reference, registerItems])

    const removeItem = (id: number) => {
        const updatedeRegisterItem = removeItemfromRegisterItem(registerItems, id)
        setRegisterItems([...updatedeRegisterItem])
    }

    const fillFieldsToEditRegister = (id: number) => {
        const register = registerItems.find(({ id: rId }: InputValue) => rId === id)
        setEditMode(true)
        setRegisterItem({ ...register })
    }

    return (
        <Styles.Container>
            {items
                .map((data: InputValue) => {
                    return (
                        <Styles.Tr>
                            <Styles.Td width={50}>
                                <Styles.TdItem isExpense={data.isExpense}>
                                    {data.name}
                                </Styles.TdItem>
                            </Styles.Td>
                            <Styles.Td width={10}>
                                R${data.value},00
                            </Styles.Td>
                            <Styles.Td>
                                {data.date}
                            </Styles.Td>
                            <Styles.Td>
                                <FontAwesomeIcon onClick={() => fillFieldsToEditRegister(data.id)} style={{ cursor: 'pointer' }} icon={faEdit} />
                            </Styles.Td>
                            <Styles.Td>
                                <FontAwesomeIcon onClick={() => removeItem(data.id)} style={{ cursor: 'pointer' }} icon={faTimesCircle} />
                            </Styles.Td>
                        </Styles.Tr>
                    )
                })}
        </Styles.Container>
    )
}