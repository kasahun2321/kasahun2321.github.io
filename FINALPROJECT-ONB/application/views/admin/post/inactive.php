         <div class="col-md-10">
             <h2 class="page-header"><i class="glyphicon glyphicon-dashboard"></i> Inactive Post </h2>  
              <table class="table table-striped">
                 <tr>
                   <th>Page Title</th>
                   <th>Category</th>
                   <th>Authur</th>
                   <th>Status</th>
                   <th>Delete</th>
                 </tr>
                 <?php foreach($inactive_post as $post): ?>
                  <tr id="in_post<?php echo $post['post_id']; ?>" class="animated">
                    <td><a href=""><?php echo $post['post_title']; ?></a></td>  
                    <td><?php echo $post['category_name']; ?></td>  
                    <td><?php echo $post['name']; ?></td>
                    <td><button onclick="activateNow('<?php echo $post['post_id']; ?>');" value="<?php echo $post['post_id']; ?>" id="change_state<?php echo $post['post_id']; ?>" class="btn btn-danger btn-sm"><span id="ativemode<?php echo $post['post_id']; ?>">Activate</span></button>
                    
                    <!--<button id="success" class="btn btn-success btn-sm">Activated</button>-->
                    
                    </td> 
                    <td><?php echo anchor('admin/post/delete/'. $post['post_id'], '<i class="glyphicon glyphicon-remove"></i>'); ?></td>
                  </tr>
                 <?php endforeach; ?> 
              </table>
              
              
             
         </div>  

      <script>
	  
	  
	  </script>