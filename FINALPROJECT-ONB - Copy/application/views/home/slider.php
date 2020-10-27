<div class="container">
  
    <!--  </form>
        <div class="col-md-8">
            <div class="carousel slide" data-ride="carousel" id="carousel-1">
                <div class="carousel-inner" role="listbox">
                    <div class="item active"><img src="<?php echo base_url();?>assets/img/CCL.png" alt="Slide Image"></div>
                    <div class="item"><img src="<?php echo base_url();?>assets/img/CCCL.png" alt="Slide Image"></div>
                    <div class="item"><img src="<?php echo base_url();?>assets/img/CCLL.png" alt="Slide Image"></div>
                   
                </div>
                <div><a class="left carousel-control" href="#carousel-1" role="button" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#carousel-1" role="button"
                    data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">Next</span></a></div>
                <ol class="carousel-indicators">
                    <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-1" data-slide-to="1"></li>
                    <li data-target="#carousel-1" data-slide-to="2"></li>
                </ol>
            </div>
        </div>

    -->
 <div>
          <!--  <div class="row">
                <div class="col-md-3"><img src="<?php echo base_url();?>assets/img/notice.jpg" class="logo img-responsive">
                    <a href="" class="btn btn-default ">WELLCOME TO AASTU ONB SYSTEM</a>
                </div>
                <div>
                    <div class="col-md-5 ">-->
          
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


                </div>

                <!-- <div class="thumbnail"><img />
            <div class="caption">
                <h3>Thumbnail label</h3>
                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
            </div>
        </div>
                
                <div class="col-md-3"><img src="<?php echo base_url();?>assets/img/notice2.jpg" class="logo img-responsive"></div>
            </div>
     <!--
      <div class="col-md-12">
                   <div class="panel panel-primary">
  <div class="panel-heading">

   <center>  <h1 style="font-size:36px;" ><b></b></h1> </center>
  </div>
   <form class=""  method="post" action="generate_pdf.php">
      
  <div class="panel-body">
  <h4> <b> Online Notice Board </b>will be a nice replacement of get rid from the inconvenience created because of daily placing a new notice on the notice board. Training and placment information, class information students and most facilites remain mostly unaware for students and this make aware to all</h4>

<div class="row">
          
          
<div class="col-md-12">
  <?php  $this->load->view('admin/nav_admin2');?> 
  
<div>
    <div class="col-md-9">
        <div class="thumbnail"><img />
            <div class="caption">
                <h3>Thumbnail label</h3>
                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
            </div>
        </div>
    </div>
    <div class="col-md-5">
        <div class="thumbnail"><img />
            <div class="caption">
                <h3>Thumbnail label</h3>
                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="thumbnail"><img />
            <div class="caption">
                <h3>Thumbnail label</h3>
                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
            </div>
        </div>
    </div>
    <div class="col-md-5">
        <div class="thumbnail"><img />
            <div class="caption">
                <h3>Thumbnail label</h3>
                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="thumbnail"><img />
            <div class="caption">
                <h3>Thumbnail label</h3>
                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
            </div>
        </div>
    </div>
</div>

  </div>
</div>
-->
     
          </div>
    </div> 

</div>
                </div>


 

            </div></div></div>
     

                
        </div>
        


</div>



    </div>
