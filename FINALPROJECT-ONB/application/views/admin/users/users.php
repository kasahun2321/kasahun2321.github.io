         <div class="col-md-10">
           <div class="row">
               <div class="col-md-6">
                <h3 class="page-header"><i class="glyphicon glyphicon-dashboard"></i> Users</h3> 
                <h3 class="page-header"><i class="glyphicon glyphicon-plus"></i><a href="<?php echo site_url('auth/register'); ?>">Add user</a> </h3> 
                <hr>
             </div>  
             <div class="col-md-6">
                 <div class="btn-group actions" role="group" aria-label="...">
                         <!-- <a href="" class="btn btn-default"><i class="glyphicon glyphicon-plus"></i> New</a>
                          <a href="" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i> Edit</a>
                          <a href="" class="btn btn-default"><i class="glyphicon glyphicon-remove"></i> Delete</a>
                        </div>-->
             </div>
            </div> 
              <table class="table table-striped">
                 <tr>
                   <th>Name</th>
                   <th>Reg No</th>
                   <th>Edit</th>
                   <th>delete</th>
                 </tr>
                 <?php foreach($users as $user): ?>
                  <tr>
                    <td><?php echo $user['name']; ?></td>  
                    <td><?php echo $user['reg_no']; ?></td>  
                    <td><?php echo anchor('', '<i class="glyphicon glyphicon-edit"></i>'); ?></td>
                    <td><?php echo anchor('admin/post/delete/', '<i class="glyphicon glyphicon-remove"></i>'); ?></td>
                  </tr>
                 <?php endforeach; ?> 
              </table>
              <a href="" class="btn btn-default">View all</a>
             
         </div>  

      