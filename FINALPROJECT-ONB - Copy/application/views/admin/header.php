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

     <link href="<?php echo site_url('assets/css/animate.css'); ?>" rel="stylesheet">


    <!-- Custom styles for this template -->
    <link href="<?php echo site_url('assets/css/app.css'); ?>" rel="stylesheet">
    
   
    
    
    <style>
	  
	  .nav > li {
		
		
		
		 }
	  
	  .list-group-item.active, .list-group-item
.active:hover, .list-group-item.active:focus {
    z-index: 2;
    color: #fff;
    background-color: #000!important;
    border-color: #000!important;

}

footer {
    
    background: #f4f4f4;
    height: 90px;
    color: #000;
    font-weight: bold;
    text-align: center;
    padding-top: 40px;
    margin-top: 30px;
    border-top:7px solid #000; 
}

	  
	</style>
    
  </head>

  <body>
 <!--  navbar starts -->  
 <div class="panel panel-primary">
  <div class="panel-heading">
    

 <nav class="navbar navbar-default">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">ADMIN PANEL</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
      </ul>
      <form class="navbar-form navbar-right" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
      </form>
      <p class="navbar-text navbar-right">Signed in as <a href="#" class="navbar-link"><?php echo ucfirst($this->session->userdata('name')); ?></a></p>
      <ul class="nav navbar-nav navbar-right">
          <li><?php echo anchor('auth/logout', 'Logout'); ?></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
<!-- navbar ends -->   
  </div>