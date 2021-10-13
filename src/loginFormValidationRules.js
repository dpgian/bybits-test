export default function validate(values) {
    let errors = {}
    if (!values.username) {
        errors.username = 'Username is required'
    }
    if (!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 8) {
        errors.password = 'Password must be 8 or more characters'
    }
    return errors
}