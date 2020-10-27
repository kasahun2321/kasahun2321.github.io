
              <!-- col-md-8 begings here -->
              <div class="col-md-8">
                 <?php if(count($posts)): ?>
                  <?php foreach($posts as $post): ?> 
                <div class="well post">
                    <h4><a href="#"><?php echo $post['post_title']; ?></a></h4>
                    <p class="post-info"><i class="glyphicon glyphicon-time"></i> posted by <?php echo $post['name']. ' on '.$post['created'] ; ?></p>
                    <hr>
                    <p><?php echo $post['post_text']; ?></p>
                </div>
                <?php endforeach; ?>
                  <?php endif; ?> 
               
              </div>
       