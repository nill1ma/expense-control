import { createContext, useContext } from "react";
import { InputValue } from "../models/InputValue";
import { usePersistedState } from "../persistense";

type Props = {
    children: any
}

const ItemsContext = createContext<any>({})

export default function ItemsContextPoviter(props: Props) {
    const { children } = props
    const [registerItems, setRegisterItems] = usePersistedState<InputValue[]>('itemsContext', [] as InputValue[])
    return (
        <ItemsContext.Provider value={{ registerItems, setRegisterItems }}>
            {children}
        </ItemsContext.Provider>
    )
}

export function useRegisterItems() {
    const context = useContext(ItemsContext)
    const { registerItems, setRegisterItems } = context
    return { registerItems, setRegisterItems }
}