<?php
class plusminus extends CI_Controller
{
  
    function index()
    {
    	$this->load->view('home/headingnew');
    	$this->load->view('plusminusv');
    	$this->load->view('footer');
    }
}
