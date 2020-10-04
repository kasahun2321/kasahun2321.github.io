<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class contactuus extends CI_Model {
	
 function getPosts(){
	  $this->db->select("*"); 
	  $this->db->from('contacts');
	  $q = $this->db->get();
	  

		if($q->num_rows()>0){
			
		     foreach($q->result_array() as $row){
			       
				 $data[] = $row;  
				 
			}	
			
		}
	     
	    return $data;
	 }
	 
	 
	

	}
	

	