<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {

    public function __construct()
	{
	       parent::__construct();
	
	}

    /**
	 * this index method loads the login page 
	 *
	 */
	public function index()
	{    
	     
	    $data['title'] = 'Login | Notice board';
		$data['main'] = 'auth/login';
		$this->load->view('auth/template_login', $data);
		$this->load->view('footer');
	}
	
	
	
	/**
	 * this login method process the user login details 
	 *
	 */
	public function login()
	{
	
	    if(isset($_POST['mysubmit']))	
	   {
			
	     $rules = $this->auth_model->rules_login;
		 $this->form_validation->set_rules($rules);
		 
		  if($this->form_validation->run() === false)
		  {
			    $data['title'] = 'Login | Notice board';
		        $data['main'] = 'auth/login';
		        $this->load->view('auth/template_login', $data);
		  
		  }
		  else
		  {
			  
			 
			  
				    if($query = $this->auth_model->login())
					{
					  $name = $this->session->userdata('name');
					  $msg = 'You are now loggeg in ' . $name;
					  $this->session->set_flashdata('msg', $msg);

					   $var1="User";
					    $var3="Authorized_user";
			           $var2=$this->input->post('role');
			          if($var1==$var2)
			           {
					  redirect('home');
						}
					elseif ($var2==$var3) {
							 redirect('home/indext');
						}
					}
				else
					{
						
					   $msg = 'Incorect email and password';
					   $this->session->set_flashdata('msg', $msg);
						
					     $data['title'] = 'Login | Notice board';
				         $data['main'] = 'auth/login';
				         $this->load->view('auth/template_login', $data);
					
					}
				   
				  }
				
			   
	   }else{
				
				   $data['title'] = 'Login | Notice board';
		           $data['main'] = 'auth/login';
		           $this->load->view('auth/template_login', $data);
			}
	 	
	}
	
	
	
	/**
	 * this register method register the user onto the site 
	 *
	 */
	 public function register()
	 {
		 
	   if(isset($_POST['mysubmit']))	
	   {
		  
		  $rules = $this->auth_model->rules_register;
		  $this->form_validation->set_rules($rules);
		  
		  if($this->form_validation->run() === false)
		  {
			     $data['title'] = ' Register | Notice board';
				 $data['main'] = 'auth/register';
				 $this->load->view('auth/template_register', $data);
			  
		  }else{
			
			if($query = $this->auth_model->register()){
			
			    $message = 'succesfully registered';
				$this->session->set_flashdata('message', $message);
				redirect('admin/users');	
			 
			}else{
				  
				 $data['title'] = ' Register | Notice board';
				 $data['main'] = 'auth/register';
				 $this->load->view('auth/template_register', $data);
			 
			}  
		  
		  }
		
	   
	   }else{
			   
			   
			     $data['title'] = ' Register | Notice board';
				 $data['main'] = 'auth/register';
				 $this->load->view('auth/template_register', $data);
			   
			   }	 
		 
	 }
	
	
	
  /*
   *@logout method
   *@description this logout the user and kills the session
   **/
	public function logout(){
		
		$this->auth_model->logout();
		$name = $this->session->userdata('name');
		$msg = 'You are now logged out ' . $name;
		$this->session->set_flashdata('msg', $msg); 
		redirect('home/slider', 'refresh');
		   
	}
	
	
	
  /**
   * this is a callback method that checks for availabilty of registration number
   *  to promote  unique reg number among student
   */
	public function reg_number($no)
	{
	  
	   if($this->auth_model->reg_no($no)){
		   
		      return false;
		   }else{
			   
			     return true;
			   }	
    
	}
	
	
	/**
	 * this method checks for availabilty of registration number
	 *  using Ajax
	 *
	 */
	public function reg_number_ajax()
	{      
	       $no = $_GET['regNo'];
	  
	   if($this->auth_model->reg_no($no)){
		      
			  echo '<p class="text-danger"><i>Registration number is used by same one</i></p>';
			  
		      
		   }else{
			     echo '<p class="text-success"><i>Registration number is valid</i></p>'; 
			     
			   }	
    
	}
	
	
	/**
	 * this login method process the admin login details 
	 *
	 */
	public function login_admin()
	{
	   
	   
	    if(isset($_POST['mysubmit']))	
	   {
			
	     $rules = $this->auth_model->rules_login_admin;
		 $this->form_validation->set_rules($rules);
		 
		  if($this->form_validation->run() === false)
		  {
			    $data['title'] = 'Login | Admin Panel';
		        $data['main'] = 'admin/users/login';
		        $this->load->view('admin/template_login', $data);
		  
		  }
		  else
		  {
			  
		    if($query = $this->auth_model->login_admin())
			{
			  $name = $this->session->userdata('name');
			  $msg = 'You are now loggeg in ' . $name;
			  $this->session->set_flashdata('msg', $msg);
			  redirect('admin/dashboard');
			
			}
			else
			{
				
			   //hacking attempt redirect to Noticeboard
			    redirect('admin/dashboard');
				//echo "incorrect username or password";
				
			     
			
			}
		   
		  }
	   
	   }else{
				
				   $data['title'] = 'Login | Admin Panel';
		           $data['main'] = 'admin/users/login';
		           $this->load->view('admin/template_login', $data);
			}
	 	
	}

	public function login_admin1()
	{
	   
	   
	    if(isset($_POST['mysubmit']))	
	   {
	   	
			   $var1="kasahun";
			   $var3="kifiya";
			           $var2=$this->input->post('name');
			          if($var1==$var2)
			           {
					   redirect('admin/dashboard');
						}

					else {

						//window.document.getElementById("incorect username or pwd");
						}
			}
			else
			{
				echo "not correct";
			}
	
	
	
	
	}
	
	
}//end of class
