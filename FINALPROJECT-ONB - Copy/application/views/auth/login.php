<div class="container ">
          
         <?php  if(!empty( validation_errors())){
			   
			     echo '<div class="alert alert-danger">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
                       Both fields are required! </div>'; 
			   }	
			 ?>
        <?php echo form_open('auth/login', 'class="form-signin"'); ?>

        <center><i class="glyphicon glyphicon-user" id="gallery_logo" style="color:brown;font-size:66px;"></i></center>
            <h3 class="form-signin-heading text-center">Sign into Noticeboard</h3>
            <hr>
             <?php
        if (!empty($this->session->flashdata('msg'))){
				 echo '<div class="alert alert-info">
        <button type="button" class="close" data-dismiss="alert">&times              </button>
                       '.$this->session->flashdata('msg').'
                        </div>';
				}
                ?>
                 <select class="form-control" name="role">
             <option>User</option>
             <option>Authorized_user</option>
           </select>
           <br/>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="text" id="inputEmail" class="form-control" placeholder="Reg No" required autofocus name="reg_no">
            <br>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required name="password">
            <br/>           
       <?php  echo form_submit('mysubmit', 'Sign in', 'class="btn btn-lg btn-primary btn-block"');?>          
          <?php echo form_close(); ?>
         <!-- <div class="form-signin"> 
              <?php echo anchor('auth/register', 'New to Notice board? <span class="text-blue">Sign up</span>', 'class="btn btn-lg btn-default btn-block"'); ?></li>       
          </div>-->
    </div> 