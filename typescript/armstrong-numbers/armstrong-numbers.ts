class ArmstrongNumbers {
    static isArmstrongNumber (input: number): boolean {
        let arr = String(input).split('')
        let sum: number = 0
        for (let i=0; i < arr.length; i++) {
            sum += Math.pow(parseInt(arr[i]), arr.length)
        }
        return sum === input

    }
}

export default ArmstrongNumbers
