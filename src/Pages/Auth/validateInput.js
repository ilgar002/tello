export function validateFirstname(firstname) {
    return firstname !== '' && firstname.length > 2
}
export function validateLastname(lastname) {
    return lastname !== '' && lastname.length > 2
}

export function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
}
export function validatePhone(phone) {
    return phone.length === 10
}

