<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Post extends Frontend_Controller {

    public function __construct()
	{
	       parent::__construct();
	
	}

  /**
   * this index method load the add_announcemnet view 
   *
   */ 
	public function index()
	{   
	    if($this->auth_model->loggedin() === FALSE){
			
			  $msg = 'You must login to post announment';
			  $this->session->set_flashdata('msg', $msg);
				  redirect('auth');
		 }
	    
	    $data['title'] = 'Add Annoucment |Notice Board';
		$data['main'] = 'public/add_post';
		$data['navlist'] = $this->category_model->get_category_nav();
		$this->load->view('auth/template_register', $data);
	}
	

	
	
	
	/**
	 * this post method process the users post 
	 * and set it for verification
	 *
	 */
	 public function add_post(){
	 
	 
	 
		 
		 if(isset($_POST['mysubmit'])){
			 
			 //validate the users post
			 $rules = $this->post_model->rules_post;
			 $this->form_validation->set_rules($rules);
			 
			 if($this->form_validation->run() === false){
			         $data['title'] = 'Add Post |Notice Board';
					 $data['main'] = 'public/add_post';
					 $data['navlist'] = $this->category_model->get_category_nav();

					 
					 $this->load->view('auth/template_register', $data);
			  
		      }else{
				  
				     if($query = $this->post_model->post()){
			
							  $msg = 'Your post has been successfuly posted, wait for admin Verification';
							  $this->session->set_flashdata('msg', $msg);
							  
							  redirect('home');	
						 
						}else{
							  
							 $data['title'] = 'Add Post |Notice Board';
					         $data['main'] = 'public/add_post';
							 $data['navlist'] = $this->category_model->get_category_nav();
					         $this->load->view('auth/template_register', $data);
						 
						    }  
				       
				  } 
			 
			 
		 }else{
				   
					 $data['title'] = 'Add Post |Notice Board';
					 $data['main'] = 'public/add_post';
					 $data['navlist'] = $this->category_model->get_category_nav();
					 $this->load->view('auth/template_register', $data);
									   
				   }
	 
	 
	 }
	 
	 
	
	 
	 
}//end of class
