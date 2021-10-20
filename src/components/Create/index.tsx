import { useEffect, useState } from 'react'
import { useEditMode } from '../../contexts/EditMode'
import { useRegisterItem } from '../../contexts/ItemContext'
import { useRegisterItems } from '../../contexts/ItemsContext'
import { InputValue } from '../../models/InputValue'
import Button from '../Button'
import * as Style from './styles'

type TCreate = {
    placeholder: string,
    name: string,
    type: string,
    value?: string | number | boolean
    padding?: number,
    errorMessage?: string
}

export default function Create() {
    const { registerItems, setRegisterItems } = useRegisterItems()
    const { registerItem, setRegisterItem } = useRegisterItem()
    const { editMode, setEditMode } = useEditMode()

    const [createFields] = useState<TCreate[]>([
        { placeholder: 'Name', name: 'name', type: 'text', errorMessage: 'Name field is requeired.' },
        { placeholder: 'Value', name: 'value', type: 'number', errorMessage: 'Value field is requeired.' },
        { placeholder: 'Date', name: 'date', type: 'date', padding: 3.5, errorMessage: 'Invalid Date, make sure it is filled correctlly.' },
        { placeholder: 'Expense', name: 'isExpense', type: 'checkbox' }
    ])

    useEffect(() => {
        setRegisterItem({} as InputValue)
        setEditMode(false)
    }, [registerItems])
    useEffect(() => {
        console.log(registerItem)
    }, [registerItem])

    const onSubmit = () => {
        const [year, month] = registerItem.date.split('-')
        const expense = registerItem['isExpense']
        if (editMode)
            updateRegister(`${year}, ${Number(month) - 1}`)
        else {
            const completeItem = { id: registerItems.length + 1, ...registerItem, isExpense: !!expense, reference: `${year}, ${Number(month) - 1}` }
            setRegisterItems([...registerItems, completeItem])
        }
        reset()
    }

    const updateRegister = (reference: string) => {
        setRegisterItems((prev: InputValue[]) => [
            ...prev.map(p => {
                if (p.id === registerItem.id)
                    p = { ...registerItem, reference: reference }
                return p
            })
        ]
        )
    }

    const fillFields = (event: any) => {
        var { name, value, checked } = event.target
        if (name === 'isExpense') value = checked
        setRegisterItem({ ...registerItem, [name]: value })
    }

    const reset = () => {
        const form: any = document.getElementById('createForm')
        form && form.reset()
    }
    return (
        <Style.Container>
            <Style.Form>
                {createFields.map((field: TCreate, i: number) =>
                    <Style.FieldArea key={i}>
                        <Style.Label>{field.placeholder}</Style.Label>
                        <Style.InputArea>
                            <Style.Input
                                value={registerItem && registerItem[field.name]}
                                type={field.type}
                                name={field.name}
                                onChange={(e) => fillFields(e)}
                                placeholder={field.placeholder}
                                padding={field.padding}
                            />
                        </Style.InputArea>
                    </Style.FieldArea>
                )}

                <Button save={onSubmit} />
            </Style.Form>
        </Style.Container>
    )
}
