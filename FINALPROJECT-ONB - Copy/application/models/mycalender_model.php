<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class mycalender_model extends CI_Model {

function generate($year, $month)

	{ 
		$conf = array('start_date' => 'monday' ,
		'show_next_prev'=>true,
		'next_prev_url'=>base_url().'admin/calendar/display' );
	  $this->load->library('calendar',$conf);


	  $cal_data = array(15 =>'hoy' ,
	  					17=>'bar'
	   );
	  return $this->calendar->generate($year, $month, $cal_data);
	}
}


