/*crear una funcion q imprima los valores de 10000 hasta 1000000, en rangos de 1000 e
en sentido inverso*/
var inicio=10000;
var fin=100000;

function inverso()
{
    for (let index = fin; index >=inicio; index=index-1000) {
        document.write(index,"--")
        
    }
}




//-----------------------------------------------------------------------------------------
//crear una funcion q imprima los valores de 10000 hasta 1000000, en rangos de 1000

var inicio=10000;
var fin=100000;

function serie()
{
    for (let index = inicio; index <=fin; index=index+1000) {
        document.write(index,"--")
 
    }
}



//----------------------------------------------------------------------------
//crear una funcion que imprima 10 veces una frase

var texto="buenos dias";
var k=1; //inicializando
function frase()
{
    while(k<=10)//comprobando
    {
        document.write(texto,"<br>");


        k++;//actualizando

    }//fin de while

}
//----------------------------------------------------------------------

var dias=["lunes<br>","martes<br>","miercoles<br>","jueves<br>","viernes<br>","sabado<br>","domingo<br>"];

function semanita()
{
    for (let index = 0; index < dias.length; index++) {
        document.write(dias[index]);
  
    }

    //llamar la funcion

    
}//fin de semanita

//semanita()
//--------------------------------------------------------------------------------------------------/
