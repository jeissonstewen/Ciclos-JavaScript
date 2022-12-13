/* 1. Sumar una cantidad N números MAYORES a 0 utilizando MIENTRAS. */
    /* let n = parseInt(prompt("Ingrese un número positivo")), suma=0
    while(n>0){
        suma+=n
        n = parseInt(prompt("Ingrese un número positivo"))
        console.log(suma)
    } */

/* 2. Imprimir números aleatorios en el rango de 1 a 10 mientras el número no sea igual a cero. */
    /* let num = Math.floor(Math.random()*10)+1
    while(num!=0){
        console.log(num)
        num = Math.floor(Math.random()*10)
    } */
    
/* 3. Imprimir 20 números aleatorios en el rango de 1 a 1000. */
/* let min = 0, max = 1000, Num
for(i=0;i<20;i++){
    Num = Math.floor(Math.random()*(max-min+1)+min)
    console.log(Num);
} */

/* 4. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
todos los números impares desde 1 hasta ese número. */
    /* let num = parseInt(prompt("Ingrese un numero positivo"))
    if(num>0){
        for(i=1; i<=num;i++){
            if(i%2===1){
                console.log(i)
            }
        }       
    } else alert("El número debe ser positvo") */

/* 5. Una persona debe realizar un muestreo con 20 personas para determinar el promedio de peso
de los niños, jóvenes, adultos y viejos que existen en su zona habitacional. Se determinan las
categorías con base en la sig., tabla:
CATEGORIA EDAD
Niños 0 - 12
Jóvenes 13 - 29
Adultos 30 - 59
Viejos 60 en adelante */
/* let edad, peso = 0, promNin, promJov, promAdu, promVie, pesoN =0, pesoJ =0, pesoA =0, pesoV =0, ninios=0,jovenes = 0, adultos = 0, viejos = 0
for(i=1;i<=2;i++){
    edad = parseInt(prompt("Ingrese la edad de la persona"))
    peso = parseFloat(prompt("Ingrese el peso de la persona"))
    if(edad>=0 && edad <=12){
        ninios++
        pesoN+=peso
    } else if(edad>12 && edad <=29){
        jovenes++
        pesoJ+=peso
    } else if(edad>=30 && edad <=59){
        adultos++
        pesoA+=peso
    } else if(edad>=60){
        viejos++
        pesoV+=peso
    }
}
if(ninios!=0){
    promNin = pesoN/ninios
    console.log("El promedio de peso de los niños es: "+promNin)    
}
if(jovenes!=0){
    promJov = pesoJ/jovenes
    console.log("El promedio de peso de los jovenes es: "+promJov)
}
if(adultos!=0){
    promAdu = pesoA/adultos
    console.log("El promedio de peso de los adultos es: "+promAdu)
}
if(viejos!=0){
    promVie = pesoV/viejos
    console.log("El promedio de peso de los viejos es: "+promVie)
} */


/* 6. Diseñen un algoritmo que imprima la siguiente secuencia:
1.1.1 - 1.1.2 - 1.1.3 - 1.1.4
1.2.1 - 1.2.2 - 1.2.3 - 1.2.4
1.3.1 - 1.3.2 - 1.3.3 - 1.3.4
1.4.1 - 1.4.2 - 1.4.3 - 1.4.4
1.5.1 - 1.5.2 - 1.5.3 - 1.5.4 */
/* for(i=1;i<5;i++){
    document.write("1."+"1."+i+" ")
} document.write("<br>")
for(i=1;i<5;i++){
    document.write("1."+"2."+i+" ")
} document.write("<br>")
for(i=1;i<5;i++){
    document.write("1."+"3."+i+" ")
} document.write("<br>")
for(i=1;i<5;i++){
    document.write("1."+"4."+i+" ")
} document.write("<br>")
for(i=1;i<5;i++){
    document.write("1."+"5."+i+" ")
    }  */


/* 7. Un Zoólogo pretende determinar el porcentaje de animales que hay en las siguientes tres
categorías de edades: de 0 a 1 año, de más de 1 año y menos de 3 y de 3 o más años. El
zoológico todavía no está seguro del animal que va a estudiar. Si se decide por elefantes solo
tomara una muestra de 20 de ellos; si se decide por las jirafas, tomara 15 muestras, y si son
chimpancés tomara 40. */
/* let edad, x = 0,y = 0,z = 0, tipo //1-Elefantes 2-Jirafas 3-Chimpances
tipo = parseInt(prompt("Elija el tipo de animal\n1 - Elefantes\n2 - Jirafas\n3 - Chimpancés"))

if(tipo===1){
    for(i=1;i<=20;i++){
        edad = parseInt(prompt("Ingrese la edad del elefante "+i))
        if(edad>=0 && edad <=1){
            x++
        } else if(edad>1 && edad <3){
            y++
        } else if(edad>=3){
            z++
        }
    }
    x = (x*100)/(i-1)
    y = (y*100)/(i-1)
    z = (z*100)/(i-1)

    console.log("De 0 a 1 año hay "+x+"%")
    console.log("Entre 1 a 3 año hay "+y+"%")
    console.log("de 3 o más años hay "+z+"%")

} else if(tipo===2){
    for(i=1;i<=15;i++){
        edad = parseInt(prompt("Ingrese la edad de la Jirafa "+i))
        if(edad>=0 && edad <=1){
            x++
        } else if(edad>1 && edad <3){
            y++
        } else if(edad>=3){
            z++
        }
    }
    x = (x*100)/(i-1)
    y = (y*100)/(i-1)
    z = (z*100)/(i-1)

    console.log("De 0 a 1 año hay "+x+"%")
    console.log("Entre 1 a 3 año hay "+y+"%")
    console.log("de 3 o más años hay "+z+"%")
}
 else if(tipo===3){
    for(i=1;i<=40;i++){
        edad = parseInt(prompt("Ingrese la edad del Chimpancé "+i))
        if(edad>=0 && edad <=1){
            x++
        } else if(edad>1 && edad <3){
            y++
        } else if(edad>=3){
            z++
        }
    }
    x = (x*100)/(i-1)
    y = (y*100)/(i-1)
    z = (z*100)/(i-1)

    console.log("De 0 a 1 año hay "+x+"%")
    console.log("Entre 1 a 3 año hay "+y+"%")
    console.log("de 3 o más años hay "+z+"%")
    
} */

/* 8. Una compañía de seguros tiene contratados a una cantidad N vendedores. Cada vendedor
hace tres ventas a la semana. Su política de pagos es que un vendedor recibe un sueldo base, y
además un 10% extra por comisiones del total de sus ventas. El gerente de la compañía desea
saber cuánto dinero recibirá cada vendedor en una semana por concepto de comisiones por
las ventas, y cuanto será el total tomando en cuenta su sueldo base y sus comisiones. */

/* let nombre, N, venta1, venta2, venta3, base = 700000, comision, total
N = parseInt(prompt("Ingrese la cantidad de empleados a consultar"))
for(x=0;x<N;x++){
    nombre = prompt("Digite el nombre del vendedor")
    venta1 = parseInt(prompt("Digite el valor de la venta 1"))
    venta2 = parseInt(prompt("Digite el valor de la venta 2"))
    venta3 = parseInt(prompt("Digite el valor de la venta 3"))
    comision = (venta1+venta2+venta3)*0.1
    total = comision+base
    console.log("El vendedor "+nombre)
    console.log("Obtuvo comisiones en la semana por: "+comision)
    console.log("Total de sueldo en la semana es: "+total)
} */

/* 9. Una agencia de venta de autos paga a su personal de ventas un salario de $950.000, más una
comisión de $170.000 por cada auto vendido, y también un 5% extra del valor total de las
ventas. Diseñar un algoritmo para calcular el salario de un vendedor en un determinado mes,
realizando la lectura por pantalla del no de automóviles vendidos y el valor de cada auto para
hallar el monto total de ventas. */


/* 10. Hallar el promedio de calificaciones de un estudiante, teniendo en cuenta el nombre estudiante
y 5 notas; calculando la nota final de acuerdo a los siguientes porcentajes: Dos (2) notas valen
el 40% y las otras tres (3) valen el 60%. */