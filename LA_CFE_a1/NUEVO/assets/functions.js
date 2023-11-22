function objectAjax(){
	var xmlhttp = false;
	try{
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e){
		try{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");			
		} catch (E){
			xmlhttp = false;	
		}		
	}
	if(!xmlhttp && typeof XMLHttpRequest!='undefined'){
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}
//Inicializo automaticamente la funcion read al entrar a la pagina o recargar la pagina;
addEventListener('load', read, false);

function read(){
        $.ajax({        
        		type: 'POST',
                url:   '?c=administrator&m=table_users',               
                beforeSend: function () {
                        $("#information").html("Procesando, espere por favor...");
                },
                success:  function (response) {
                        $("#information").html(response);
                }
        });
}

function register(){
	console.log("Entrando en la función de registrar");
	C_Postal 	= document.formUser.C_Postal.value;
	Colonia 			= document.formUser.Colonia.value;
	Calle 		= document.formUser.Calle.value;
	N_Int 	= document.formUser.N_Int.value;
	N_Ext	 	= document.formUser.N_Ext.value;
	telefono	 	= document.formUser.telefono.value;
	N_Propietario		 	= document.formUser.N_Propietario.value;
	ajax = objectAjax();
	ajax.open("POST", "?c=administrator&m=registeruser", true);
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){			
			read();			
			alert('Los datos guardaron correctamente.');			
			$('#addUser').modal('hide');
		}
	}
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
ajax.send("C_Postal="+C_Postal+"&Colonia="+Colonia+"&Calle="+Calle+"&N_Int="+N_Int+"&N_Ext="+N_Ext+"&telefono="+telefono+"&N_Propietario="+N_Propietario);
}	

function update(){
	console.log("Entrando en la función actualizar.");
	id 					= document.formUserUpdate.id.value;
	C_Postal 		= document.formUserUpdate.C_Postal.value;
	Colonia 				= document.formUserUpdate.Colonia.value;
	Calle	 		= document.formUserUpdate.Calle.value;
	N_Int 		= document.formUserUpdate.N_Int.value;
	N_Ext 			= document.formUserUpdate.N_Ext.value;
	telefono	 		= document.formUserUpdate.telefono.value;
	N_Propietario		 		= document.formUserUpdate.N_Propietario.value;
	ajax = objectAjax();
	ajax.open("POST", "?c=administrator&m=updateuser", true);
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			read();
			$('#updateUser').modal('hide');
		}
	}
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
ajax.send("C_Postal="+C_Postal+"&Colonia="+Colonia+"&Calle="+Calle+"&N_Int="+N_Int+"&N_Ext="+N_Ext+"&telefono="+telefono+"&N_Propietario="+N_Propietario+"&id="+id);

}

function deleteUser(id){	
	if(confirm('¿Esta seguro de eliminar este registro?')){						
	ajax = objectAjax();
	ajax.open("POST", "?c=administrator&m=deleteuser", true);
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){			
			read();		
		}
	}
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("id="+id);
	}
}

function ModalRegister(){
	$('#addUser').modal('show');
}

function ModalUpdate(id,C_Postal,Colonia,Calle,N_Int,N_Ext,telefono,N_Propietario){			
	document.formUserUpdate.id.value 				= id;
	document.formUserUpdate.C_Postal.value 	= C_Postal;
	document.formUserUpdate.Colonia.value 				= Colonia;
	document.formUserUpdate.Calle.value 		= Calle;
	document.formUserUpdate.N_Int.value 		= N_Int;
	document.formUserUpdate.N_Ext.value 		= N_Ext;
	document.formUserUpdate.telefono.value 			= telefono;
	document.formUserUpdate.N_Propietario.value 			= N_Propietario;
	$('#updateUser').modal('show');
}

/*
	CRUD creado por Oscar Amado
	Contacto: oscarfamado@gmail.com
*/