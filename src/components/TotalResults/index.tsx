import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useRegisterItems } from "../../contexts/ItemsContext";
import { useReference } from "../../contexts/ReferenceContext";
import { formatMonthAndYearToShow, getCurrentMonthAndYear } from "../../helpers/Dateutils";
import { getCalculatedeMonataryValue } from "../../helpers/Results";
import * as Styles from "./styles";

type TCalc = {
    label: string,
    value: number
}

export default function TotalResults() {

    const [calculatede, setCalculatede] = useState<TCalc[]>([] as TCalc[])
    const { registerItems } = useRegisterItems()
    const { reference, setReference } = useReference()

    useEffect(() => {
        setReference(getCurrentMonthAndYear())
    }, [])

    useEffect(() => {
        calculate()
    }, [reference, registerItems])

    const handleReference = (next: boolean) => {
        const [year, month] = reference.split(',')
        const date = new Date(Number(year), Number(month), 1)
        next ? date.setMonth(date.getMonth() + 1) : date.setMonth(date.getMonth() - 1)
        setReference(`${date.getFullYear()}, ${date.getMonth()}`)
    }

    const calculate = () => {
        const { noExpense, expense } = getCalculatedeMonataryValue(registerItems, reference)
        setCalculatede([
            { label: 'Receipt', value: Number(noExpense) },
            { label: 'Expenses', value: Number(expense) },
            { label: 'Balance', value: (Number(noExpense) - Number(expense)) }
        ])
    }

    return (
        <Styles.Container>
            <Styles.FilterByMonth>
                <Styles.Icon onClick={() => handleReference(false)} icon={faArrowAltCircleLeft} />
                {formatMonthAndYearToShow(reference)}
                <Styles.Icon onClick={() => handleReference(true)} icon={faArrowAltCircleRight} />
            </Styles.FilterByMonth>
            <Styles.CalculatedResultsAreaItem>
                {calculatede.map((calc: TCalc) =>
                    <span>{calc.label}: {calc.value}</span>
                )}
            </Styles.CalculatedResultsAreaItem>
        </Styles.Container>
    )
}
