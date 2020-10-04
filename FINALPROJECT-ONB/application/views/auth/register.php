 
     <div class="col-md-12">
      
     
       <?php  $this->load->view('admin/nav_admin');?> 
   
      
       <?php echo form_open('auth/register', 'class="form-signin"'); ?>
            <h3 class="form-signin-heading text-center">Sign up into Noticeboard</h3>
            <hr>
            <?php  if(!empty( validation_errors())){
         
           echo '<div class="alert alert-danger">
                      <button type="button" class="close" data-dismiss="alert">&times;</button>
                       '.validation_errors().'
                        </div>'; 
         
         }  
        ?>
                  <?php
        if (!empty($this->session->flashdata('msg'))){
         echo '<div class="alert alert-info">
                      <button type="button" class="close" data-dismiss="alert">&times;</button>
                       '.$this->session->flashdata('msg').'
                        </div>';
        }
                ?>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="text" id="inputEmail" class="form-control" placeholder="Full Name" required autofocus name="name">
            <br>
            <label for="inputEmail" class="sr-only">Reg no</label>
            <input type="text" id="input_reg_num" class="form-control" placeholder="Reg Number" required autofocus name="reg_no">
            <div id="reg_num_check"></div>
            <br>
            <label for="inputPassword" class="sr-only">Password</label>

            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required name="password">
            
            <label for="inputPassword" class="sr-only">confirm Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="conf_Password" required name="password">
            <br>
            <select class="form-control" name="college">
             <option>---Select College---</option>
             <option>Electrical and mechanical Engineering</option>
             <option>Natural & Computational science </option>
             <option>Civil and Architecture Engineering</option>
             <option>biological  chemical Engineering</option>
             <option>Socail science $ natural science</option>
             <option>Applied science</option>
              
           </select>
            <br>
            <select class="form-control" name="Department">
             <option>---select department----</option>
             <option>Elecro mechanical</option>
             <option>Computer sceince</option>
             <option>Food science</option>
             <option>Softare engenering</option>
             <option>Minning </option>
             <option>Chemical engenering</option>
             <option>Civel engenering</option>
             <option></option>

           </select>
            <br>
             <select class="form-control" name="Section" >
             <option>---Section--- </option>
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option> 
           </select>
            <br>
             
             <select class="form-control" name="role" placeholder="Role">
           
             <option>---Role---</option>
             <option>User</option>
             <option>Authorized user</option>
              
           </select>
            <br>
             
            
          <?php echo form_submit('mysubmit', 'Signup', 'class="btn btn-lg btn-primary btn-block"') ;?>  
             
          <?php echo form_close(); ?>
         <!-- <div class="form-signin"> 
        
              <?php echo anchor('auth', 'Already a member? <span class="text-blue">Sign in</span>', 'class="btn btn-lg btn-default btn-block"'); ?></li>     
          </div>-->
        
    </div> <!-- /container -->
    
</div>


          
       
    
 <script src="<?php echo site_url('assets/js/jquery.js'); ?>"></script>
    <script src="<?php echo site_url('assets/js/bootstrap.js'); ?>"></script>
<script>


	
   $('#input_reg_num').keyup(function(){
	   
	     var regNo  = $.trim($(this).val()); 
		 
	if(regNo != ''){
		
		   $('#reg_num_check').html('Checking Reg No.....');
		}else{	 
		 $('#reg_num_check').html('');
		}
		 
	  if(regNo != ''){
		  
		    $.ajax({
			
		  url  : '<?php echo site_url('auth/reg_number_ajax'); ?>',
		  type : 'GET',	
	      data:  {regNo : regNo },
		  success: function(data){
			    
				 setTimeout($('#reg_num_check').html(data), 9000);
			  
			 },
		
		
		});	 
		  
		 }
	   
  });	
	
	


</script>