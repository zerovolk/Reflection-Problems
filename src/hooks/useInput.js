import { useState } from "react"

export function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = (event) => {
        setValue(event.target.value)
    }
    const clear = (state) => {
        if (state) {
            setValue('')
        }
    }

    return {
        value, onChange, clear
    }
}