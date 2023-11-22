<?php
/*
	CRUD creado por Oscar Amado
	Contacto: oscarfamado@gmail.com
*/
class administratorController extends Administrator{

	function index(){
		require_once('views/all/header.php');
		require_once('views/all/nav.php');
		require_once('views/index/index.php');
		require_once('views/index/modals.php');
		require_once('views/all/footer.php');
	}

	function table_users(){
		?>
		<table class="table table-bordered">
			<thead>
				<tr>
				<th>ID</th>
				<th>Nombre Comercial</th>
				<th>Colonia</th>
				<th>Nombre Social</th>
				<th>Tipo Producto</th>
				<th>N_Ext</th>
				<th>Telefono</th>
				<th>N_Propietario</th>
				<th>Opciones</th>
				</tr>
			</thead>
			<tbody >		
		<?php
		foreach (parent::get_view_users()	as $data) {
		?>
		<tr>
			<td><?php echo $data->id_user; ?> </td>
			<td><?php echo $data->C_Postal_user; ?> </td>
			<td><?php echo $data->Colonia_user; ?> </td>
			<td><?php echo $data->Calle_user; ?> </td>
			<td><?php echo $data->N_Int_user; ?> </td>
			<td><?php echo $data->N_Ext_user; ?> </td>
			<td><?php echo $data->telefono_user; ?> </td>
			<td><?php echo $data->N_Propietario_user; ?> </td>
			<td>
			  <div class="btn-group">
			    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
			    Seleccionar <span class="caret"></span></button>
			    <ul class="dropdown-menu" role="menu">
			      <li><a href="#" onclick="ModalUpdate('<?php echo $data->id_user; ?>','<?php echo $data->C_Postal_user; ?>','<?php echo $data->Colonia_user; ?> ','<?php echo $data->Calle_user; ?> ','<?php echo $data->N_Int_user; ?>','<?php echo $data->N_Ext_user; ?>','<?php echo $data->telefono_user; ?>','<?php echo $data->N_Propietario_user; ?>');">Actualizar</a></li>
			      <li><a href="#" onclick="deleteUser('<?php echo $data->id_user; ?>');">Borrar</a></li>
			    </ul>
			  </div>
			</td>
		</tr>
		<?php
		}
		?>
			</tbody>
		</table>	
	<?php	
    }
    
	function deleteuser(){		
			parent::set_delete_user($_REQUEST['id']);		
    }

	function registeruser(){
		$data = array(
					
					'C_Postal' 	=> $_REQUEST['C_Postal'],
					'Colonia'				=> $_REQUEST['Colonia'],
					'Calle'		=> $_REQUEST['Calle'],
					'N_Int'		=> $_REQUEST['N_Int'],
					'N_Ext'			=> $_REQUEST['N_Ext'],
					'telefono'			=> $_REQUEST['telefono'],
					'N_Propietario'			=> $_REQUEST['N_Propietario']
					);		
					parent::set_register_user($data);		
    }    
    
	function updateuser(){
		$data = array(
					'id'				=> $_REQUEST['id'],
					'C_Postal'		=> $_REQUEST['C_Postal'],
					'Colonia'				=> $_REQUEST['Colonia'],
					'Calle'		=> $_REQUEST['Calle'],
					'N_Int'		=> $_REQUEST['N_Int'],
					'N_Ext'			=> $_REQUEST['N_Ext'],
					'telefono'			=> $_REQUEST['telefono'],
					'N_Propietario'			=> $_REQUEST['N_Propietario']
					);		
			parent::set_update_user($data);		
	}    
    
}

