<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Admin_controller extends MY_Controller {

    
    
   	public function __construct(){
		  parent::__construct();
		  
		  //this blocks of code redireect an unathorised
		  // entry into the admin area
		  
		  	$exeption_urls = array(
			
			//no exeptions for now  
			
			);
			
			if(in_array(uri_string(), $exeption_urls) == FALSE){
			
			  if(!$this->auth_model->user_level()){
				  redirect('home');
				}
			
			}
			
		  
		}
		
		
		
		
		
		
		
		

	
}

