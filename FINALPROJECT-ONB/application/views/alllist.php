   
    <!-- Navbar starts here -->  
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar">
                    <span class="button-label">Menu</span>
                    <div class="button-bars">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </div>
                </button>
          
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-left navcat-color">
          
            <?php if(count($navlist)): ?>
            <?php foreach($navlist as $key => $value): ?>
            <li><?php echo anchor('home/category/' . $value['category_id'].'/'. url_title($value['category_name']), $value['category_name']); ?></li>
            <?php endforeach ;?>
            <?php endif; ?>
           
          </ul>
          <ul class="nav navbar-nav navbar-right header-buttons">
   <li><?php echo anchor('post', 'Post announcment', 'class="btn btn-primary text-white"'); ?></li>       
          </ul>    
        </div><!--/.nav-collapse -->
      </div>
    </nav><!-- Navbar ends here --><!-- Navbar ends here -->
