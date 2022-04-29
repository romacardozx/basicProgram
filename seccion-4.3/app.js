let dia = 6; //lunes , 2 = martes...
             // 0 es el domingo 

/*
switch(dia) {

    case 0 :
        console.log('Es domingo');
        break;
    case 1 :
        console.log('Es lunes');
        break;
    case 2 :
        console.log('Es martes');
        break;
    case 3 :
         console.log('Es miercoles');
        break;
    case 4 :
         console.log('Es jueves');
        break;
    case 5 :
         console.log('Es viernes');
        break;
    case 6 :
         console.log('Es sabado');
        break;

    default:
        console.log('El dia ingresado no es permitido')

} */

if (dia === 0 ){
    console.log('Domingo');
} else if(dia === 1){
    console.log('Lunes')
} else if(dia === 2){
    console.log('Martes')
} else if(dia === 3){
    console.log('miercoles')
} else if(dia === 4){
    console.log('Jueves')
} else if(dia === 5){
    console.log('Viernes')
} else if(dia === 6){
    console.log('Sabado')
} else {
    console.log('El dia ingresado no es permitido') 
}



