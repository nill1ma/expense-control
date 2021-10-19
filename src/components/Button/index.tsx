import { Btn } from "./styles"

type TButton = {
    save?: () => void
}
export default function Button({ save }: TButton) {
    return <Btn value={'Save'} type={'submit'} />
}