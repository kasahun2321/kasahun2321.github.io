<?php
class uploadfile extends CI_Controller {

    function __construct()
    {
        parent::__construct();
        $this->load->helper(array('form', 'url'));
    }

    //index function
    function index()
    {
        //load file upload form
        $this->load->view('upload_file_view');
    }

    //file upload function
    function upload()
    {
        //set preferences
        $config['upload_path'] = './uploads/';
        $config['allowed_types'] = 'txt|pdf';
        $config['max_size']    = '100';

        //load upload class library
        $this->load->library('upload', $config);

        if (!$this->upload->do_upload('filename'))
        {
            // case - failure
            $upload_error = array('error' => $this->upload->display_errors());
            $this->load->view('upload_file_view', $upload_error);
        }
        else
        {
            // case - success
            $upload_data = $this->upload->data();
            $data['success_msg'] = '<div class="alert alert-success text-center">Your file <strong>' . $upload_data['file_name'] . '</strong> was successfully uploaded!</div>';
            $this->load->view('upload_file_view', $data);
        }
    }
}
?>