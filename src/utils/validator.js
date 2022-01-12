export function validator(formData, config) {
    const errors = {}
    function validate(vlidateMethod, value, config) {
        let statusValidate
        switch (vlidateMethod) {
            case "isRequired":
                if (typeof value === "boolean") {
                    statusValidate = !value
                } else {
                    statusValidate = value.trim() === ""
                }

                break
            case "isEmail":
                statusValidate = !/^\S+@\S+\.\S+$/.test(value)
                break
            case "hasCapitalSymbol":
                statusValidate = !/[A-Z]+/.test(value)
                break
            case "hasNumber":
                statusValidate = !/\d+/.test(value)
                break
            case "minLength":
                statusValidate = value.length < config.value
                break
            case "maxLength":
                statusValidate = value.length > config.value
                break
            default:
                break
        }
        if (statusValidate) return config.message
    }
    for (const fieldName in formData) {
        for (const vlidateMethod in config[fieldName]) {
            const error = validate(
                vlidateMethod,
                formData[fieldName],
                config[fieldName][vlidateMethod]
            )
            if (error && !errors[fieldName]) {
                errors[fieldName] = error
            }
        }
    }
    return errors
}
