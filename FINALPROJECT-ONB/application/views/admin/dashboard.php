<div class=" panel panel-body ">
    
 



<div class="container">        
         
         <div class="col-md-10">
                <div class="row">
                   
                   <div class="col-md-4">
                     
                       <div class="panel panel-primary text-center no-boder">
                       
                        <div class="panel-body blue">
                            <i class="fa fa-pencil-square-o fa-5x"></i>
                            <h3>
                                <?php if(count($count_inactive_post)) 
                                {echo $count_inactive_post;}
                                else{echo 0;}  ?>
                        </div>
                        <div class="panel-footer">
                            <h4 class="panel-eyecandy-title">notice waiting for approvals
                            </h4>
                        </div>
                      </div>
                     
                   </div>
                   <div class="col-md-4">
                        
                          <div class="panel panel-primary text-center no-boder">
                        <div class="panel-body yellow">
                            <i class="fa fa-newspaper-o fa-5x"></i>
                                             <h3><?php if(count($all_post_count))
                                                 {echo $all_post_count;}
                                                 else{echo 0;}?>
                                             </h3>
                        </div>
                        <div class="panel-footer">
                            <h4 class="panel-eyecandy-title">Total notice Post
                            </h4>
                        </div>
                      </div>
                   </div>
                   <div class="col-md-4">
                            <div class="panel panel-primary text-center no-boder">
                        <div class="panel-body red">
                            <i class="fa fa-user fa-5x"></i>
                                   <h3><?php if(count($users)){echo $users;}else{echo 0;}?></h3>
                        </div>
                        <div class="panel-footer">
                            <h4 class="panel-eyecandy-title">Registered Users
                            </h4>
                        </div>
                    </div>
                        
                   </div>
                </div>  
               <div class="box-body">
              <div class="row">
                <div class="col-md-8">
                  <p class="text-center">
                    <strong>projet submitted on the begging of june</strong>
                  </p>

                
                  <!-- /.chart-responsive -->
                </div>
                <!-- /.col -->
                <div class="col-md-4">
                  <p class="text-center">
                    <strong>Statical data of website user  </strong>
                  </p>

                  
                   
                   
                  
 
<div class="progress progress-striped">
  <div class="progress-bar progress-bar-success" style="width: 40%"></div>
</div>
<div class="progress progress-striped">
  <div class="progress-bar progress-bar-warning" style="width: 60%"></div>
</div>

<div class="progress progress-striped">
  <div class="progress-bar progress-bar-danger" style="width: 80%"></div>
</div>
        
        </div>          <!-- /.progress-group -->
                </div>
                <!-- /.col -->
              </div>
              <!-- /.row -->
            </div>
            <!-- ./box-body -->
         </div>  
         

      </div>
</div>