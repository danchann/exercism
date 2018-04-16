class PhoneNumber {
    constructor(input) {
        this.input = input;
    }

    number(input) {
        let result = this.input.replace(/\D/g, '');

        if (result.length == 11 && result[0] == 1) {
            result = result.replace(result[0],'')
        } else if (result.length !== 10 || result[0] == 1) {
            return null;
        } else if (/[^2-9]/.test(result[3])) {
            return null;
        }
        return result;

    }
}

module.exports = PhoneNumber;
