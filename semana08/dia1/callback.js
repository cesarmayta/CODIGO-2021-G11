function hola(nombre,primercallback){
        setTimeout(function(){
        console.log('Hola ' + nombre);
        primercallback(nombre);
    },1000);
}

function hablar(nombre,segundocallback){
    setTimeout(function() {
        console.log('como te va ' + nombre);
        segundocallback(nombre);
    },1000);
}

function adios(nombre,tercercallback){
    setTimeout(function(){
        console.log('Adios ' +  nombre);
        tercercallback();
    },1000)
}
//callback hell
hola('César',
    function(nombre)
    {
        hablar(nombre,
                function(nombre){
                    adios(nombre,function(){
                        console.log('fin...');
                    }
                    );
                }
            );
    }
);

