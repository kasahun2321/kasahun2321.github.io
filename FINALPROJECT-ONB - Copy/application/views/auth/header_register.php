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
      
    <!-- Font awesome core CSS -->
    <link href="<?php echo site_url('assets/font-awesome/css/font-awesome.css'); ?>" rel="stylesheet">  

    <!-- Custom styles for this template -->
    <link href="<?php echo site_url('assets/css/app.css'); ?>" rel="stylesheet">
  </head>
  
   <body>
    


<!-- header -->  
    <!-- header -->  
    <header>
       <div class="container">
           <a href="<?php echo base_url();?>">
            <img src="<?php echo base_url();?>assets/img/log.gif" class="logo img-responsive">
          </a>
           <ul> 
         <li>
        <?php echo anchor('index.php', 'back to home', 'class="btn btn-primary text-white"'); ?>
        <?php echo anchor('auth', 'Login', 'class="btn btn-primary text-white"'); ?></li>

        </ul>
       </div>
    </header> <!-- header ends here --> 