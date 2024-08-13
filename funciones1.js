var inicio=parseInt(prompt("ingrese el valor inicial de la tabla "));
var fin=parseInt(prompt("Ingrese el valor final de la tabla "))

function tablita(inicio,fin)
{
var valor = parseInt(prompt("Ingrese la tabla de multiplicar que quiera obtener"))
if(inicio,fin)
{
    document.write("mostrando el contenido en forma ascendente <br>")
    for (let f = inicio; f <= fin; f++) {
        var tabla = f * valor;
        document.write(f + " * " + valor +" = "+tabla+'<br>')
        
    }

}
else{

    document.write("mostrando el contenido en forma descendente <br>")
    for (let f = inicio; f >= fin; f++) {
        var tabla = f * valor;
        document.write(f + " * " + valor +" = "+tabla+'<br>')




}




}
}
