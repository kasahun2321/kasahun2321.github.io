         <div class="col-md-10">
           <div class="row">
             <div class="col-md-6">
                <h2 class="page-header"><i class="glyphicon glyphicon-dashboard"></i> Categories</h2>  <h3>All Categories</h3>
             </div>
             <div class="col-md-6">
                <!-- <div class="btn-group actions" role="group" aria-label="...">
                          <a href="" class="btn btn-default"><i class="glyphicon glyphicon-plus"></i> New</a>
                          <a href="" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i> Edit</a>
                          <a href="" class="btn btn-default"><i class="glyphicon glyphicon-remove"></i> Delete</a>
                        </div>-->
             </div>
            </div> 
              <table class="table table-striped">
                 <tr>
                   <th>Category</th>
                   <th>Status</th>
                 </tr>
                 <?php foreach($categories as $cat): ?>
                  <tr>
                    <td><?php echo $cat['category_name']; ?></td>  
                    <td><?php echo $cat['category_status']; ?></td>  
                  </tr>
                 <?php endforeach; ?> 
              </table>
              <a href="" class="btn btn-default">View all</a>
             
         </div>  

      