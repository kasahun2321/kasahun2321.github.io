<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Contact extends CI_Controller {

    public function __construct()
	{
	       parent::__construct();
               $this->load->library('session'); 
	
	}

    /**
	 * this index method loads the login page 
	 *
	 */
	public function index()
	{    
            $this->load->view('header');
            $this->load->view('home/contactus/contact');
        $this->load->view('footer');
            
        }
        public function postEmail()
        {
        $data=$this->input->post();
        $this->load->library('email');
        $config=array();
        $config['protocol']='smtp';
        $config['smtp-host']='mail.tricksite.com';
        $config['smtp-user']='testing@tricksit.com';
        $config['smtp-pass']='kasahun';
        $config['smtp-port']='25';
        $this->email->initialize($config);
        $this->email->set_newline("\r\n");
        
          $this->email->from($data['email']);
          $this->email->to('testing@tricksit.com');
          $this->email->subject($data['subject']);
          $this->email->message($data['message']);
          if($this->email->send())
          {
                  $this->session->set_flashdata('success','email sent succesfully');
                  redirect('home');
        }
        }

}


