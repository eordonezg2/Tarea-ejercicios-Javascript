class sinciclos{
       Sumardosnumeros(){
      //1)Sumar dos numeros siempre cuando el primero sea mayor al segundo.
      let num1 = Math.floor (Math.random() * 50);
      let num2 = Math.floor (Math.random() * 50);
      let suma = 0;
      console.log (num1 + " + " + num2);
      
      if (num1 > num2){
          suma= num1 + num2;
          console.log("La suma de los dos numeros dados es = " + suma);
      }else{
          if (num1==num2){
            console.log("Los numeros son iguales.")
          }else{
            console.log ("El primer número no es mayor, por lo tanto no se realiza la suma");
          }
     }
  }
       
       Realizar_segun_operador(){
        //2)Realizar operacion segun operador, realizar la suma, resta, multiplicacion, division, residuo.
        let n1 = Math.floor(Math.random() * 20);
        let n2 = Math.floor(Math.random() * 20);
        let suma =0, resta= 0, multiplicacion= 0, division= 0, residuo= 0;
        console.log("primer numero: " + n1);
        console.log("segundo numero: " + n2);
        suma = n1 + n2;
        resta = n1 - n2;
        multiplicacion = n1 * n2;
        division = n1 / n2;
        residuo = n1 % n2;
        console.log(n1 + " + " + n2 + " = " + suma);
        console.log(n1 + " * " + n2 + " = " + multiplicacion);
        console.log(n1 + " / " + n2 + " = " + division);
        console.log(n1 + " % " + n2 + " = " + residuo);
        console.log(n1 + " - " + n2 + " = " + resta);
    }
  
       Numeromayor(){
        //3)El mayor de dos numeros.
        let a = Math.floor (Math.random() * 50);
        let b = Math.floor (Math.random() * 50);
        console.log (+ a);
        console.log (+ b);
        if (a > b) {n
            console.log (a, "es mayor a:" ,b);
        }else{
            if (a === b){
                console.log (a, "es igual a", b);
            }else{
              console.log (b, "es mayor a:" ,a);
            }
        }
       }
       
       Presentar_un_nombre(){
        //4)Presentar un nombre.
        let nombre="Camilo"
        console.log("El nombre es:")
        console.log(nombre)
    }

    Presentartotal_coniva(){
        //5)Dado un valor de compra presentar el total considerando un 12% de iva.
        let precio=Math.floor (Math.random() *20)
        let iva=0
        console.log("el valor de compra de la camisa es:" ,precio)
        iva=precio+precio*0.12
        console.log("El precio de la camisa mas el iva es:" ,iva)
    }

    nombreiguales(){
        //9)Dado dos nombres indicar si son iguales o diferentes.
        let nom1="Marina"
        let nom2="Mariuxi"
        console.log("Comprobar si dos nombres son iguales:")
        if (nom1.toLowerCase()==nom2.toLowerCase()){
            console.log(nom1,"es igual a",nom2)
        }else{
            console.log(nom1,"no es igual a",nom2)
        }
    }

    primero_medio_ultimo(){
        //14)Presentar el primero, medio y ultimo valor de un arreglo.
        let nums =[100,200,350,400,500]
        let longi=nums.length
        let medio=nums[longi/2 | 0]
        console.log(nums)
        console.log(`Primera posición:`,nums[0])
        console.log(`Posición media:`,medio)
        console.log(`Última posición:`,nums[longi-1])
    }

    vueltodecompra(){
        //15)Vuelto de compra
        let costo=56
        let pago=100
        let vuelto=(pago-costo)
        console.log(`El vuelto de un billete de ${pago} dolares, por la compra de un producto de ${costo} dolares es ${vuelto} dolares`)
    }
}


class conciclos{
      Presenta5veces_nombre(){
        //6)Presentar 5 veces un nombre.
        let nombre="Eder"
        let i=1
       for(i=1; i<=5; i++){
          console.log(i,")",nombre)
       }
      }
      
      multiplosde3(){
        //7)Presentar los multiplos de 3 del 3 al 21.
        let i=3
        console.log("Los numeros multiplos de 3 del 3 al 21 son:")
        for(i=3; i<=21; i++){
            if (i % 3==0){
                console.log(i)
            }
        }
      }
      
      multiplosde3_21a3(){
        //8)Presentar los multiplos de de 3 del 21 al 3.
        let i=21
        console.log("Los numeros multiplos de 3 del 21 al 3 son:")
        for(i=21; i>=3; i--){
            if (i % 3==0){
                console.log(i)
            }
        }
      }
      
      presentar_menos5caracteres(){
        //10)Dado 10 elementos en un arreglo, presentar los que tengan menos de 5 caracteres.
        let arreglo=["45784","225","78","624850","705","78","10075","886","12","234"]
        console.log(arreglo)
        let n=arreglo.length
        let i=0
        console.log("Los elementos con menos de 5 caracteres en el arreglo son:")
        for (i=0;i<=n-1;i++){
            if (arreglo[i].length<5){
                console.log("Posicion", i,")", arreglo[i])
            }
        }
      }

      dadoarreglo_presentarelementos(){
        //11)Dado un arreglo presentar sus elementos.
        let elementos=[10,20,46,32,7]
        let longitud=elementos.length
        let i=0
        console.log(elementos)
        for (i=0; i<=longitud-1; i++){
            console.log("Posicion", i,")",elementos[i])
        }
      }

      arreglo_menoresde10(){
    //12)Presentar los valores menores de 10 de un arreglo.
    let Numeros = [5,10,3,21,9,25,30];
    let i = 0;
    console.log(Numeros)
    console.log("Los numeros del arreglo menores a 10 son:")
    for ( i = 0; i < Numeros.length; i++ ){
        if (Numeros[i] < 10){
            console.log("Posicion", i,")",Numeros[i]);
        }
      }
    }

      arreglo_impares_sumapares(){
        //13)Presentar  los impares y la suma de los pares de un arreglo.
        let arreglo=[3,22,7,4,9]
        let longitud=arreglo.length
        let i=0
        let suma=0
        console.log(arreglo)
        for (i=0; i<=longitud-1; i++){
            if (arreglo[i] % 2==0){
                suma=suma+arreglo[i]
            }else{
                console.log(arreglo[i],"es impar")
            }
        }
        console.log("La suma de los pares en el arreglo es de:", suma)
      }

      tabla_de_multiplicar(){
    //16) Presentar tabla de multiplicar de cualquier numero del 1 al 12
      let num=Math.floor (Math.random() *12)
      let i=1
      console.log("Tabla de multiplicar de:", num)
    for (i=1;i<=12;i++){
        console.log(num, "*", i, "=", num*i)
    }
}

      mul_sumas_sucesivas(){
    //17) multiplicacion por sumas sucesivas.
        let n1=Math.floor (Math.random() *12)
        let n2=Math.floor (Math.random() *12)
        let i=1
        let suma=0
        console.log("La multiplicacion por sumas sucesivas de", n1, "*", n2, "es:")
        for (i=1; i<=n2; i++){
            console.log(i,")",n1, "+", suma, "=", n1+suma)
            suma=suma+n1
        }
      }

      division_restas_sucesivas(){
        //18)Division por restas sucesivas.
        let a=9
        let b=2
        let num=a
        let num2=b
        let cont=0
        console.log("Division por restas sucesivas de dos numeros:")
        while (a>=b){
            console.log(a, "-", b, "=", a-b)
            a=a-b
            cont=cont+1
        }
        console.log( "la division entre ", num, "/", num2, "=", cont)
        console.log("El residuo es:", a)
      }

      factorial_denumero(){
        //19)Factorial de un numero.
        let num=Math.floor (Math.random() *10)
        let factorial=1
        let i=1
         for (i=1;i<=num;i++){
            factorial=factorial*i
         }
         console.log("El factorial de", num, "es", factorial)
      }

      Exponente_de_numero(){
        //20)Calcular el exponente de un numero.
        let num=5, exp=3
        let i=1
        let resp=1
        for (i=1;i<=exp;i++){
            resp=resp*num
        }
        console.log("El resultado de", num, "elevado a", exp, "es:",resp)
      }

      serie_finonacci(){
        //21)Calcular la serie de Fibonacci dado un numero.
        let num=15
        let a=0, b=1, c=0, i=1
        console.log("Serie de Fibonaci de", num, "numeros")
        while(i<=num){
            console.log(i,")",a)
            c=a+b
            a=b
            b=c
            i=i+1
        }
      }

      numero_invertido(){
        //22)Dado un numero, invertirlo.
        let num=8572, digito=0, unir=" "
        console.log("El numero", num, "invertido es:")
        while(num>0){
            digito=num % 10
            unir=unir+digito
            num=Math.trunc(num/10)
        }
        console.log(unir)
      }

      divisores_denumero(){
        //23)Presentar los divisores de un numero.
        let num=Math.floor (Math.random() *20)
        let i=1
        console.log("los divisores de", num, "son:")
        for (i=1;i<num;i++){
            if (num % i==0){
                console.log(i)
            }
        }
      }

      numero_perfecto(){
        //24)Presentar si un numero es perfecto
        let num=Math.floor (Math.random() *50), i=1, suma=0
        for (i=1;i<num;i++){
            if (num%i==0){
                suma=suma+i
            }
        }
        if (suma==num){
          console.log("El numero", num, "es perfecto")
        }else{
            console.log("El numero", num, "no es perfecto")
        }
      }

      numero_primo(){
        //25)Presentar si un numero es primo.
        let num=Math.floor (Math.random() *50), i=1, cont=0
        for (i=1;i<=num;i++){
            if (num%i==0){
                cont=cont+1
            }
        }
        if (cont==2){
            console.log("El numero", num, "es primo")
        }else{
            console.log("El numero", num, "no es primo")
        }
      }
}

let sinciclos1=new sinciclos()
//sinciclos1.Sumardosnumeros()
//sinciclos1.Realizar_segun_operador()
//sinciclos1.Numeromayor()
//sinciclos1.Presentar_un_nombre()
//sinciclos1.Presentartotal_coniva()
//sinciclos1.nombreiguales()
//sinciclos1.primero_medio_ultimo()
//sinciclos1.vueltodecompra()

let conciclos1=new conciclos()
//conciclos1.Presenta5veces_nombre()
conciclos1.multiplosde3()
//conciclos1.multiplosde3_21a3()
//conciclos1.presentar_menos5caracteres()
//conciclos1.dadoarreglo_presentarelementos()
//conciclos1.arreglo_menoresde10()
//conciclos1.arreglo_impares_sumapares()
//conciclos1.tabla_de_multiplicar()
//conciclos1.mul_sumas_sucesivas()
//conciclos1.division_restas_sucesivas()
//conciclos1.factorial_denumero()
//conciclos1.Exponente_de_numero()
//conciclos1.serie_finonacci()
//conciclos1.numero_invertido()
//conciclos1.divisores_denumero()
//conciclos1.numero_perfecto()
//conciclos1.numero_primo()
