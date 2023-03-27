class Calculadora{
  limpiar(){
    let d=document
    d.getElementById('result').value=""
    d.getElementById('resp').textContent=""
}
  isExponente(base,exp){
    let res = 1
    for(let i=1;i<=exp;i++){
        res*=base
    }
    return res
  }   

  isDigitos(numero,base){
    let  digitos= []
    while(numero > 0){
        digitos.push(numero%base)
        numero = parseInt(numero/base)
    }
    return digitos
  }

  isBuscado(arr,buscar){
    let pos=0,enc=0
    while(pos<arr.length && enc==0){
      if (arr[pos]==buscar){
          enc=1
      }else{
          pos+=1
      }
      }
    if (enc == 1){
      return pos
    }else{
      return -1
    }
    }

  funcbase10_2(numero){
    let arreglo=this.isDigitos(numero,2)
    let base2=""
    for(let i=arreglo.length-1;i>=0;i--){
        base2=base2+arreglo[i].toString()
    }
    return base2
    }

  base10_2() {
    let $input=document.getElementById("result")
    let numero = parseInt($input.value)
    let resp=this.funcbase10_2(numero)
    $input.value=`[Base10=${numero}] ==> Base2=${resp}`
    }
  funcbase10_16(numero) {
    let arreglo=this.isDigitos(numero,16)
    let hex = ""
    let digitosHexadecimales = "0123456789ABCDEF"
    for (let i = arreglo.length - 1; i >= 0; i--) {
      hex += digitosHexadecimales[arreglo[i]]
    }
    return hex
  }

  base10_16() {
    let $input=document.getElementById("result")
    let numero = parseInt($input.value)
    let resp=this.funcbase10_16(numero)
    $input.value=`[Base10=${numero}] ==> Base16=${resp}`
  }

  funcbase10_8(numero){
    let arreglo=this.isDigitos(numero,8)
    let base8=""
    for(let i=arreglo.length-1;i>=0;i--){
      base8=base8+arreglo[i].toString()
    }
    return base8  
  }

  base10_8(){
    let $input=document.getElementById("result")
    let numero = parseInt($input.value)
    let resp=this.funcbase10_8(numero)
    $input.value=`[Base10=${numero}] ==> Base8=${resp}`
}
  funcbase2_10(numero) {
    let arreglo = this.isDigitos(numero, 10);
    let base10 = 0, limite = arreglo.length - 1;
    for(let i = arreglo.length - 1; i >= 0; i--) {
      base10 = base10 + arreglo[i] * this.isExponente(2, limite);
      limite = limite - 1;
  }
  return base10;
}
  base2_10(){
    let $input=document.getElementById("result")
    let numero = parseInt($input.value)
    let resp=this.funcbase2_10(numero)
    $input.value=`[Base2=${numero}] ==> Base10=${resp}`
  }

  base2_16(){
    let $input=document.getElementById("result")
    let binario = parseInt($input.value)
    let decimal = this.funcbase2_10(binario)
    let hexadecimal= this.funcbase10_16(decimal)
    $input.value=`[Base2=${binario}] ==> Base16=${hexadecimal}`
  }

  base2_8(){
    let $input=document.getElementById("result")
    let binario = parseInt($input.value)
    let decimal = this.funcbase2_10(binario)
    let octal= this.funcbase10_8(decimal)
    $input.value=`[Base2=${binario}] ==> Base8=${octal}`
  }
  funcbase8_10(numero) {
    let arreglo = this.isDigitos(numero, 8)
    let base10 = 0, limite = arreglo.length - 1
    for (let i = arreglo.length - 1; i >= 0; i--) {
        base10 = base10 + arreglo[i] * this.isExponente(8, limite)
        limite = limite - 1
    }
    return base10;
  }
  funcbase16_10(numero) {
    let arreglo = this.isDigitos(numero, 16);
    let base10 = 0, limite = arreglo.length - 1;
    for (let i = arreglo.length - 1; i >= 0; i--) {
      let valor = arreglo[i];
    if (isNaN(valor)) {
      valor = parseInt(arreglo[i], 16);
        }
        base10 = base10 + valor * this.isExponente(16, limite);
        limite = limite - 1;
    }
    return base10;
}
  basenabasen(){
    let $input=document.getElementById("result")
    let numero = $input.value
    let base_origen = parseInt(prompt("Ingrese base inicial"))
    let base_destino = parseInt(prompt("Ingrese base a convertir"))
    let numero_intermedio = 0;
    if (base_origen == 2) {
    numero_intermedio = this.funcbase2_10(numero); // Convertir de base 2 a base 10
    } else if (base_origen == 8) {
    numero_intermedio = this.funcbase8_10(numero); // Convertir de base 8 a base 10
    } else if (base_origen == 16) {
    numero_intermedio = this.funcbase16_10(numero); // Convertir de base 16 a base 10
    }
    let resultado = "";
    if (base_destino == 2) {
    resultado = this.funcbase10_2(numero_intermedio); // Convertir de base 10 a base 2
    } else if (base_destino == 8) {
    resultado = this.funcbase10_8(numero_intermedio); // Convertir de base 10 a base 8
    } else if (base_destino == 16) {
    resultado = this.funcbase10_16(numero_intermedio); // Convertir de base 10 a base 16
    } else {
    resultado = numero_intermedio.toString(base_destino); // Utilizar la función integrada de JavaScript para convertir a la base destino
    }
    $input.value=`El número convertido es: ${resultado}`
  }
  vueltoEnBilletes(vuelto) {
    const billetes = [50, 20, 10, 5, 1];
    let resultado = "";
    for (let i = 0; i < billetes.length; i++) {
      let cantidad = Math.floor(vuelto / billetes[i]);
    if (cantidad > 0) {
      resultado += `${cantidad} - ${billetes[i]} `;
      vuelto -= cantidad * billetes[i];
    }
    }
    return resultado;
  }

  vuelto(){
    let $input=document.getElementById("result")
    let numero = parseInt($input.value)
    let resultado=this.vueltoEnBilletes(numero)
    if (numero <= 0 || numero > 99) {
      $input.value=`Ingrese un valor entre 1 y 99`
    }else{
      $input.value=`El vuelto de ${numero} es ${resultado}`
    }    
  }

  convertirARomanos(numero) {
    const valoresDecimales = [90, 50, 40, 10, 9, 5, 4, 1];
    const numerosRomanos = ["XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let resultado = "";
    for (let i = 0; i < valoresDecimales.length; i++) {
    while (numero >= valoresDecimales[i]) {
      resultado += numerosRomanos[i];
      numero -= valoresDecimales[i];
    }
    }
    return resultado;
  }
  romanos(){
    let $input=document.getElementById("result")
    let numero = parseInt($input.value)
    let resultado=this.convertirARomanos(numero)
    if (numero <= 0 || numero > 99) {
      $input.value=`Ingrese un valor entre 1 y 99`
    }else{
      $input.value=`El ${numero} en romano es ${resultado}`
    }
  }

  encontrarSubcadena(cadena, subcadena) {
    for (let i = 0; i < cadena.length; i++) {
      let sub = "";
    for (let j = i; j < cadena.length; j++) {
      sub += cadena[j];
    if (sub === subcadena) {
      return i;
    }
    }
    }
    return -1;
  }

  buscacadena(){
    let $input=document.getElementById("result")
    let cadena = $input.value
    let buscado=prompt("Ingrese dato a buscar")
    let pos = this.encontrarSubcadena(cadena,buscado)
    if (pos >= 0){
      $input.value=`[${cadena}] - ${buscado} se encuentra en la posicion: ${pos}`
    }else{
      $input.value=`[${cadena}] - ${buscado} no se encuentra en la cadena`
    }   
  }  

  obtenerMayor(arreglo) {
    let mayor = +arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
    if (+arreglo[i] > mayor) {
      mayor = +arreglo[i];
    }
    }  
    return mayor;
  }
  obtenerMenor(arreglo) {
    let menor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] < menor) {
        menor = arreglo[i];
      }
    }  
    return menor;
  }
  maynum(){
    let $input=document.getElementById("result")
    let cadena = $input.value
    let arreglo = cadena.split(";")
    let result = this.obtenerMayor(arreglo)
    $input.value=`El mayor del arreglo [${arreglo}] es ${result}`
  }   
  mennum(){
    let $input=document.getElementById("result")
    let cadena = $input.value
    let arreglo = cadena.split(";")
    let result = this.obtenerMenor(arreglo)
    $input.value=`El menor del arreglo [${arreglo}] es ${result}`
  } 
  buscaArreglo(){
    let $input=document.getElementById("result")
    let cadena = $input.value
    let arreglo = cadena.split(";")
    let buscado=prompt("Ingrese dato a buscar")
    let pos = this.isBuscado(arreglo,buscado)
    if (pos >= 0){
      $input.value=`[${arreglo}] - ${buscado} se encuentra en la posicion: ${pos}`
    }else{
      $input.value=`[${arreglo}] - ${buscado} no se encuentra en el arreglo`
    }    
  }     
  eliminarElemento(arreglo, buscado) {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] !== buscado) {
      nuevoArreglo.push(arreglo[i]);
    }
    }
    return nuevoArreglo;
  }
  eliminatel(){
    let $input=document.getElementById("result")
    let cadena = $input.value
    let arreglo = cadena.split(";")
    let elim=prompt("Ingrese dato a buscar")
    let result = this.eliminarElemento(arreglo,elim)
    $input.value=`${result}`
  }  
  insertarElementoOrdenado(arreglo,nuevoElemento) {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
    if (nuevoElemento < arreglo[i]) {
      nuevoArreglo.push(nuevoElemento)
      nuevoElemento = arreglo[i];
    }
      nuevoArreglo.push(arreglo[i])
    }
      nuevoArreglo.push(nuevoElemento)
    return nuevoArreglo
  }
  
  insertel(){
    let $input=document.getElementById("result")
    let cadena = $input.value
    let arreglo = cadena.split(";")
    let nuevo=prompt("Ingrese dato a buscar")
    let result = this.insertarElementoOrdenado(arreglo,nuevo)
    $input.value=`${result}`
  }  
  
  convertirArregloACadena(arreglo, separador) {
    let cadena = ''
    for (let i = 0; i < arreglo.length; i++) {
      cadena += arreglo[i]
    if (i < arreglo.length - 1) {
        cadena += separador
    }
    }
    return cadena
  }
  arreglocadena(){
    let $input=document.getElementById("result")
    let cadena = $input.value
    let arreglo = cadena.split(";")
    let nuevo=prompt("Ingrese separador")
    let result = this.convertirArregloACadena(arreglo,nuevo)
    $input.value=`${result}`
  }  
  cadenaAArreglo(cadena) {
    let arreglo = []
    let elemento = ""
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === ";") {
        arreglo.push(elemento)
        elemento = ""
      }else{
        elemento += cadena[i]
      }
    }
    arreglo.push(elemento)
    return arreglo;
  }
  cadenaarreglo(){
    let $input=document.getElementById("result")
    let cadena = $input.value
    let result = this.cadenaAArreglo(cadena)
    $input.value=`[${result}]`
  }  
  primeraLetraMayuscula(cadena) {
    let resultado = ""
    let siguienteEsMayuscula = true
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === " ") {
        resultado += " "
        siguienteEsMayuscula = true
      }else{
      if (siguienteEsMayuscula) {
        resultado += cadena[i].toUpperCase()
        siguienteEsMayuscula = false
      }else{
        resultado += cadena[i]
      }
      }
      }
    return resultado
  }
    
  palabrafrase(){
    let $input=document.getElementById("result")
    let cadena = $input.value
    let resp=this.primeraLetraMayuscula(cadena)
    $input.value=`${cadena} ----> ${resp}`
  }

  contarCaracteres(cadena) {
    let cc = 0
    let cp = 0
    let cpc = 0
    let cdp = 0
    for(let i = 0; i < cadena.length; i++) {
      if (cadena[i] === ',') {
        cc++;
      } else if (cadena[i] === '.') {
        cp++;
      } else if (cadena[i] === ';') {
        cpc++;
      } else if (cadena[i] === ':') {
        cdp++;
      }
      }
    return `${cc}"," ${cp}"." ${cpc}";" ${cdp}":"`
  }
  caracteresespeciales(){
    let $input=document.getElementById("result")
    let cadena = $input.value
    let resp=this.contarCaracteres(cadena)
    $input.value=`${cadena} tiene: ${resp}`
  }

  sumarDigitos(numero) {
    let suma = 0
    for (let i = 0; i < numero.length; i++) {
      suma += parseInt(numero[i])
    }
    return suma;
  }

  sumadedigitoscadena(){
    let $input=document.getElementById("result")
    let numero = ($input.value)
    let suma = this.sumarDigitos(numero)
    $input.value=`La suma es: ${suma}`
  }
}
let cal = new Calculadora()
