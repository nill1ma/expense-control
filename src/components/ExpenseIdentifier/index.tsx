import *  as Styles from "./styles";

export default function ExpenseIdentifier() {

    const identifiedColors = [
        { backgroundColor: '#00BFFF', label: 'Receipt' },
        { backgroundColor: '#FF4500', label: 'Expense' }
    ]

    return <Styles.Container>
        {identifiedColors.map(identified => {
            return (
                <Styles.Item>
                    <Styles.ColorVisualization identifiedColor={identified.backgroundColor} />
                    <Styles.Label>{identified.label}</Styles.Label>
                </Styles.Item>
            )
        })}
    </Styles.Container>
}
