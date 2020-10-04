<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Category_model extends CI_Model {
	
	
	
	
  /*@ this method gets the navbar menu categories
   *@
   **/
	public function get_category_nav()
	{
		$data = array();
		$this->db->select('category_id, category_name');
		$this->db->where('category_status', 'active');
		$this->db->order_by('category_name', 'asc');
		
		$q = $this->db->get('category');
		
		if($q->num_rows()>0){
			
		   foreach($q->result_array() as $row){
			        $data[] = $row;
			   
			   }	
		 }
	   
	   return $data;
	
	}
	
  /*@ this methods get a category by its id
   *@ 
   **/

  public function get_category_nav2()
	{
		$data = array();
		$this->db->select('category_id, category_name');
		$this->db->where('category_status', 'active');
		$this->db->order_by('category_name', 'asc');
		
		$q = $this->db->get('category');
		
		if($q->num_rows()>0){
			
		   foreach($q->result_array() as $row){
			        $data[] = $row;
			   
			   }	
		 }
	   
	   return $data;
	
	}
	
  /*@ this methods get a category by its id
   *@ 
   **/
	public function get_category_by_id($id)
	{
		 $data = array();
		
		 $this->db->select('post_id, post_title, post_text, users.name');
		 $this->db->from('post');
		 $this->db->join('users', 'post.user_id=users.user_id');
		 $this->db->where('category_id', $id);
		 $this->db->where('status', 'active');
		 $this->db->order_by('post_id', 'desc');
		 
		 $q = $this->db->get();
		 
		 if($q->num_rows()>0){
			  
			   foreach($q->result_array() as $row){
				   
				     $data[] = $row;
				   
				   }
			 
			 }
	     return $data;
	
	}
	
	
	
  /*@ this method gets all the categories from the data base for 
   *@  adminiistrators purpose only
   **/


   public function get_category_admin()
   {
	  $data = array();
	  $q = $this->db->get('category');
	  
	  if($q->num_rows()>0){
		   
		   foreach($q->result_array() as $row){
			   
			      $data[] = $row;
			   }  
		  
		}   
   
      return $data;
   }
	
	
	
	
	
	
	
	
	
	
	
	
		
 }//end of class
