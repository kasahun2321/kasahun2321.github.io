<div class="container container-login">
          
        <?php echo form_open('auth/modifyregister', 'class="form-signin"'); ?>
            <h3 class="form-signin-heading text-center">Sign up into Noticeboard</h3>
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
            <br>
              <label for="inputPassword" class="sr-only">confirm Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="conf_Password" required name="password">
            <br>
            <label for="inputtext" class="sr-only">college</label>
            <input type="text" id="bf" class="form-control" placeholder="select your college" required name="college">
            <br>
             <label for="inputtext" class="sr-only">department</label>
            <input type="text" id="bf" class="form-control" placeholder="select your department" required name="department">
            <br>
             <label for="inputtext" class="sr-only">section</label>
            <input type="text" id="bf" class="form-control" placeholder="select your section" required name="section">
            <br>
             
            
          <?php echo form_submit('mysubmit', 'Signup', 'class="btn btn-lg btn-primary btn-block"') ;?>  
             
          <?php echo form_close(); ?>
          <div class="form-signin"> 
        
              <?php echo anchor('auth', 'Already a member? <span class="text-blue">Sign in</span>', 'class="btn btn-lg btn-default btn-block"'); ?></li>     
          </div>
        
    </div> <!-- /container -->
    
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