<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Post extends CI_Controller {

    public function __construct()
	{
	       parent::__construct();
	
	}

    
	
	/**
	  *  this method displays all announcement for the administrator 
	  *
	  */
	public function index()
	{   
	    
	    $data['title'] = 'Announcement | Admin';
		$data['main']  = 'admin/post/announcemnt';
		$data['count_post']  = $this->post_model->count_inactive_post();
		$data['posts'] = $this->post_model->get_all_post_admin();
		
		$this->load->view('admin/template_admin', $data);
	}
	
	
	/**
	  *  this method fetches all inactive posts
	  *
	  */
	public function inactive_post()
	{
	  
	
	    $data['title'] = 'Inactive Post | Noticeboard';
	    $data['main']  = 'admin/post/inactive';
	    $data['inactive_post'] = $this->post_model->inactive_post();
	 
	    $this->load->view('admin/template_admin', $data); 	
	 
	
	}
	
	
	/**
	  * this method edit a particular post 
	  *
	  */
	public function edit_post($id)
	{
	  
	        
	  
	  if(isset($_POST['mysubmit'])){
		  
		     //validate the users post
			 $rules = $this->post_model->rules_post;
			 $this->form_validation->set_rules($rules);
			 
			  if($this->form_validation->run() === false){
			         $data['title'] = 'Edit Post | Admin Panel';
	                 $data['main']  = 'admin/post/edit';
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
	
	
	
   /**
	 * this method process the admin post 
	 *
	 */
	 public function add_posts(){
	 
	 
	 
		 
		 if(isset($_POST['mysubmit'])){
			 
			 //validate the users post
			 $rules = $this->post_model->rules_post;
			 $this->form_validation->set_rules($rules);
			 
			 if($this->form_validation->run() === false){
			         $data['title'] = 'Add Post | Admin Panel';
					 $data['main'] = 'admin/post/add_post';
					 $data['navlist'] = $this->category_model->get_category_nav();
					 $this->load->view('admin/template_admin', $data);
			  
		      }else{
				  
				     if($query = $this->post_model->admin_post()){
			
							  $msg = 'Post Succesfuly Added';
							  $this->session->set_flashdata('message', $msg);
							  redirect('admin/post');	
						 
						}else{
							  
							 $data['title'] = 'Add Post | Admin Panel';
					         $data['main'] = 'admin/post/add_post';
							 $data['navlist'] = $this->category_model->get_category_nav();
			                 $this->load->view('admin/template_admin', $data);
						 
						    }  
				       
				  } 
			 
			 
		 }else{
				   
					 $data['title'] = 'Add Post | Admin Panel';
					 $data['main'] = 'admin/post/add_post';
					 $data['navlist'] = $this->category_model->get_category_nav();
					 $this->load->view('admin/template_admin', $data);
									   
				   }
	 
	 
	 }
	 
	 
	 
	/**
	 * this method recives a call from ajax to activate a post
	 *
	 */ 
	public function activate_ajax()
	{    
	     $id = $_POST['id'];
	     
	     $activate   = $this->post_model->activate_post($id);
		 if($activate){
			echo "activate"; 
		 }
	   
	} 
	
  
  
  /**
   * this methods deletes a particular post 
   *
   */
	public function delete($id)
	{
	    $post = $this->post_model->delete($id);
		
		if(!count($post)){
		    
			redirect('admin/post');	
		
		}
	
	   redirect('admin/post');
	
	}
	
	
}//end of class
