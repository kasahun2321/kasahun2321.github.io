<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class dropselectionmodel extends CI_Model
{
    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
      
    }

    //get department table to populate the department name dropdown
    function get_country_query()     
    { 
        
        //countries  are the name of the table fro the database 
        $query=$this->db->get('countries');
        return $query->result();
    }
    }
    