import { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useRegisterItem } from '../../contexts/ItemContext'
import Button from '../Button'
import * as Style from './styles'

type TCreate = {
    placeholder: string,
    name: string,
    type: string,
    value?: string | number | boolean
    padding?: number
}

export default function Create() {
    const { registerItem, setRegisterItem } = useRegisterItem()

    const { register, handleSubmit } = useForm()

    const [createFields] = useState<TCreate[]>([
        { placeholder: 'Name', name: 'name', type: 'text' },
        { placeholder: 'Value', name: 'value', type: 'number' },
        { placeholder: 'Date', name: 'date', type: 'date', padding: 3.5 },
        { placeholder: 'Expense', name: 'isExpense', type: 'checkbox' }
    ])

    useEffect(() => {
        console.log(registerItem)
    }, [registerItem])

    const onSubmit = (data: FieldValues) => {
        const [year, month] = data.date.split('-')
        setRegisterItem([...registerItem, { ...data, id:registerItem.length+1, reference: `${year}, ${Number(month)-1}` }])
        reset()
    }

    const reset = () => {
        const form: any = document.getElementById('createForm')
        form && form.reset()
    }
    return (
        <Style.Container>
            <Style.Form id={'createForm'} onSubmit={handleSubmit(onSubmit)}>
                {createFields.map((field: TCreate, i: number) =>
                    <Style.FieldArea key={i}>
                        <Style.Label>{field.placeholder}</Style.Label>
                        <Style.InputArea>
                            <Style.Input
                                type={field.type}
                                {...register(field.name)}
                                placeholder={field.placeholder}
                                padding={field.padding}
                            />
                        </Style.InputArea>
                    </Style.FieldArea>
                )}
                <Button />
            </Style.Form>
        </Style.Container>
    )
}
