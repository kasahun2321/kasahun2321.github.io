        <div class="col-md-10">
           <!-- start of admin upload form -->
              
                     <?php
					 
		   echo validation_errors();			 
   
        ?>
        <?php echo form_open_multipart('admin/post/add_posts', 'class="form-signin"'); ?>
            <h3 class="form-signin-heading text-center">Post Announcement</h3>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="text" id="inputEmail" class="form-control" placeholder="Post Title" required autofocus name="title" value="<?php echo $posts['post_title']; ?>">
        
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
            <textarea id="inputPassword" class="form-control" placeholder="Post Announcement" required name="post_text"><?php echo $posts['post_text']; ?></textarea>
            <br>
            
            <div class="form-group">
                <input type="file" id="exampleInputFile" class="form-control upload">
                <p class="help-block">File upload is optional.</p>
            </div>
            <br>
            
            <?php echo form_submit('mysubmit', 'Post', 'class="btn btn-lg btn-primary btn-block"'); ?> 
             
          </form>
              
            <script>
            CKEDITOR.replace('post_text');
</script>   
              <!--  End of admin upload form -->
              
             
         </div> 


      