<!--
<div class="container">    
            
  <h2><b>CONTACT US</b></h2>
  <? =$this->session->flashdata('success'); ?>
  <div class="panel-body">
      <form method="POST" action="contact/postEmail">

	<div class="form-group">
            <label for="email"><h4>Enter Your Email</h4></label>
            <input type="email" name="email" id="email"class="form-control"/>
        </div>
    
         <div class="form-group">
            <label for="subject"><h4>subject</h4></label>
            <input type="text" name="subject" id="subject"class="form-control"/>
        </div>
         <div class="form-group">
            <label for="message"><h4>message </h4></label>
            <textarea class="form-control" name="message" id="message">   </textarea>
        </div>
    <div class="form-group">
        <button class="btn btn-primary" type="submit">Send</button>
        
    </div>
        
-->

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeIgniter Contact Form Example</title>
    <link href="<?php echo base_url("assets/bootstrap/css/bootstrap.css"); ?>" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="col-md-6 col-md-offset-3">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Contact Form</h3>
        </div>
        <div class="panel-body">
            <?php $attributes = array("name" => "contactform");
            echo form_open("contact/index", $attributes);?>
            <div class="form-group">
                <label for="name">Name</label>
                <input class="form-control" name="name" placeholder="Your Full Name" type="text" value="<?php echo set_value('name'); ?>" />
                <span class="text-danger"><?php echo form_error('name'); ?></span>
            </div>
            
            <div class="form-group">
                <label for="email">Email ID</label>
                <input class="form-control" name="email" placeholder="Email-ID" type="text" value="<?php echo set_value('email'); ?>" />
                <span class="text-danger"><?php echo form_error('email'); ?></span>
            </div>

            <div class="form-group">
                <label for="subject">Subject</label>
                <input class="form-control" name="subject" placeholder="Subject" type="text" value="<?php echo set_value('subject'); ?>" />
                <span class="text-danger"><?php echo form_error('subject'); ?></span>
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" name="message" rows="4" placeholder="Message"><?php echo set_value('message'); ?></textarea>
                <span class="text-danger"><?php echo form_error('message'); ?></span>
            </div>

            <div class="form-group">
                <button name="submit" type="submit" class="btn btn-success">Submit</button>
            </div>
            <?php echo form_close(); ?>
            <?php echo $this->session->flashdata('msg'); ?>
        </div>
    </div>
</div>
</body>
</html>



</form>
      
      </div>
</div>


