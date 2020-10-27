
<?php
class imageupload extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper(array('form','url'));
        
    }

    function index()
    
    	{
    		 $this->load->view('home/headingnew');
       $this->load->view('home/imageupload.php');
        $this->load->view('footer');
    		

    	}
    	function do_upload()
    	{
    		$config['upload_path']= APPPATH'./uploads/';
    		$config['allowed_types']= 'jpg|png|gif';
    		$config['max_size']= '150';
    		$config['max_width']= '1024';
    		$config['max_height']= '768';
    		$config['file_name']= rand('100','999');
    		$config['overwrite']= false;

    		$this->load->library('upload',$config);
    		if(!$this->upload->do_upload('userfile'))
    		{
    			$error=array('error'=>$this->upload->display_errors());
    			 $this->load->view('home/headingnew');
			       $this->load->view('home/imageupload.php',$error);
			        $this->load->view('footer');
    		

    		}
    		else {
    			$data = array('upload_data' =>$this->upload->data());
    			$this->load->view('home/headingnew');
			       $this->load->view('home/imageupload.php',$error);
			        $this->load->view('footer');
    		
    			
    		}
    	}

}