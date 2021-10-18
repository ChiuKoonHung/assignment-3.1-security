const logger = require('./src/logger');

function sum (a, b){
    logger.log({
        level: 'info',
        message: 'Info files!'
      });
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Arguments must be numeric");
    }

    const total = a + b;
    logger.log({
        level: 'debug',
        message: 'debug files!'
      });
    return total;
}

try{
    sum(1,2);
    sum(1, "test");
}catch(err){
    logger.log({
        level: 'error',
        message: 'error files!'
      });
}
