import { useState } from 'react'

function useForm(validate, defaultValue) {
    const [value, setValue] = useState(defaultValue || '')
    const [isTouched, setIsTouched] = useState(false)


    const isValid = validate(value)
    const valueIsNotValid = isTouched && !isValid

    function onValueChange(e) {
        setValue(e.target.value)
    }

    function onValueFocus() {
        setIsTouched(true)
    }

    return {
        value,
        isValid,
        hasError: valueIsNotValid,
        onValueChange,
        onValueFocus,
    }
}

export default useForm