<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class crud extends CI_Controller {

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
		$this->load->view('mypracticepage/crud');

	}
}
