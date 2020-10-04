<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class calender extends CI_Controller {

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
            
            $conf=  array('data_type'=>'short',
                               'month_type'=>'long');
                
            $this->load->library('calendar',$conf);
            $data=array(
                18=>'http://abc.com/?id=123',
                22=>'http://abc.com/?id=423');
            
            $calenderdata['data']=$data;
            $this->load->view('home/simplecalender',$calenderdata);
        }
        
        
        public function indexx()
	{ 
            
            $conf=  array('data_type'=>'short',
                               'month_type'=>'long');
                
            $this->load->library('calendar',$conf);
            $data=array(
                18=>'http://abc.com/?id=123',
                22=>'http://abc.com/?id=423');
            
            $calenderdata['data']=$data;
            $this->load->view('home/slider',$calenderdata);
        }
}


