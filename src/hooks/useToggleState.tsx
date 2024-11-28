import { useState } from "react"

export default function useToggleState(initalState : boolean) {

    const [state, setState] = useState(initalState)

    const toggle = () => {
        setState((prevState) => !prevState)
    }


  return [state, toggle];
}
