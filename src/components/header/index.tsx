import { useEffect, useState } from 'react'
import * as Style from './styles'


export default function Header() {

    const getTime = (): string => {
        const date = new Date()
        return `${putLeftZero(date.getHours())}:${putLeftZero(date.getMinutes())}:${putLeftZero(date.getSeconds())}`
    }

    const putLeftZero = (ref: number): string => ref < 10 ? `0${ref}` : `${ref}`

    const [timer, setTimer] = useState<string>(getTime())

    useEffect(() => {
        setInterval(() => {
            setTimer(getTime())
        }, 1000)
        console.log(timer)
    }, [])

    return (
        <Style.Container>
            <Style.BrandArea>
                <Style.Brand>Expense Control</Style.Brand>
                <Style.Timer>
                    {timer}
                </Style.Timer>
            </Style.BrandArea>
        </Style.Container>
    )
}
