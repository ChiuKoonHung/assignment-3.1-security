const logger = require('./src/logger');

function sum (a, b){
    // log info
    logger.info(`sum() is called with a:${a} and b:${b}`);
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Arguments must be numeric");
    }
    const total = a + b;
    // log debug
    logger.debug(`total: ${total}`);
    return total;
}

try{
    sum(1,2);
    sum(1, "test");
}catch(err){
    // log error
    logger.error("Type Error", err);
}
