<!--
<div class="container">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        
        
        <center>  
        <div class="panel panel-success">
            
  <div class="panel-heading"><h2><b>CONTACT US</b></h2></div>
  <div class="panel-body">
<form method="post">

	<div class="row">
            <div class="col-sm-4"><h4>Enter Your Email</h4></div>
		<div class="col-sm-6">
		<input type="email" name="e" class="form-control"/></div>
        </div><br/>

	<div class="row">
            <div class="col-sm-4"><h4>Enter Your Mobile</h4></div>
		<div class="col-sm-6">
		<input type="password" name="p" class="form-control"/></div>
	</div><br/>

	<div class="row">
            <div class="col-sm-4"><h4>Enter Your Message</h4></div>
		<div class="col-sm-6">
		<textarea placeholder="type hera your comment" rows="6" cols="45" name="textarea" class="input-lg"></textarea>
	</div><br/>
	<div class="row" >
		<div class="col-sm-5"></div>
		<div class="col-sm-5">
		<input type="submit" value="Send" name="save" class="btn btn-primary center-block"/>

		</div>
	</div>

		</div>
		
	</div>


</form>
      
      </div>
</div>

        </center>  
        
    </div>
    <div class="col-md-2"></div>
</div>

-->
<!DOCTYPE html>
<html>
<head>
    <title>Displaying all posts</title>
</head>
<body>
    
<h1>Contact Form Using CondeIgniter</h1>
<h2>Enter email and message to send mail</h2>
<table>
<form action="<?php echo site_url('post/mail'); ?>" method="post">
<tr><td>Email:</td><td><input type="text" name="email"></td></tr>
<tr><td>Message:</td><td><textarea name="message"></textarea></td></tr>

<tr><td></td><td><input type="submit" name="submit" value="Send Message"></td></tr>
</form>
</table>
</body>
</html>