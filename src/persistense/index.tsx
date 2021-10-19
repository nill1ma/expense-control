import { useEffect, useState, Dispatch, SetStateAction } from "react"

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

export function usePersistedState<T>(key: string, initialValue: T): Response<T> {
    const [state, setState] = useState(initialValue)
    useEffect(() => {
        const storageValue = localStorage.getItem(key)
        if (storageValue) {
            setState(JSON.parse(storageValue))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])
    return [state, setState]
}