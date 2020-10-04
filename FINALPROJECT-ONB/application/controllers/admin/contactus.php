<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Contactus extends CI_Controller {

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
		$data['main']  = 'admin/post/contactus';
		$data['contactus']  = $this->post_model->contactus();
		
		
		$this->load->view('admin/template_admin', $data);
	}
	
	
	
}//end of class
