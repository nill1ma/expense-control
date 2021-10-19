import styled from 'styled-components'

type TColorVisualization = {
    identifiedColor: string
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    padding:10px 0 3px 0;
`

export const Item = styled.div`
    display: flex;
    align-items: center;
    &:nth-child(n+2){
        margin-left: 15px;
    }
`
export const ColorVisualization = styled.div<TColorVisualization>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({identifiedColor})=> `${identifiedColor}`};
`

export const Label = styled.span`
    padding-left: 2px;
`