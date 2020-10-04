<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class About extends CI_Controller {

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
            $this->load->view('home/headingnew');
            $this->load->view('about');
           // $this->load->view('home/collapsable');
            $this->load->view('footer');
            
        }
        public function admin()
	{    
            $this->load->view('header');
            $this->load->view('mypracticepage/admin');
            $this->load->view('footer');
            
        }

public function contact()
	{    
            $this->load->view('header');
            $this->load->view('mypracticepage/contactus');
            $this->load->view('footer');
            
        }
        function imageupload()
         {    
           $data['title']="upload image file";
           $this->load->view('image_upload',$data);
            
        }

     function ajax_upload()
        {
            if (isset($FILES["image_file"]["name"]))
                 {
                    $config['upload_path']='./upload/';
                    $config['allowed_types']='jpf|jpeg|png|gif';
                    $this->load->library('upload', $config);

                    if(!$this->upload->do_upload('image_file'))
                    {
                        echo $this->upload->display_errors();
                    }
                    else
                    {

                     $data=$this->upload->data();
                     echo '<img scr="'.base_url().'upload/'.$data["file_name"].'"/>';   
                    }
            }
        }
        
       

}