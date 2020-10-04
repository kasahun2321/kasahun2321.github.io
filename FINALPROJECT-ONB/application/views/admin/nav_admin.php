<div class="col-md-2">
            <div class="list-group">
              
            <?php echo anchor('admin/dashboard', '<i class="glyphicon glyphicon-dashboard"></i>   Dashboard', 'class="list-group-item active"' ); ?> 
            
            <span class="pull-right-container">
              <small class="label pull-right bg-red">3</small>
              <small class="label pull-right bg-blue">17</small>
            </span>
          </a>  
             <?php echo anchor('admin/post', '<i class="glyphicon glyphicon-folder-open"></i>  Announcements', 'class="list-group-item"' ); ?>  
             
        <?php echo anchor('admin/category', '<i class="glyphicon glyphicon-folder-open"></i>  Categories', 'class="list-group-item"' ); ?> 
        <?php echo anchor('admin/users', '<i class="glyphicon glyphicon-user"></i>  User Accounts', 'class="list-group-item"' ); ?> 

        <?php echo anchor('admin/contactus', '<i class="glyphicon glyphicon-folder-open"></i>  Contactus', 'class="list-group-item"' ); ?>  
          
          <panel>
            

<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title"></h3></div>
    <div class="panel-body"><p> generate report </p>
        <div class="dropdown"><a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" role="button" href="localhost/report_student">Report <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
                <li role="presentation" class="btn btn-default  btn-block"><a href="<?php echo site_url('report_student/generate_pdf.php'); ?>"> user list report </a></li></br>
                <li role="presentation" class="btn btn-default"><a href="<?php echo site_url('report_student/noticereport.php'); ?>">posted notice report</a></li>
              
            </ul>
        </div>
    </div>
</div>







          </panel>

      </form>    
              
            </div>
         </div>