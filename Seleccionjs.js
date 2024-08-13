        let servicio, forma,descuento, costo;
        //captura de datos
        alert("servicios disponibles");
        servicio=parseInt(prompt("Ingrese \n 1-alisado \n 2- uñas \n 3-tinte \n 4-Botox para cabello \n 5-Facial  \n 6-Pestañas"));
        while(servicio<1 || servicio>6)
            {
                servicio=parseInt(prompt("Ingrese \n 1-alisado \n 2- uñas \n 3-tinte \n 4-Botox para cabello \n 5-Facial  \n 6-Pestañas"))
            }
            forma=parseInt(prompt("Ingrese la forma pago: \n 1-Credito \n 2-Efectivo"))
            while(forma<1 || forma>2 )
            {
               forma=parseInt(prompt("Ingrese la forma pago: \n 1-Credito \n 2-Efectivo"));
            }
            descuento=parseInt(prompt("¿Es cliente frecuente? \n 1-si\n 2-no"));
            while(descuento<1 || descuento>2)
            {
                descuento=parseInt(prompt("¿Es cliente frecuente? \n 3-si\n 4-no"));
            }
            

            //procesos
            switch(servicio)
            {
                case 1:
                    {
                       costo=50;
                       break; 
                    }
                case 2:
                    {
                       costo=35;
                       break; 
                    }
                case 3:
                    {
                       costo=25;
                       break; 
                    }
                case 4:
                    {
                        costo=10;
                        break;
                    }
                case 5: 
                    {
                        costo=15;
                        break;
                    }
                case 6: 
                    { 
                        costo=20;
                        break;
                      
                    }

            } //fin sw

            //impresion

            if(forma==1 && servicio==1)
            {
                document.write("Usted se hizo un alisado<br>");
                document.write("Usted ha cancelado con tarjeta de credito <br>");
                document.write("El costo del servicio es "+costo+"<br>");
                document.write("Se le hara un recargo del 10%"+(costo*0.10)+"<br>");
                document.write("El pago total sera de "+(costo*1.10));
            }
            else if(forma==2 && servicio==1)
            {
                     
                    document.write("Usted se hizo un alisado<br>");
                    document.write("Usted ha cancelado con Efectivo <br>");
                    document.write("El costo del servicio es "+costo+"<br>");
                    document.write("El pago total sera de "+costo);
            }

            if(descuento==1 && servicio==1)
                {  
                document.write("<br>"+"por ser cliente precuente recibes un descuento del 25% "+"<br>")
                document.write(" el pago final sera de " + (costo-1.25).toFixed(2) + "<br>")
                document.write("<br>","Gracias por visitarnos "+"<br>")
                }
            else if (descuento==2 && servicio==1)
                
                {
                
                document.write("<br>","Gracias por visitarnos "+"<br>") 
                }







           else if(forma==1 && servicio==2)
            {
                document.write("Usted se hizo Uñas<br>");
                document.write("Usted ha cancelado con tarjeta de credito <br>");
                document.write("El costo del servicio es "+costo+"<br>");
                document.write("Se le hara un recargo del 10%"+(costo*0.10)+"<br>");
                document.write("El pago total sera de "+(costo*1.10));
            }
            else if(forma==2 && servicio==2)
            {
                 
                document.write("Usted se hizo Uñas<br>");
                document.write("Usted ha cancelado con Efectivo <br>");
                document.write("El costo del servicio es "+costo+"<br>");
                document.write("El pago total sera de "+costo);
            }

            if(descuento==1 && servicio==2)
                {  
                document.write("<br>"+"por ser cliente precuente recibes un descuento del 25% "+"<br>")
                document.write(" el pago final sera de " + (costo-1.25).toFixed(2) + "<br>")
                document.write("<br>","Gracias por visitarnos "+"<br>")
                }
            else if (descuento==2 && servicio==2)
                
                {
                
                document.write("<br>","Gracias por visitarnos "+"<br>") 
                }



            else if(forma==1 && servicio==3)
            {
                document.write("Usted se hizo un tinte<br>");
                document.write("Usted ha cancelado con tarjeta de credito <br>");
                document.write("El costo del servicio es "+costo+"<br>");
                document.write("Se le hara un recargo del 10%"+(costo*0.10)+"<br>");
                document.write("El pago total sera de "+(costo*1.10));

            }
            else if(forma==2 && servicio==3)
            {
                document.write("Usted se hizo un tinte<br>");
                document.write("Usted ha cancelado con Efectivo <br>");
                document.write("El costo del servicio es "+costo+"<br>");
                document.write("El pago total sera de "+costo);

            }

            if(descuento==1 && servicio==3)
                {  
                document.write("<br>"+"por ser cliente precuente recibes un descuento del 25% "+"<br>")
                document.write(" el pago final sera de " + (costo-1.25).toFixed(2) + "<br>")
                document.write("<br>","Gracias por visitarnos "+"<br>")
                }
            else if (descuento==2 && servicio==3)
                
                {
                
                document.write("<br>","Gracias por visitarnos "+"<br>") 
                }



            else if(forma==1 && servicio==4)
            {
                document.write("Usted se hizo un tratamiento de botox para cabello <br>");
                document.write("Usted ha cancelado con tarjeta de credito <br>");
                document.write("El costo del servicio es "+costo+"<br>");
                document.write("Se le hara un recargo del 10%"+(costo*0.10)+"<br>");
                document.write("El pago total sera de "+(costo*1.10));
            }
            else if(forma==2 && servicio==4)
            {
                document.write("Usted se hizo un tratamiento de botox para cabello <br>");
                document.write("Usted ha cancelado con Efectivo <br>");
                document.write("El costo del servicio es "+costo+"<br>");
                document.write("El pago total sera de "+costo);


            }
            if(descuento==1 && servicio==4)
                {  
                document.write("<br>"+"por ser cliente precuente recibes un descuento del 25% "+"<br>")
                document.write(" el pago final sera de " + (costo-1.25).toFixed(2) + "<br>")
                document.write("<br>","Gracias por visitarnos "+"<br>")
                }
            else if (descuento==2 && servicio==4)
                
                {
                
                document.write("<br>","Gracias por visitarnos "+"<br>") 
                }


            else if(forma==1 && servicio==5)
            {
                document.write("Usted se hizo un tratamiento Facial <br>");
                document.write("Usted ha cancelado con tarjeta de credito <br>");
                document.write("El costo del servicio es "+costo+"<br>");
                document.write("Se le hara un recargo del 10%"+(costo*0.10)+"<br>");
                document.write("El pago total sera de "+(costo*1.10));
                
            }
            else if(forma==2 && servicio==5)
            {
                document.write("Usted se hizo un tratamiento Facial <br>");
                document.write("Usted ha cancelado con Efectivo <br>");
                document.write("El costo del servicio es "+costo+"<br>");
                document.write("El pago total sera de "+costo);
            }

            if(descuento==1 && servicio==5)
                {  
                document.write("<br>"+"por ser cliente precuente recibes un descuento del 25% "+"<br>")
                document.write(" el pago final sera de " + (costo-1.25).toFixed(2) + "<br>")
                document.write("<br>","Gracias por visitarnos "+"<br>")
                }
            else if (descuento==2 && servicio==5)
                
                {
                
                document.write("<br>","Gracias por visitarnos "+"<br>") 
                }

            else if(forma==1 && servicio==6)
            {
                document.write("Usted se hizo el servicio de Pestañas <br>");
                document.write("Usted ha cancelado con tarjeta de credito <br>");
                document.write("El costo del servicio es "+costo+"<br>");
                document.write("Se le hara un recargo del 10%"+(costo*0.10)+"<br>");
                document.write("El pago total sera de "+(costo*1.10));
                
            }
            else if(forma==2 && servicio==6)
            {
                document.write("Usted se hizo un tratamiento Facial <br>");
                document.write("Usted ha cancelado con Efectivo <br>");
                document.write("El costo del servicio es "+costo+"<br>");
                document.write("El pago total sera de "+costo);
            }

            if(descuento==1 && servicio==6)
                {  
                document.write("<br>"+"por ser cliente precuente recibes un descuento del 25% "+"<br>")
                document.write(" el pago final sera de " + (costo-1.25).toFixed(2) + "<br>")
                document.write("<br>","Gracias por visitarnos "+"<br>")
                }
            else if (descuento==2 && servicio==6)
                
                {
                
                document.write("<br>","Gracias por visitarnos "+"<br>") 
                }

