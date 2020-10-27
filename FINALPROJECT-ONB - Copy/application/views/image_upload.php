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
      
    <!-- Font awesome core CSS -->
    <link href="<?php echo site_url('assets/font-awesome/css/font-awesome.css'); ?>" rel="stylesheet">  

    <!-- Custom styles for this template -->
    <link href="<?php echo site_url('assets/css/app.css'); ?>" rel="stylesheet">
   
   
    <style>


	</style>
  </head>

  <body>
      

      <div class="container">
        <br><br><br>
        <h3><?php echo $title; ?></h3>
        <form method="post" id="upload_form" align="center" enctype="multipart/form">
          <input type="file" name="image_file" id="image_file">
          <input type="submit" name="upload" id="upload" class="btn btn_primery">

        </form>
        

      </div>
  </body>
  </html>
  <script type="text/javascript">
    $(document).ready(function()

    {
      $('#upload_form').on('submit',function(e)
      {
        e.preventDefault();
        if ($('#image_file').val()=='')
         {

          alert('please select the file');
         }

         else
         {
          $.ajax({
            url:"<?php echo base_url();?>main/ajax_upload",
            method:"POST",
            data:new FormData(this),
            contentType:false,
            cache:false,
            processData:false,
            success:function(data)
            {
              #('#image_upload').html($data);
            }

          })
         }
      });
    });

    

</script>
  </script>