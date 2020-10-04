    
<style>
.accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
}

.active, .accordion:hover {
    background-color: #ccc;
}

.accordion:after {
    content: '\002B';
    color: #777;
    font-weight: bold;
    float: right;
    margin-left: 5px;
}

.active:after {
    content: "\2212";
}

.panel {
    padding: 0 18px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
}
</style>


    <!-- Sidebar -->
    <div class="col-md-4">
                <div class="well">
                   <h4>Search Board</h4>
                   <?php echo form_open('home/search'); ?>
                    <div class="input-group">
                    
                      <input type="text" class="form-control" name="term" placeholder="Search">
                      <span class="input-group-btn">
                          
                         <button class="btn btn-primary" type="submit" name="mysubmit">
                           <span class="glyphicon glyphicon-search"></span>
                         </button>
                      </span>    
                    </div>
                   <?php echo form_close(); ?> 
                </div>

                <div class="well">
                      <!-- Navbar starts here -->  
    <nav class="navbar navbar-default">
      <div class="">
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
          
           <!-- <?php if(count($navlist)): ?>
            <?php foreach($navlist as $key => $value): ?>
            <tr><?php echo anchor('home/category/' . $value['category_id'].'/'. url_title($value['category_name']), $value['category_name'] ,'class="btn btn-default btn-lg btn-block"'); ?></tr><br>
            
            <?php endforeach ;?>
            <?php endif; ?>-->
           
          </ul>
                
          </ul>  
          <hr>
          <h3>Right place of your notice</h3>
          <hr>

<button class="accordion"> <a href="<?php echo site_url('home/category/13/College-of-Electrical-and-Mechanical'); ?>">College of Electrical and Mechanical Engineering</a></button>
<div class="panel">
  <ul><div>
    <button class="accordion"><a href="<?php echo site_url('home/category/41/Department-of-Computer-Science'); ?>">Department of Computer science</a></button>
    <div class="panel">
      <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/2/CSIT-1st-year'); ?>">first year</a></button>

      <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/18/CSIT-2nd-year'); ?>">Second year</a></button>
      <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/17/CSIT-3rd-year'); ?>">Third year</a></button>
      <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/9/CSIT-4th-year'); ?>">Fourth year</a></button>
     
      
     
      
    </div>
  </div></ul>
    <ul><div>

 <button class="accordion"><a href="<?php echo site_url('home/category/10/Department-of-SE'); ?>">Department of Software Engineering</a></button>
    <div class="panel">
      <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/42/SE-1st-year'); ?>">first year</a></button>

      <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/71/SE-2nd-year'); ?>">Second year</a></button>
      <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/72/SE-3rd-year'); ?>">Third year</a></button>
      <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/73/SE-4th-year'); ?>">Fourth year</a></button>
     
      
     
      
    </div>
  </div></ul>
    <ul><div>




    <button class="accordion"> <a href="<?php echo site_url('home/category/19/department-of-electrical-engineering'); ?>">Department of Elecrical Engenering</a></button>
    <div class="panel">
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/21/EE-1st-year'); ?>">First year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/27/EME-2nd-year'); ?>">Second year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/23/EE-3rd-year'); ?>">Third year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/24/EE-4th-year'); ?>">Fourth year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/25/EE-5th-year'); ?>">Fifth year</a></button>
     
    </div>
  </div></ul>
    <ul><div>
    <button class="accordion"><a href="<?php echo site_url('home/category/20/Department-of-Mechanical-Engineering'); ?>">Department of Mechanical Engineering</a></button>
    <div class="panel">
      <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/58/ME-1st-year'); ?>">First year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/59/ME-2nd-year'); ?>">Second year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/62/ME-3rd-year'); ?>">Third year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/63/ME-4th-year'); ?>">Fourth year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/65/ME-5th-year'); ?>">Fifth year</a></button>
    </div>
  </div></ul>
 </div>

<button class="accordion"><a href="<?php echo site_url('home/category/88/College-of-Natural-and-Computational-Science'); ?>">College of Natural and Computitional Science</a></button>
<div class="panel">
  <ul><div>
    <button class="accordion"><a href="<?php echo site_url('home/category/40/Department-of-food-science'); ?>">Department of Food science</a></button>
    <div class="panel">
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/74/FS-1st-year'); ?>">First year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/75/FS-2nd-year'); ?>">Second year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/76/FS-3rd-year'); ?>">Third year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Fourth year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Fifth year</a></button>
    </div>
  </div></ul>
    <ul><div>
    <button class="accordion"> <a href="www.fanbc.com">Depatment of Geoloy</a></button>
    <div class="panel">
    <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/45/Geology-1st-year'); ?>">First year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/46/Geology-2nd-year'); ?>">Second year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/47/Geology-3rd-year'); ?>">Third year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Fourth year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Fifth year</a></button>   </div>
  </div></ul>
    <ul><div>
    <button class="accordion"> <a href="<?php echo site_url('home/category/43/Department-of-Industrial-Chemistry'); ?>">Departent of Industrail Chemistry</a></button></button>
    <div class="panel">
      <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">First year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Second year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Third year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Fourth year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Fifth year</a></button>    </div>
  </div></ul>
 </div>

<button class="accordion"><a href="<?php echo site_url('home/category/4/College-of-Civil-and-Architecture'); ?>"> College of Civil and Architecture </a></button>
<div class="panel">
  <ul><div>
    <button class="accordion"><a href="<?php echo site_url(''); ?>">Departement of Civil Engineering</a></button>
    <div class="panel">
    <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/50/CE-1st-year'); ?>">First year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/51/CE-2nd-year'); ?>">Second year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/54/CE-3rd-year'); ?>">Third year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/55/CE-4th-year'); ?>">Fourth year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/57/CE-5th-yaer'); ?>">Fifth year</a></button>   </div>
  </div></ul>
    <ul><div>
    <button class="accordion"> <a href="www.fanbc.com">Department of Architecture and Design</a></button>
    <div class="panel">
    <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/66/Arc-1st-year'); ?>">First year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/67/Arc-2nd-year'); ?>">Second year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/68/Arc-3rd-year'); ?>">Third year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/69/Arc-4th-year'); ?>">Fourth year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/70/Arc-5th-year'); ?>">Fifth year</a></button>
    </div>
  </div></ul>
  <ul><div>
    <button class="accordion"> <a href="<?php echo site_url('home/category/31/department-of-COTM'); ?>">Department of COTM</a></button>
    <div class="panel">
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/32/COTM-1st-year'); ?>">First year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/33/COTM-2nd-year'); ?>">Second year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/34/COTM-3rd-year'); ?>">Third year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/36/COTM-4th-year'); ?>">Fourth year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Fifth year</a></button>
    </div>
  </div></ul>
   
 </div>
<button class="accordion"> <a href="<?php echo site_url(''); ?>"> College of Biological and Chemical Engineering</a> </button>
<div class="panel">
  <ul><div>
    <button class="accordion"><a href="<?php echo site_url('home/category/87/Department-of-Biotechnology'); ?>"> Department of Biothecnology
    </a></button>
    <div class="panel">
      <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">First year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Second year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Third year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Fourth year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Fifth year</a></button>    </div>
  </div></ul>
    <ul><div>
    <button class="accordion"> <a href="www.fanbc.com">Department of Chemical Engineering</a></button>
    <div class="panel">
      <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/82/CHE-1st-year'); ?>">First year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/83/CHE-2nd'); ?>">Second year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/84/CHE-3rd-year'); ?>">Third year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/85/CHE-4th-year'); ?>">Fourth year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/86/CHE-5th-year'); ?>">Fifth year</a></button>
    </div>
  </div></ul>
    <ul><div>
    <button class="accordion"><a href="<?php echo site_url(''); ?>">Section 1 insides
    </a></button>
    <div class="panel">
    <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">First year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Second year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Third year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Fourth year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Fifth year</a></button>
    </div>
  </div></ul>
 </div>


 <button class="accordion"><a href="<?php echo site_url('home/category/15/College-of-Social-and-Applied-Science'); ?>">College of Social and Applied Science
</a></button>
<div class="panel">
  <ul><div>
 <button class="accordion"><a href="<?php echo site_url(''); ?>">Departement of Applied chemistry </a></button>
    <div class="panel">
      <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/78/ACH-1st-year'); ?>">First year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/79/ACH-2nd-year'); ?>">Second year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/80/ACh-3rd-year'); ?>">Third year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url('home/category/81/ACH-4th-year'); ?>">Fourth year</a></button>
     <button class="btn btn-lg btn-block"><a href="<?php echo site_url(''); ?>">Fifth year</a></button>
    </div>
  </div></ul>
    <ul><div>


<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
</script>
  
        </div><!--/.nav-collapse -->
      </div>
    </nav><!-- Navbar ends here --><!-- Navbar ends here -->
                  

                </div>
                
                <div class="well">
                   <h4>Recent posts</h4>
                   <ul class="list-unstyled">
                    <?php if(count($sidebar)): ?>
                    <?php foreach($sidebar as $bar): ?>
                    <li><?php echo anchor('home/post/' . $bar['post_id'] .'/'. url_title($bar['post_title']), ucfirst($bar['post_title'])); ?></li>
                     
                      <span><?php echo $bar['created'] ;?></span>
                      <?php endforeach;?>
                      <?php endif; ?>
                   </ul>    
             </div>
    </div>
  <!-- end -->  



</div>
