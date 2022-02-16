console.log("Hola Mundo");
let i = 0;
/*for(i=1;i<=5;i++){
    console.log(i);
}*/
var id = setInterval(function(){
    i++;
    if(i === 5){
        clearInterval(id);
    }
    console.log(i);
},500);
console.log("Adios Mundo");