class HelloWorld {
    static hello( name?: string ) {
        // Your code here
        if (typeof name === 'undefined') 
            name = 'World'
    
        return `Hello, ${name}!`

    }
}

export default HelloWorld
