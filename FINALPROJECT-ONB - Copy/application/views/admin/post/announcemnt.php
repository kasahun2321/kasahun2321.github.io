         <div class="col-md-10">
           <div class="row">
             <div class="col-md-6">
                <h2 class="page-header"><i class="glyphicon glyphicon-dashboard"></i> Announcement</h2>  <h3>All Announcement</h3>
             </div>
             <div class="col-md-6">
                 <div class="btn-group actions" role="group" aria-label="...">
                          <a href="post/add_posts" class="btn btn-default"><i class="glyphicon glyphicon-plus"></i> Add New post</a>
            
                        <a href="post/inactive_post" class="btn btn-primary"> post waiting for approval <span class="badge"><?php if(count($count_post)) {echo $count_post;}else{echo 0;}  ?></span></a>      
             </div>
             
          
                        </div>
                  
            </div> 
              <table class="table table-striped">
                 <tr>
                   <th>Title</th>
                   <th>Category</th>
                   <th>Authur</th>
                   <th>Edit</th>
                   <th>Delete</th>
                 </tr>
                 <?php foreach($posts as $key => $value ): ?>
                  <tr>
                    <td><?php echo anchor('admin/post/edit_post/'. $value['post_id'], $value['post_title']); ?></td>  
                    <td><?php echo $value['category_name']; ?></td>  
                    <td><?php echo $value['name']; ?></td>
                    <td><?php echo anchor('admin/post/edit_post/'. $value['post_id'], '<i class="glyphicon glyphicon-edit"></i>'); ?></td>
                    <td id="btn_delete"><?php echo anchor('admin/post/delete/'. $value['post_id'], '<i class="glyphicon glyphicon-remove" id="btn_delete"></i> '); ?></td>
                  </tr>
                 <?php endforeach; ?> 
              </table>
              <a href="" class="btn btn-default">View all</a>
             
         </div>  

      <script type="text/javascript">
        
function btn_delete()
{
  alert('are u shure want to delete?')
}


      </script>