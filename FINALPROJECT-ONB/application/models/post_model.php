<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Post_model extends CI_Model {
	 
	 	
		//this is the post_rules
       public $rules_post  = array(
		         'title' => array(
					 'field' => 'title',
					 'label' => 'Title',
					 'rules' => 'trim|required'
					 ),
		          
				 'post_text' => array(
					 'field' => 'post_text',
					 'label' => 'Post',
					 'rules' => 'trim|required'
					 ),
			       );		 
	 
	 /**
	  * this method fetches all post
	  *
	  */ 
	 public function get_post_with_users()
	 {   $data = array();
		 
		 $this->db->select('post.*, users.name');
		 $this->db->from('post');
		 $this->db->join('users', 'post.user_id=users.user_id');
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
	 
	 
	 
	 /**
	  * this method fetches a post with is id
	  *
	  */ 
	 public function get_post_by_id($id)
	 {
		$data = array();  
	    $this->db->select('post.*, users.name');
		$this->db->from('post');
		$this->db->join('users', 'post.user_id=users.user_id');
		$this->db->where('post_id', $id);
		
		$q = $this->db->get();
		
		if($q->num_rows()>0){
			
		   foreach($q->result_array() as $row){
			      
				  $data[] = $row;
			      
			   }
		   	
	     	}
	 
	   return $data;
	 }
	 
	 
  /*@ this method gets the featured post for the carosel slider
   *@
   **/
	 public function get_featured_post()
	 {     $data = array();
	       $this->db->select('post_id, post_title, post_text');
		   $this->db->where('status', 'active');
		   $this->db->order_by('created', 'desc');
		   $this->db->limit(3);
		   
		   $q = $this->db->get('post');
		   
		   if($q->num_rows()>0){
			     
			     foreach($q->result_array() as $row){
					    
						$data[] = $row;
					 
					 }
				 
			  }
	    return $data;
	 
	 }
	 
  /*@ this method gets the recently added post in the sidebar
   *@
   **/
	 public function resently_added_post()
	 {
	      $data = array();
	      $this->db->select('post_id, post_title, created');
		  $this->db->where('status', 'active');
		  $this->db->order_by('created', 'desc');
		  $this->db->limit(5);
	      
		  $q = $this->db->get('post');
		  
		  if($q->num_rows()>0){
			   
			   foreach($q->result_array() as $row){
				   
				      $data[] = $row;
				   
				  } 
			  
			 }
	        return $data;
	   }
	 
	/*@ this method post the users announccement into the database
	 *@
	 **/
	  public function post(){
		      
			 //getting the logged in users id
			 $id = $this->session->userdata('user_id'); 
			  
		    //converting the inputs into a variable



			 
				$post_title	   =	$this->input->post('title');
				$post_text     =	$this->input->post('post_text');
				$post_category =    $this->input->post('category');
				
				$exp_dat         =  $this->input->post('dt');


				$config['upload_path']          = APPPATH. '/uploads/';
			$config['allowed_types']        = 'gif|jpg|png';
			$config['max_size']             = 100;

			$this->load->library('upload', $config);

			

				//file is uploaded successfully
				//now get the file uploaded data 
				$upload_data = $this->upload->data();

				//get the uploaded file name
				 $post_attachmnt = $upload_data['pic_file'];
				 
				////////////////////////////

			
			 $data = array(
			 
			 'post_title'        =>      $post_title,
			 'post_text'         =>      $post_text,
			 'post_attachment'   =>      'no attachment',
			 'user_id'           =>       $id,
			 'category_id'       =>       $post_category,
			 'status'            =>      'inactive',
			 'expired_date'		=>		$exp_dat,


			 
			  
		     ); 
				   
		    $insert = $this->db->insert('post', $data);
			return $insert;
	   
	   }//end of post method
	   
	   
	/*@ this method post the admin announccement into the database
	 *@
	 **/
	  public function admin_post(){
		      
			 //getting the logged in users id
			 $id = $this->session->userdata('user_id'); 
			  
		    //converting the inputs into a variable
				$post_title	   =	$this->input->post('title');
				$post_text     =	$this->input->post('post_text');
				$post_category =    $this->input->post('category');
			
			 $data = array(
			 
			 'post_title'        =>      $post_title,
			 'post_text'         =>      $post_text,
			 'post_attachment'   =>      'no-attachment',
			 'user_id'           =>       $id,
			 'category_id'       =>       $post_category,
			 'status'            =>      'active',
			 
			  
		     ); 
				   
		    $insert = $this->db->insert('post', $data);
			return $insert;
	   
	   }//end of end of admin_post method
	 
	 
	 
	 
	 
	/*@ this method retrives the users search result from the database
	 *@
	 **/
	 public function search($term)
	 {
	     $data = array();
	     
		 $this->db->select('post.*, users.name');
		 $this->db->from('post');
		 $this->db->join('users', 'post.user_id=users.user_id');
		 $this->db->like('post_title', $term);
		 $this->db->or_like('post_text', $term);
		 $this->db->where('status', 'active');
		 $this->db->order_by('post_title', 'asc');
		 $this->db->limit(50);
		 
		 $q = $this->db->get();
		 
		 if($q->num_rows()>0){
			 
			 foreach($q->result_array() as $row){
				 
				    $data[] = $row; 
				 
				 } 
			 
		  }
	
	    return $data;
	 
	 }
	 
	 
	/*@ this method get the users search query count per query 
	 *@
	 **/
	 public function search_count($term)
	 {
	     $data = array();
	     
		 $this->db->select('post.*, users.name');
		 $this->db->from('post');
		 $this->db->join('users', 'post.user_id=users.user_id');
		 $this->db->like('post_title', $term);
		 $this->db->or_like('post_text', $term);
		 $this->db->where('status', 'active');
		 $this->db->order_by('post_title', 'asc');
		 $this->db->limit(50);
		 
		 $q = $this->db->get();
		 
		if($q->num_rows()>0){
				
				  return $q->num_rows();
				  
				}else{
					
					  return false;
					}
	
	    
	  }
	
	 

	 /**
	  * this method fetches all the inactive post for the admin to validate
	  *
	  */
	 public function inactive_post()
	 {
	    $data = array();
		
		$this->db->select('post.*, users.name, category.category_name ');
		$this->db->from('post');
		$this->db->join('users', 'post.user_id=users.user_id');
		$this->db->join('category', 'post.category_id=category.category_id');
		$this->db->where('status', 'inactive');
		$this->db->order_by('created', 'desc');
		$this->db->limit(5);
		
		$q = $this->db->get();
		
		if($q->num_rows()>0){
			
		     foreach($q->result_array() as $row){
			       
				 $data[] = $row;  
				 
			}	
			
		}
	     
	    return $data;
	 }
	 
	 
    /**
	  * this method fecthes all post for the administrator
	  *
	  */
	  public function get_all_post_admin()
	 {
	    $data = array();
		
		$this->db->select('post.*, users.name, category.category_name ');
		$this->db->from('post');
		$this->db->join('users', 'post.user_id=users.user_id');
		$this->db->join('category', 'post.category_id=category.category_id');
		$this->db->where('status', 'active');
		$this->db->order_by('created', 'desc');
		
		
		$q = $this->db->get();
		
		if($q->num_rows()>0){
			
		     foreach($q->result_array() as $row){
			       
				 $data[] = $row;  
				 
			}	
			
		}
	     
	    return $data;
	 }
	 
	 
	 /**
	  *  this methods gets the count of all the inactive post for the admin notification  
	  *
	  */
	  public function count_inactive_post()
	 {
	    $data = array();
		$this->db->select('post.*, users.name, category.category_name ');
		$this->db->from('post');
		$this->db->join('users', 'post.user_id=users.user_id');
		$this->db->join('category', 'post.category_id=category.category_id');
		$this->db->where('status', 'inactive');
		$this->db->order_by('created', 'desc');
		$this->db->limit(5);
		
		$q = $this->db->get();
		
		if($q->num_rows()>0){
			
		     $data = $q->num_rows();
		}
	     
	    return $data;
	 }
	 
	 
	 /**
	  *  this method get a particular post by its id
	  *
	  */
	 public function get_post_by_id_edit($post_id)
	 {
		 $data = array();
		 $this->db->where('post_id', $post_id);
		 $this->db->limit(1);
		 
		   $q = $this->db->get('post');
		 
		 if($q->num_rows()>0){
			 
			 $data = $q->row_array();;
		  }
		  return $data;
	 }
	 
	 
	 /**
	  * this method update a particular post , by the admin
	  *
	  */
	public function admin_update()
	{
	     
			
		  //converting the inputs into a variable
			  $post_title	   =	$this->input->post('title');
			  $post_text       =	$this->input->post('post_text');
			  $post_category   =    $this->input->post('category');
		  
		   $data = array(
		   
		   'post_title'        =>      $post_title,
		   'post_text'         =>      $post_text,
		   'post_attachment'   =>      'no-attachment',
		   'category_id'       =>       $post_category,
		   'status'            =>      'active',
		   
			
		   ); 
				 
		  $insert = $this->db->update('post', $data);
		  return $insert;
	  }
	
	
	
	/**
	 * this method activates a pending post
	 *
	 */
	public function activate_post($post_id)
	{    
	
	     $data = array( 'status' => 'active' ); 
	        
		 $this->db->where('post_id', $post_id);
		 $insert = $this->db->update('post', $data);
		 return $insert;
    
	}
	
	
	/**
	 * this method gets the count of all available active post
	 *
	 */
	public function get_all_post()
	{
	  $this->db->where('status', 'active');
	  
	   $q  = $this->db->get('post');
	    if($q->num_rows()>0){
		   $data = $q->num_rows();	
		}
		
		return $data;
	}
	
	
	
	/**
	  * this method delete a particular post
	  *
	  */
	public function delete($id)
	{
	   $this->db->where('post_id', $id);
	   $this->db->limit(1);
	   $delete = $this->db->delete('post'); 	
       return $delete;
	}
	public function contactus()
	{
	 
	     $data = array();
		
		$this->db->select('* ');
		$this->db->from('contacts');
		
		
		
		$q = $this->db->get();
		
		if($q->num_rows()>0){
			
		     foreach($q->result_array() as $row){
			       
				 $data[] = $row;  
				 
			}	
			
		}
	     
	    return $data;
	 }

	
	
	
		
 }//end of class
