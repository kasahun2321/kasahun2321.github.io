
<style>
 
 .panel-body {
  background: #f5f5f5!important;
 }
 
 .panel {
  background: #f5f5f5!important;
 }
</style>
              <!-- col-md-8 begings here -->
              <div class="col-md-8">
              <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title text-center"><?php
			  if($count != 0){
			 echo '(' .$count. ') Search result for <b><em>' .$search_term. '</em></b>';
			  }else{
				     echo ' No result for <b><em>' .$search_term. '</em></b>';
				  }
			  ?></h3>
              </div>
                <?php if(count($search_result)):?>
                <?php foreach($search_result as $key => $value): ?>  
                <div class="panel-body">
                    <h4><a href="post/<?php echo $value['post_id'] .'/'. url_title($value['post_title']); ?>"><?php echo $value['post_title']; ?></a></h4>
                    <p class="post-info"><i class="glyphicon glyphicon-time"></i> Posted by <?php echo $value['name']; ?>on 2-3-2018</p>
                   
                    <p><?php echo $value['post_text']; ?></p>
                    <a href="post/<?php echo $value['post_id'] .'/'. url_title($value['post_title'])   ;?>" class="btn btn-primary">Read more <span class="glyphicon glyphicon-chevron-right"></span></a>
                   
                </div>
                <hr /> 
                <?php endforeach;?>
                <?php endif; ?>
                </div> 
                  
              </div><!-- col-md-8 ends here-->
      