import { createContext, useContext } from "react";
import { usePersistedState } from "../persistense";

type TReference = string

type Props = {
    children: any
}

const ReferenceContext = createContext<any>('')

export default function ReferenceProvider(props: Props) {
    const { children } = props
    const [reference, setReference] = usePersistedState<TReference>('reference', '')
    return (
        <ReferenceContext.Provider value={{ reference, setReference }}>
            {children}
        </ReferenceContext.Provider>
    )
}

export function useReference() {
    const context = useContext(ReferenceContext)
    const { reference, setReference } = context
    return {reference, setReference}
}