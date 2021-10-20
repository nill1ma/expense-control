import { createContext, useContext, useState } from "react";

const EditMode = createContext<any>(false)

type Props = {
    children: any
}

export default function EditModePoviter(props: Props) {
    const { children } = props
    const [editMode, setEditMode] = useState<boolean>(false)
    return (
        <EditMode.Provider value={{ editMode, setEditMode }}>
            {children}
        </EditMode.Provider>
    )
}

export function useEditMode() {
    const context = useContext(EditMode)
    const { editMode, setEditMode } = context
    return { editMode, setEditMode }
}

