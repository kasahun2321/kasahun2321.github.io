<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

    public function __construct()
	{
	       parent::__construct();
	
	}


    /*
	 * this method displays all the admin dashboard items 
	 *
	 */
	public function index()
	{   
	    $data['title'] = 'Dashboard | Admin';
		$data['main']  = 'admin/dashboard';
		$data['users'] = $this->user_model->get_all_users();
		$data['all_post_count'] = $this->post_model->get_all_post();
		$data['count_inactive_post']  = $this->post_model->count_inactive_post();
		$this->load->view('admin/template_admin', $data);
	}
	
	
	
	
}//end of class
