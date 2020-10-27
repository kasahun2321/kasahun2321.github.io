
      
      <?php echo form_open('auth/login_admin', 'class="form-signin"');?>
      <div><center><i class="glyphicon glyphicon-user" id="gallery_logo" style="color:brown;font-size:86px;"></i></center></div>
        <h2 class="form-signin-heading text-center">Admin Panel</h2>
        <hr>
        <label for="inputEmail" class="sr-only">Name</label>
        <input type="text" id="inputEmail" class="form-control" placeholder="Name" required autofocus name="name"><br>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required name="password">
        <?php echo form_submit('mysubmit', 'Signin', 'class="btn btn-lg btn-primary btn-block"'); ?>
      <?php echo form_close(); ?>

</div> <!-- /container -->
