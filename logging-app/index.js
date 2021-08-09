
function sum (a, b){
    // log info
    if(typeof a !== "number" || typeof b !== "number"){
        const err = new Error("Arguments must be numeric");
        // log error
        throw err;
    }
    const total = a + b;
    // log debug
    return total;
}