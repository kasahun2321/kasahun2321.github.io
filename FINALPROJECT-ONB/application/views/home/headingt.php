<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title><?php  echo $title   ;?></title>

    <!-- Bootstrap core CSS -->
    <link href="<?php echo site_url('assets/css/bootstrap.css'); ?>" rel="stylesheet">
    <link href="<?php echo site_url('assets/css/bootstrap.min.css'); ?>" rel="stylesheet">
     <link href="<?php echo site_url('assets/css/Google-Style-Login.css');?>" rel="stylesheet">
      <script type="text/javascript" src="<?php echo site_url('assets/ckeditor/ckeditor.js'); ?>"></script>
    <!-- Font awesome core CSS -->
    <link href="<?php echo site_url('assets/font-awesome/css/font-awesome.css'); ?>" rel="stylesheet">  

    <!-- Custom styles for this template -->
    <link href="<?php echo site_url('assets/css/app.css'); ?>" rel="stylesheet">
   
   
    <style>
 #kfooter
    {
      background-color: black;
    }

	</style>
  </head>

  <body>
      
    <!-- header -->  
    <header>
       <div class="container">
           <a href="<?php echo base_url();?>"><img src="<?php echo base_url();?>assets/img/log.gif" class="logo img-responsive">
           </a>    
        
       </div>
    </header> <!-- header ends here -->   
    <!-- Navbar starts here -->  
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar">
                    <span class="button-label">Menu</span>
                    <div class="button-bars">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </div>
                </button>
          
        </div>
       
    
    <nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.php"> <B><!--AASTU ONB --> </B></a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
   
        <li><a href="<?php echo base_url('home/slider');?>"><span class="glyphicon glyphicon-home"></span><b> HOME</b></a></li>
        <li><a href="<?php echo base_url('Auth/login_admin');?>"><span class="glyphicon glyphicon-user"></span><b> ADMIN PANNEL</b></a></li>
        <li><a href="<?php echo base_url('contactform');?>"><span class="glyphicon glyphicon-phone"></span><b>CONTACTUS</b></a></li>
        <li> <a href="<?php echo base_url('about/index');?>"><span class="glyphicon glyphicon-home"></span> <b>ABOUT</b></a></li>
        

     
      <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><b>NEW POST</b><span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
               <li><?php echo anchor('home', 'PUBLIC POST', 'class="btn btn-default text-black"'); ?></li> 
            
            <li class="divider"></li>
            <li> <?php
		      $ses_id = $this->session->userdata('user_id');
			  if(!empty($ses_id)){
				  
				    echo anchor('auth/logout', 'Logout', 'class="btn btn-default text-black"'); 
				  }else{
					  
					    echo anchor('auth', 'USER BASED ', 'class="btn btn-default text-black"'); 
					  }
		   ?>
   </li>
            <li class="divider"></li>
            <li><a href="#"><B>EVENT</B></a></li>
            <li class="divider"></li>
           
          </ul>
        </li>
      </ul>
      <ul><li><b>  hello today is :  <?php echo date("m/d/y");?></b></li></ul>
      <ul class="nav navbar-nav">
        <li> <?php echo form_open('home/search'); ?>
                    <div class="input-group">
                    
                      <input type="text" class="form-control" name="term" placeholder="Search">
                      <span class="input-group-btn">
                          
                         <button class="btn btn-primary" type="submit" name="mysubmit">
                           <span class="glyphicon glyphicon-search"></span>
                         </button>
                      </span>    
                    </div>
                   <?php echo form_close(); ?> 
                 </li>
    </ul>
      <ul class="nav navbar-nav navbar-right">
        <!--<li> <?php
		      $ses_id = $this->session->userdata('user_id');
			  if(!empty($ses_id)){
				  
				    echo anchor('auth/logout', 'Logout', 'class="btn btn-default text-black"'); 
				  }else{
					  
					    echo anchor('auth', 'User Login', 'class="btn btn-default text-black"'); 
					  }
		   ?>
   </li>-->
      </ul>
    </div>
  </div>
</nav>
    
  