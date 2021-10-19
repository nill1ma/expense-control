import styled from 'styled-components'

export const Container = styled.div`
    box-shadow:  0px 1px 1px #2c2c2c;
    padding: 0 5px;
`
export const Label = styled.label`
    margin: 0.1em;
`
export const InputArea = styled.div`
    padding: 0 0.5em;
`
export const Form = styled.form`
    width: 80%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
`

export const Input = styled.input`
    padding:${(prop:TInput)=> `${checkPadding(prop.padding!)}px`};
`
export const FieldArea = styled.div`
    display: flex !important;
    justify-content: center;
    align-items: center;
`
type TInput = {
    padding?:number
}

export const checkPadding = (p:number) => p ? p : 5 