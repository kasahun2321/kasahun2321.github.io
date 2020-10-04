<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Calendar extends CI_Controller {

    public function display($year='null', $month='null')
	{

		$this->load->model('mycalender_model');
		$data['calender'] = $this->mycalender_model->generate($year,$month);
		$this->load->view('admin/mycalender_view', $data);
		
	
	}
}
