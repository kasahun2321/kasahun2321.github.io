<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users extends CI_Controller {

    public function __construct()
	{
	       parent::__construct();
	
	}

    /*
	 * this method displays all users for the admin
	 *
	 */
	public function index()
	{   
	    
	    $data['title'] = 'Users | Admin';
		$data['main']  = 'admin/users/users';
		$data['users'] = $this->user_model->get_users_admin();
		$this->load->view('admin/template_admin', $data);
	}
	
	public function edit_user($id)
	{
	  
	        
	  
	  if(isset($_POST['mysubmit'])){
		  
		     //validate the users post
			 $rules = $this->post_model->rules_post;
			 $this->form_validation->set_rules($rules);
			 
			  if($this->form_validation->run() === false){
			         $data['title'] = 'Edit Post | Admin Panel';
	                 $data['main']  = 'admin/users/edit';
	                 $data['navlist'] = $this->category_model->get_category_nav();
	                 $this->load->view('admin/template_admin', $data);
			  }else{
				  
				        if($query = $this->post_model->admin_update()){
			
							  $msg = 'Post Succesfuly Added';
							  $this->session->set_flashdata('message', $msg);
							  redirect('admin/post');	
						 
						}else{
							
							
							
							
							}
				  
				  }
			 
		  
		  
	  }else{
	  
	  $data['posts'] = $this->post_model->get_post_by_id_edit($id);
	  
	  $data['title'] = 'Edit Post | Admin Panel';
	  $data['main']  = 'admin/post/edit';
	  $data['navlist'] = $this->category_model->get_category_nav();
	  $this->load->view('admin/template_admin', $data);
	  
	  
	  
	  }
	  
	
	}
	
	
	
}//end of class
