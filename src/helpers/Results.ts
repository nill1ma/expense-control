import { InputValue } from "../models/InputValue"

export const getCalculatedeMonataryValue = (registerItem: InputValue[], reference: string) => {
    const currentReferenceItems: InputValue[] = registerItem
        .filter((register: InputValue) => register.reference === reference)

    const noExpense = calculate(currentReferenceItems, false)
    const expense = calculate(currentReferenceItems, true)

    return { noExpense, expense }
}

const calculate = (currentReferenceItems: InputValue[], expense: boolean): Number => {
    return currentReferenceItems
        .filter(({ isExpense }) => isExpense === expense)
        .reduce((acc: number, { value }) => acc + value, 0)
}

export const removeItemfromRegisterItem = (registerItem: InputValue[], id: number): InputValue[] => {
    const register = registerItem.filter((register: InputValue) => register.id !== id)
    return register
}