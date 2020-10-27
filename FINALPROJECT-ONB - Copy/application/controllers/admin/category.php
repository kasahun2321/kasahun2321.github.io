<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Category extends CI_Controller {

    public function __construct()
	{
	       parent::__construct();
	
	}



    /*
	 * this method displays the all categories for the admin
	 *
	 */
	public function index()
	{   
	    
	    $data['title'] = 'Category | Admin';
		$data['main']  = 'admin/category/category';
		$data['categories'] = $this->category_model->get_category_admin();
		$this->load->view('admin/template_admin', $data);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}//end of class
