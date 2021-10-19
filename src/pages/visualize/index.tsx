import { useEffect, useState } from "react";
import { faEdit, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRegisterItem } from "../../contexts/ItemContext";
import { useReference } from "../../contexts/ReferenceContext";
import { InputValue } from "../../models/InputValue";
import { removeItemfromRegisterItem } from "../../helpers/Results";
import * as Styles from "./styles";

export default function Visualize() {
    const { registerItem, setRegisterItem } = useRegisterItem()
    const { reference } = useReference()
    const [items, setItems] = useState<InputValue[]>([] as InputValue[])

    useEffect(() => {
        setItems([...registerItem.filter((register: InputValue) => register.reference === reference)])
    }, [reference, registerItem])

    const removeItem = (id: number) => {
        const updatedeRegisterItem = removeItemfromRegisterItem(registerItem, id)
        setRegisterItem([...updatedeRegisterItem])
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
                                <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faEdit} />
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