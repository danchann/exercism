let Acronyms = {
    parse: function(str) {
        let arr = str.split(/[ -]|[a-z](?=[A-Z])/)
        for (let i=0; i < arr.length; i++) {
            arr[i] = arr[i][0].toUpperCase()
        }
        return arr.join('')
    }
}

module.exports = Acronyms;