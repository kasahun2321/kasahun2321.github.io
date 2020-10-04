  <div class="col-md-10">
           <div class="row">
            <hr>
         
             
            <h1> <i class="glyphicon glyphicon-th"  style="color:black;font-size:30px;"></i> list of user message  </h1>
            <hr>
            <hr>
        
                  
                       <table class="table table-striped">
                 <tr>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Subject</th>
                   <th>Message</th>
                   <th>Replay</th>
                   
                 </tr>
             
                  <?php foreach($contactus as $user): ?>
                  <tr>
                    <td><?php echo $user['name']; ?></td>  
                    <td><?php echo $user['email']; ?></td>  
                    <td><?php echo $user['subject']; ?></td>  
                    <td><?php echo $user['message']; ?></td>  
                    
                    <td><?php echo anchor('admin/replay/', '<i class="glyphicon glyphicon-plane"></i>'); ?></td>
                  </tr>
                 <?php endforeach; ?> 
              </table>
              </table>
              <a href="" class="btn btn-default">View all</a>
             
         </div>  