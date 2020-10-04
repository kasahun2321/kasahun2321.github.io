<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class blog_controller extends CI_Controller {

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

		$data['title']="my blog title";
		$data['heading']="heading";
		$data['todo']=" scoss";
		$data['date']="12/5/1992";
		$this->load->view('home/headingnew');
		$this->load->view('simple_blog/blog_view',$data);
		$this->load->view('footer');
	}
}
