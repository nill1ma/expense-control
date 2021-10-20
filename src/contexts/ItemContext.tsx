import { createContext, useContext, useState } from "react";
import { InputValue } from "../models/InputValue";

type Props = {
    children: any
}

const ItemContext = createContext<any>({})

export default function ItemContextPoviter(props: Props) {
    const { children } = props
    const [registerItem, setRegisterItem] = useState<InputValue>({} as InputValue)
    return (
        <ItemContext.Provider value={{ registerItem, setRegisterItem }}>
            {children}
        </ItemContext.Provider>
    )
}

export function useRegisterItem() {
    const context = useContext(ItemContext)
    const { registerItem, setRegisterItem } = context
    return { registerItem, setRegisterItem }
}