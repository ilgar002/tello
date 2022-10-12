import { useState } from 'react'

function useForm(validate) {
    const [value, setValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)


    const isValid = validate(value)
    const valueIsNotValid = isTouched && !isValid

    function onValueChange(e) {
        setValue(e.target.value)
    }

    function onValueBlur() {
        setIsTouched(true)
    }

    return {
        value,
        isValid,
        hasError: valueIsNotValid,
        onValueChange,
        onValueBlur,
    }
}

export default useForm