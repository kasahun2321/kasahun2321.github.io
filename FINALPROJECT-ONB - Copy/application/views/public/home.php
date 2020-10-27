<!-- col-md-8 begings here -->

<?php
$name = $this->session->userdata('name');
if (!empty($this->session->flashdata('msg'))){
				 echo '<div class="alert alert-info">
                      <button type="button" class="close" data-dismiss="alert">&times;</button>
                       '.$this->session->flashdata('msg').'
                        </div>';
				}
                ?>

              <div class="col-md-8">
                <div class="slider hidden-xs">
                    <div id="mycarousel" class="carousel slide" data-ride="carousel">
                      <!-- Indicators -->
                      <ol class="carousel-indicators">
                        <li data-target="#mycarousel" data-slide-to="0"></li>
                        <li data-target="#mycarousel" data-slide-to="1"></li>
                        <li data-target="#mycarousel" data-slide-to="2"></li>
                      </ol>

                      <!-- Wrapper for slides -->
                      <div class="carousel-inner" role="listbox">
                      <?php if(count($slide_post)): ?>
                      <?php foreach($slide_post as $post): ?>
                        <div class="item">
                          <img src="<?php echo base_url();?>assets/img/CCL.png" alt=" a desert area">
                          

                         <div class="container">    
                           <div class="carousel-caption">
                             <div class="row"> 
                                <div class="col-md-12 not-text"> 
                                    <h3><i><?php echo ucfirst($post['post_title']); ?></i></h3>
                                     <p><?php echo ucfirst($post['post_text']); ?></p>
                                    <!--<p><a href="home/post<?php // echo '/'. $post['post_id'] .'/' . url_title($post['post_title']); ?>" class="btn btn-primary btn-sm">Read more</a></p>-->
                                 </div>
                             </div>     
                           </div> 
                         </div>     
                        </div> 
                        
                      <?php endforeach; ?>
                      <?php endif; ?>
                      </div>
                      

                      <!-- Controls -->
                      <a class="left carousel-control" href="#mycarousel" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="right carousel-control" href="#mycarousel" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                </div> 
                 <!-- users posts starts here --> 
                <?php if(count($posts)):?>
                <?php foreach($posts as $post => $key): ?> 
                <div class="well post">
                    <h4><a href="home/post/<?php echo $key['post_id'] .'/'. url_title($key['post_title']); ?>"><?php echo ucfirst($key['post_title']); ?></a></h4>
                    <p class="post-info"><i class="glyphicon glyphicon-time"></i> posted by <?php echo $key['name']. ' on ' . $key['created']; ?> </p>
                    <hr>
                    <p><?php echo ucfirst($key['post_text']); ?></p>
                    <a href="home/post/<?php echo $key['post_id'] .'/'. url_title($key['post_title'])   ;?>" class="btn btn-primary btn-sm">Read more <span class="glyphicon glyphicon-chevron-right"></span></a>

                    <!--<a href="" class="btn btn-primary btn-sm" onClick="window.print()">download <span class="glyphicon glyphicon-chevron-down"></span></a>
                    <SCRIPT LANGUAGE="JavaScript"> 
if (window.print) {
document.write('<form><input type=button name=print value="Print" onClick="window.print()"></form>');
}
</script>-->
                </div>
                <?php endforeach;?>
                <?php endif; ?>
                
                 <!-- users post ends here -->
                   
              </div><!-- col-md-8 ends here-->