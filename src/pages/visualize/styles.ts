import styled from 'styled-components'

type TTable = {
    width?: number
    isExpense?: boolean
}

export const Container = styled.div`
    width: 60%;
`
export const Tr = styled.div`
    display: flex;
`
export const Td = styled.div`
    display: flex;
    align-items: center;
    width: ${(props: TTable) => props.width ? `${props.width}%` : 'auto'};
    padding: 10px;
`

export const TdItem = styled.span`
    border-radius: 5px;
    padding: 5px;
    color: #fff;
    font-weight: bold;
    background-color: ${(props: TTable) => !props.isExpense ? '#00BFFF' : '#FF4500'};
`