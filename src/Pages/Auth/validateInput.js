export function validateFirstname(firstname) {
    return firstname !== ''
}
export function validateLastname(lastname) {
    return lastname !== ''
}

export function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
}
export function validatePhone(phone) {
    return phone.length === 10
}

