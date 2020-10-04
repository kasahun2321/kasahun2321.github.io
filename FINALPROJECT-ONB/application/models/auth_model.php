<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth_model extends CI_Model {
	          
			  //the register input rules
	          public $rules_register  = array(
		         'name' => array(
					 'field' => 'name',
					 'label' => 'Title',
					 'rules' => 'trim|required'
					 ),
		          
				 'reg_no' => array(
					 'field' => 'reg_no',
					 'label' => 'Registration Number',
					 'rules' => 'trim|required|callback_reg_number|max_length[8]'
					 ),
					 
				 'password' => array(
					 'field' => 'password',
					 'label' => 'Password',
					 'rules' => 'trim|requiredmax_length[6]'
					 ),
                   'password' => array(
					 'field' => 'password',
					 'label' => 'Password',
					 'rules' => 'trim|required'
					 ),	 
					 
				 'college' => array(
					 'field' => 'college',
					 'label' => 'College',
					 'rules' => 'trim|required'
					 ),
					  'Department' => array(
					 'field' => 'Department',
					 'label' => 'Department',
					 'rules' => 'trim|required'
					 ),
					   'Role' => array(
					 'field' => 'role',
					 'label' => 'role',
					 'rules' => 'trim|required'
					 ),
			       );
				   
				   
		      //the login input rules
              public $rules_login = array(   
				 'reg_no' => array(
					 'field' => 'reg_no',
					 'label' => 'Registration Number',
					 'rules' => 'trim|required'
					 ),
				 'password' => array(
					 'field' => 'password',
					 'label' => 'Password',
					 'rules' => 'trim|required'
					 ),	 
			
			  );		
			  
			   //the login input rules for admin
              public $rules_login_admin = array(   
				 'name' => array(
					 'field' => 'name',
					 'label' => 'Name',
					 'rules' => 'trim|required'
					 ),
				 'password' => array(
					 'field' => 'password',
					 'label' => 'Password',
					 'rules' => 'trim|required'
					 ),	 
			
			  );	
			  
	
	
	
	
	
	  /* 
	   *$this method authenticate the user for loggin
	   * and stores the users unique datas into a session
	   *
	   */
	   public function login()
	   {
			 //resciving the user inputs
			 $reg_no    = $this->input->post('reg_no');
			 $password = sha1($this->input->post('password'));
			 
			 $this->db->select('user_id, reg_no, name, password');
			 $this->db->where('password', $password);
			 $this->db->where('reg_no', $reg_no);
			 $this->db->limit(1);
			 
			 $q = $this->db->get('users');
			 if($q->num_rows()>0)
			 { 
			   
			   $row = $q->row_array();
			   $data = array(
			   
				  'user_id'  => $row['user_id'],
				  'name'      => $row['name'],
				  'reg_no'     => $row['reg_no'],
				  'loggedin' => true,
			   
			   );
			   
			   $this->session->set_userdata($data);
			   return TRUE; 
			 }
			 else
			 {
			 
			   return FALSE;
			 
			 }
	    
	 }
      
	  
	   /* 
	   *$this method authenticate the site Administrator for loggin
	   * and stores the users unique datas into a session
	   *
	   */
	   public function login_admin()
	   {
			  //resciving the user inputs
			 $name    = $this->input->post('name');
			 $password = sha1($this->input->post('password'));
			 
			 $this->db->select('user_id, name, password, user_level');
			 $this->db->where('user_level', 0);
			 $this->db->where('password', $password);
			 $this->db->where('name', $name);
			 $this->db->limit(1);
			 
			 $q = $this->db->get('users');
			 if($q->num_rows()>0)
			 { 
			   
			   $row = $q->row_array();
			   $data = array(
			   
				  'user_id'  => $row['user_id'],
				  'name'      => $row['name'],
				  'user_level' => $row['user_level'],
				  'loggedin' => true,
			   
			   );
			   
			   $this->session->set_userdata($data);
			   return TRUE; 
			 }
			 else
			 {
			 
			   return FALSE;
			 
			 }
			 
	   }
	  
   
	  /* 
	   *$this method confirms if a users is logged_in
	   *
	   */
		public function loggedin()
		{
			
		  return (bool)$this->session->userdata('loggedin');
		  
		}	
		
		
		/* 
	   *$this method confirms if an admin is logged in
	   *
	   */
		public function user_level()
		{
			
		    return (int)$this->session->userdata('user_level');
		  
		}	
		     
				   
				   
	/* 
	 *$this method insert the registered user into the database
	 *
	 */
     public function register()
	 {

		 $name        =     $this->input->post('name');
		 $reg_no      =   $this->input->post('reg_no');
		 $password    =   sha1($this->input->post('password'));
		 $cpassword    =   sha1($this->input->post('password'));
		 $college      =   $this->input->post('college');
		 $department      =   $this->input->post('Department');
		 $Section     =   $this->input->post('Section');
		$role		=		$this->input->post('role');
		 
		 $data = array(
		  
			  'name'        => $name,
			  'reg_no'     => $reg_no,
			  'password'    => $password,
			 
			  'user_status' => 'inactive',
			  'user_level'=>'0',
			  'select_college'=>$college,
			  'department'=>$department,
			  'select_your_section'=>$Section,
			  'role'=> $role,
		 
		 );
		 
		 
		//$insert =  $this->db->insert('users', $data );
		$insert =  $this->db->insert('users', $data );
		return $insert; 
		 
	 } 			   
	
	
	
    /**
	 * this methods distroys the users session data
	 */
	public function logout()
	{
	    $data = array( 'user_id','name' , 'reg_no', 'loggedin' );
		$logout = $this->session->unset_userdata($data);
		return $logout;
	}
	
	
	/**
	 * this method checks for an availabilty of a registration number
	 *
	 */
	 public function reg_no($reg_no)
	 {
	    $this->db->select('reg_no');
		$this->db->where('reg_no', $reg_no);
		
		$q = $this->db->get('users');
	    
		
		if($q->num_rows()>0){
			  
			  return true; //username has been taken
			
			}
				
		return false; //username is available
				
	 }
	 
	 
	
	
	
	 
	
		
 }//end of class
