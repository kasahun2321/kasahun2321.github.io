
              <!-- col-md-8 begings here -->
              <div class="col-md-8">
                
                <?php if(count($category)): ?>
                <?php foreach($category as $key => $value): ?>  
                <div class="well post">
                    <h4><a href="home/post/<?php echo $value['post_id'] .'/'. url_title($value['post_title']); ?>"><?php echo $value['post_title']; ?></a></h4>
                    <p class="post-info"><i class="glyphicon glyphicon-time"></i> Posted by admin on 2-3-2018</p>
                    <hr>
                    <p><?php echo $value['post_text']; ?></p>
                    <a href="" class="btn btn-primary">Read more <span class="glyphicon glyphicon-chevron-right"></span></a>
                </div>
                
                <?php endforeach; ?>
                <?php endif; ?> 
                  
              </div><!-- col-md-8 ends here-->
              