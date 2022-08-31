// try {
//     try {
//         throw new Error('ops');
//     }
//     finally {
//         console.log('fially');
//     }
// }
// catch (ex){
//     console.error('outer',ex.message)
// }

// try {
//     try {
//         throw new Error("opss");
//     }
//     catch(ex){
//         console.error("inner",ex.message);
//     }
//     finally {
//         console.error("finally");
//     }
// }
// catch (ex){
//     console.error("outer",ex.message)
// }

try {
    try {
        throw new Error("opss");
    }
    catch(ex){
        console.error("inner",ex.message);
        throw ex; 
    }
    finally {
        console.error("finally");
    }
}
catch (ex){
    console.error("outer",ex.message)
}