// Funcion para validar los diferentes campos del formulario de marcas.
function validacion(){
	nombre = document.getElementById("nombre").value; //campo nombre
	errornombre = document.getElementById("errornombre");  //div donde muestre el error del campo nombre
	if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {

		errornombre.innerHTML = "";     
		errornombre.innerHTML = "El nombre de la marca es obligatorio.";
  		document.formulario.nombre.focus();
 	 	return false;	
	}else{
		errornombre.innerHTML = "";     
		errornombre.innerHTML = "";
	}

	referencia = document.getElementById("referencia").value; // campo referencia
	errorreferencia = document.getElementById("errorreferencia"); //div donde muestre el error del campo refencia
	if( referencia == null || referencia.length == 0 || /^\s+$/.test(referencia) ) { 		
  		errorreferencia.innerHTML = "";     
		errorreferencia.innerHTML = "La referencia es obligatorio.";
  		document.formulario.referencia.focus();
 	 	return false;	
	}
	if( isNaN(referencia) ) {
  		errorreferencia.innerHTML = "";     
		errorreferencia.innerHTML = "Solo acepta valores númericos.";
  		document.formulario.referencia.focus();
 	 	return false;	
	}
	if(referencia<1){
		errorreferencia.innerHTML = "";     
		errorreferencia.innerHTML = "Debe ser un número positivo.";
  		document.formulario.referencia.focus();
 	 	return false;	
	}

}