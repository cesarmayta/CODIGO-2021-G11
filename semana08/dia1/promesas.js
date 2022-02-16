function hola(nombre){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('Hola ' + nombre)
            resolve(nombre)
            reject('hay un error')
        },1000)
    })
}

function hablar(nombre){
    return new Promise( (resolve,reject) =>{
        setTimeout(function(){
            console.log('como te va ' +  nombre)
            resolve(nombre)
            reject('no te entiendo')
        },1000)
    })
}

function adios(nombre){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            console.log('Adios ' + nombre);
            resolve();
        },1000);
    })
}

hola('César')
    .then(hablar)
    .then(adios)
    .then(()=> {
        console.log('fin ...')
    })