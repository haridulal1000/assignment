<?php
if(mysql_connect('localhost','root','') && mysql_select_db('userinfo')){

}
else{
	echo 'Could not connect to the database';
}



?>