<?php
/*
*For password strength checking
* @param string $password
* @return string
*/

function checkPasswordStrength($password){
  
  $uppercase    = preg_match('@[A-Z]@', $password);
  $lowercase    = preg_match('@[a-z]@', $password);
  $number       = preg_match('@[0-9]@', $password);
  $specialchars = preg_match('@[^\w]@', $password);
  
  if(!$uppercase){
  	return "Atleast one capital letter (A to Z) is required";
  }
  if(!$lowercase){
  	return "Atleast one lower letter (a to z) is required";
  }
    if(!$number){
  	return "Atleast one number (0 to 9) is required";
  }
   if(!$specialchars){
  	return "Atleast one special character is required";
  }
  if(strlen($password)<14){
  	return "Length should be greater than 14";
  }
  return 'success'; 
}

$p = "hAewl$5lowoffld";
echo checkPasswordStrength($p);
?>

