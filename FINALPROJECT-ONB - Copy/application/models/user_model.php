<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_model extends CI_Model {
	
	
	
	/**
	 * this method get all the users for the admin
	 *
	 */
	public function get_users_admin()
	{
	   $data = array();
	   $this->db->where('user_level', 0);
	   
	   $q =  $this->db->get('users');
	   if($q->num_rows()>0){
		  
		   foreach($q->result_array() as $row){
			   
			    $data[] = $row;  
			 }   
		   
		} 
	   return $data;
	}
	
	
	/**
	 * this method get the count of registerd users on the website
	 *
	 */
	public function get_all_users()
	{
		
	    $this->db->where('user_level', 0);
		
		$q = $this->db->get('users');
		if($q->num_rows()>0){
			
		   $data = $q->num_rows();	
		}
	   return $data;
	}
	
	public function set_all_users()
	{
		
	    $this->db->where('user_level', 0);
		
		$q = $this->db->get('users');
		if($q->num_rows()>0){
			
		   $data = $q->num_rows();	
		}
	   return $data;
	}
	
	
		
 }//end of class
