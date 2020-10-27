 
    <div class="row">
  <div class="col-sm-1"></div>
  <div class="col-md-10 well">
    




 <div class="">
          
        <?php
    
          
          
   
           if(!empty($upload_error)){
             dump($upload_error); 
            echo '<div class="alert alert-error">
                      <button type="button" class="close" data-dismiss="alert">&times;</button>
                       '.$upload_error.'
                        </div>';
              
           }
           
       echo validation_errors();       
   
        ?>
        <?php echo form_open_multipart('post/add_post', ''); ?>
            <h3 class="form-signin-heading text-center">Post Announcement</h3>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="text" id="inputEmail" class="form-control" placeholder="Post Title" required autofocus name="title">
            <br>
            
           <select class="form-control" name="category">
             <option>Choose Category</option>
             <?php if(count($navlist)): ?>
             <?php foreach($navlist as $cat): ?>
              <option value="<?php echo $cat['category_id']; ?>"><?php echo $cat['category_name']; ?></option>
             <?php endforeach;?>
             <?php endif;?> 
           </select>
            <br>
            <label for="inputPassword" class="sr-only">textarea</label>
            <textarea id="inputPassword" class="form-control" placeholder="Post Announcement" required name="post_text" rows="6"></textarea>
            <br>
            <label for="dt">Notice expiry date: </label>
         <input name="dt" type="date" class="form-control" />



<div class="form-group">
    <label for="pic_file">choose file:</label>
    <input type="file" name="pic_file" class="form-control"  id="pic_file">
  </div>
 
            <?php echo form_submit('mysubmit', 'Post', 'class="btn btn-lg btn-primary btn-block"'); ?> 
             
          </form>
        
        <script >
          CKEDITOR.replace('post_text');

        </script>  
        
    </div> <!-- /container -->
  </div>
  <div class="col-sm-1"></div>
</div>