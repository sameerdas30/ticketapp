<?php
/********  local Config  ***********/
 //session_start();
  define('DBSERVER','localhost');
  define('DATABASENAME','ticketfiler');
  define('USERNAME','root');
  define('PASSWORD','');

  $addres='http://'.$_SERVER['SERVER_NAME'].'/ticketfiler/';
  
  
  $imagepath='http://'.$_SERVER['SERVER_NAME'].'/ticketfiler/images/';
  $stylepath='http://'.$_SERVER['SERVER_NAME'].'/ticketfiler/css/';
  $jspath='http://'.$_SERVER['SERVER_NAME'].'/ticketfiler/js/';
  
  
  
  $maddres='http://'.$_SERVER['SERVER_NAME'].'/ticketapp/';
  $mimagepath='http://'.$_SERVER['SERVER_NAME'].'/ticketapp/images/';
  $mstylepath='http://'.$_SERVER['SERVER_NAME'].'/ticketapp/css/';
  $mjspath='http://'.$_SERVER['SERVER_NAME'].'/ticketapp/js/';
?>