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
    <link href="<?php echo site_url('assets/css/tree.css'); ?>" rel="stylesheet">
     <link href="<?php echo site_url('assets/css/Google-Style-Login.css');?>" rel="stylesheet">
      
    <!-- Font awesome core CSS -->
    <link href="<?php echo site_url('assets/font-awesome/css/font-awesome.css'); ?>" rel="stylesheet">  
<script type="text/javascript" src="<?php echo site_url('assets/ckeditor/ckeditor.js'); ?>"></script>
 <script type="text/javascript" src="<?php echo site_url('assets/js/tree.js'); ?>"></script>
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
        <ul> 
          <li>
		 
           </li>
        </ul>
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
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-left navcat-color">
          <!--i will be back h haedr code from the level.php -->
              <nav class="navbar navbar-default ">
    <div class="container-fluid">
        <div class="navbar-header">
         
            <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
            <a class="navbar-brand" href="index.php"> AASTU ONB </a>
        </div>




        <div class="collapse navbar-collapse " id="navcol-1">
            <ul class="nav navbar-nav">
       
        <li>
        <a href="<?php echo base_url('about/index');?>"><span class="glyphicon glyphicon-home"></span> About</a></li>
        <li><a href="<?php echo base_url('home/contact');?>"><span class="glyphicon glyphicon-phone"></span>Contact</a></li>

      <li><a href="<?php echo base_url('admin/dashboard');?>"><span class="glyphicon glyphicon-user"></span> Admin page</a></li>
      


           
           
          </ul>
              <ul class="nav navbar-nav navbar-right header-buttons">
          <!--upto  here we will remove later--->
   <li>
    <?php
		      $ses_id = $this->session->userdata('user_id');
			  if(!empty($ses_id)){
				  
				    echo anchor('auth/logout', 'Logout', 'class="btn btn-default text-black"'); 
				  }else{
					  
					    echo anchor('auth', 'Login', 'class="btn btn-default text-black"'); 
					  }
		   ?>
   
   
   </li>       
          </ul>  
            
            
          <ul class="nav navbar-nav navbar-right header-buttons">
          <!--upto  here we will remove later--->
   <li><?php echo anchor('post', 'Post announcment', 'class="btn btn-defa text-white"'); ?></li>       
          </ul>    
        </div><!--/.nav-collapse -->
      </div>
    </nav><!-- Navbar ends here --><!-- Navbar ends here -->