 <?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
* 
*/
class Post extends CI_Controller
{
    
    function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
        
       // $this->load->model('Post_M');
    }
  

    public function index(){
        $data['posts']=$this->Post_M->get_posts();
        $this->load->view('home/contact', $data);
    }


    public function mail()
    {        
 $config = Array(
  'protocol' => 'smtp',
  'smtp_host' => 'ssl://smtp.googlemail.com',
  'smtp_port' => 465,
  'smtp_user' => 'kas.shimelis@gmail.com', // enter yours email
  'smtp_pass' => 'kasahun@123', //enter yours gmail password
  'mailtype' => 'html',
  'charset' => 'iso-8859-1',
  'wordwrap' => TRUE
);
if(!empty($_POST))
        {
$email = $this->input->post('email');
$message = $this->input->post('message');
        $this->load->library('email', $config);
      $this->email->set_newline("\r\n");
      $this->email->from($email); // change it to yours
      $this->email->to('kas.shimelis@gmail.com');//msz  where and in which email to send?
      $this->email->subject('New msz from website');
      $this->email->message($message);
      if($this->email->send())
     {
     redirect('post');
      
     }
     else
    {
   redirect('post');      
    }
        }
    }
    
}