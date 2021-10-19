import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    background-color: #2c2c2c;
    color:#ffffff;
    margin: 10px 0;
    padding:10px 0;
    border-radius: 10px;
    align-items: center;
`

export const CalculatedResultsAreaItem = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
`

export const FilterByMonth = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:30%;
`
export const Icon = styled(FontAwesomeIcon)`
    cursor: pointer;
`
