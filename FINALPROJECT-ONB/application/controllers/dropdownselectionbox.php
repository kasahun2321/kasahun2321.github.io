
<?php
/* 
 * File Name: employee.php
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class dropdownselectionbox extends CI_Controller
{
    public function __construct()
    {
         parent::__construct();
          $this->load->model('dropselectionmodel','dropdown_model',true);
    }
     function index()
    {
         $data['countries'] = $this->dropdown_model-> get_country_query();
         $this->load->view('mypracticepage/dropdownselection');
     }
    }
