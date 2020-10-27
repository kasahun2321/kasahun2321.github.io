<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class my_model extends CI_Model {

    public function __construct()
	{
	       parent::__construct();
	
	}

    /**
	 * this index method loads the login page 
	 *
	 */
	public function login($user,$pass)
	{    
            
            $this->db->select('username,password,level');
            $this->db->from('adminldb');
            $this->db->where('username',$user);
            $this->db->where('password',$pass);
            
            $this->db->limit(1);
            $query=$this->db->get();
            if ($query->num_rows==1)
            {
                return $query->result();
            }
            else {
                return false;
            }
        }
}