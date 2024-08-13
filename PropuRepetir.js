var cantidad=0;
var x=1000;

cantidad=parseFloat(prompt("ingrese cantidad de dolares de 1000 para arriba"))
while(x<1000||x>100000)
{
cantidad=parseFloat(prompt("ingrese cantidad de dolares de 1000 para arriba"))
}
document.write("_____________________________________________________________________________________________________________________<br>")
document.write("Dolares_______________________________________Btc_______________________________________Eth<br>")
document.write("_____________________________________________________________________________________________________________________<br>")
while(x<=cantidad)
{

document.write(x.toFixed(2)+"_______________________________________"+x/57810+"_______________________________________"+x/3062+"<br>")
document.write("<br><br>");
x++;
}