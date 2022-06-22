export function validateEmptyAndLenght6(value) {
    if (!value) {
        return '* Este é um campo obrigatório'
    }
    if (value.lenght < 6) {
        return '* Este campo deve conter no mínimo 6 caracteres'
    }
    return true
}

export function validateEmptyAndEmail(value) {
    if (!value) {
        return '* Este campo é obrigatório'
    }
    const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)
    if (!isValid) {
        return '* Insira um e-mail válido'
    }
    return true
}