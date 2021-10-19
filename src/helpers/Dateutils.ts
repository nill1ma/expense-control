import { MonthNames } from "../models/MonthNames"

export const formatedDate = (date: Date) => {
    const { getFullYear, getMonth, getDate } = date
    return `${getFullYear()}-${getMonth()}-${getDate()}`
}

export const getCurrentMonthAndYear = () => {
    const date = new Date()
    const current = `${date.getFullYear()}, ${date.getMonth()}`
    return current
}

export const formatMonthAndYearToShow = (currentMonthAndYear:string) => {
    const [year, month] = currentMonthAndYear.split(',')
    return `${MonthNames[Number(month)]} de ${year}`
}