  //Array con palabras
  var palabras=["raton","gato","perro","pez","pajaro"];
  //esta variable es para poner los 0
  var palabra="";
  //el prompt
  var letraUsuario="";
  var intentos=0;
  //salir del bucle de comprobacion de letras
  var bucle=false;
  // array vacio para almacenar las palabras introducidas en el prompt
  var solucion=[];
  var acertado=false;
  var letrasAcertadas=0;
  var salirbucle=false;
  var fin=false;

  //hacemos un random de el array palabras
  var aleatorio = palabras[Math.floor(Math.random() * palabras.length)];

  //asignamos el la variable aleatorio a la nueva variable adivinar
      var adivinar=aleatorio;
      console.log(adivinar);

  //recorremos el array de adivinar letra a letra
      for (var i = 0; i < adivinar.length; i++) {
        adivinar[i]
        console.log(adivinar);
      }

  //sustituimos las letras que tiene la palabra por 0
      for (var i = 0; i < adivinar.length; i++) {
       palabra=palabra+"0";
      }
      console.log(palabra);

      var intentosJuego=prompt("Dime cuantos intentos quieres del 5 al 10");
      //pasamos el promt que es un string a ser un numero
      intentosJuego=parseInt(intentosJuego);

//comprobamos que es un numero
      if (intentosJuego=isNaN(intentosJuego)) {
        alert("Esta mal, tiene que ser un numero");
      }else {
        alert("Esta bien, es un numero");
      }

      //Comprobacion que el prompt esta entre el 5 y el 10
        while (intentosJuego<5 || intentosJuego>10) {
            intentosJuego=prompt("Tiene que ser un numero entre el 5 y el 10");
        }
        
      //intentos esta en 0 y intentosJuego son los que ponemos en el prompt
      while (intentos<intentosJuego && salirbucle==false) {
        letraUsuario=prompt("Dime una letra");
        for (var i = 0; i < adivinar.length; i++) {
          //cogemos del array adivinar que se habrá generado una palabra aleatoria del Array palabras
          //y con el charAt coge solo una letra, si esa letra es la misma que hemos puesto en el prompt
          // ponemos la variable acertado en true y metemos en el array vacio solucion la letra acertada.
          if (adivinar.charAt(i)==letraUsuario) {
            acertado=true;
            solucion[i]=adivinar.charAt(i);
          }
        }
        if (letraUsuario=="comodin" || letraUsuario=="COMODIN") {
          alert("Letra concedida");
          //hacemos un random de una letra de la palabra selecionada
          solucion[Math.floor(Math.random() * solucion.length)];
          //para que no cuente el turno
          intentos--;
        }
        if (letraUsuario=="fin") {
          alert("Game over");
          salirbucle=true;
        }
        if (acertado==false) {
          alert("Has fallado");
          intentos++;
        }else {
          alert("Has acertado");
          letrasAcertadas++;
        }
        if (letrasAcertadas==adivinar.length) {
          alert("Has ganado");
          salirbucle=true;
        }
        acertado=false;
    }

    console.log(solucion);
    console.log(palabras);


  var element = document.getElementById("intentos");
  element.textContent="El numero de intentos son: "+intentos;
  var element = document.getElementById("palabraAdivinar");
  element.textContent="La palabra a adivinar era: "+adivinar;
