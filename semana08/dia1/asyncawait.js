async function hola(nombre){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('Hola ' + nombre)
            resolve(nombre)
            reject('hay un error')
        },1000)
    })
}

async function hablar(nombre){
    return new Promise( (resolve,reject) =>{
        setTimeout(function(){
            console.log('como te va ' +  nombre)
            resolve(nombre)
            reject('no te entiendo')
        },1000)
    })
}

async function adios(nombre){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            console.log('Adios ' + nombre);
            resolve();
        },1000);
    })
}

async function main(){
    let nombre = await hola('César');
    await hablar(nombre);
    await adios(nombre);
    console.log('fin ...')
}

console.log('inicio...')
main();
console.log('esto va ir primero')