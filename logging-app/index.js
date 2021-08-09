

function sum (a, b){
    // log info
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Arguments must be numeric");
    }

    const total = a + b;
    // log debug
    return total;
}

try{
    sum(1,2);
    sum(1, "test");
}catch(err){
    // log error
}
