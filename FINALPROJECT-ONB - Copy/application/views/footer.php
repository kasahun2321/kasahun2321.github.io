 <footer class="container_fluide">
      <div  id="kfooter">
         
    <div class="row">
        <div class="col-md-4 col-sm-6 footer-navigation">
            <h3><a href="<?php echo site_url('home/slider'); ?>">AASTU ONB <span><img src="<?php echo base_url();?>assets/img/relvant/MINAASTU.JPG"></a>  </span></a></h3>
            <p class="links"><a href="<?php echo site_url('home/slider'); ?>">Home</a><strong> | </strong><strong>
             <a href="<?php echo site_url('about/index'); ?>">About</a><strong> | </strong><a href="<?php echo site_url('contactform'); ?>">Contact</a></p>
            <p class="company-name">AASTUONB © 2010 E.C </p>
        </div>
        <div class="col-md-4 col-sm-6 footer-contacts">
            <div><span class="fa fa-map-marker footer-contacts-icon"> </span>
                <p><span class="new-line-span">Addis Ababa </span> Akaki kaliti</p>
            </div>
            <div><span class="fa fa-phone footer-contacts-icon"> </span>
                <p><span class="new-line-span"></span> Communication Diroctorate</p>
                 <p><span class="new-line-span">+251 920055802</span> </p>
                  <p><span class="new-line-span">+251 920055802</span> </p>
            </div>
            
            <div><i class="fa fa-envelope footer-contacts-icon"></i>
                <p> <a href="www.aastu.edu.et" target="_blank">www.aastu.edu.et</a></p>
            </div>
        </div>
        <div class="clearfix visible-sm-block"></div>
        <div class="col-md-4 footer-about">
            <h4>AASTU</h4>
            <p> Addis Ababa Science and Technology University is  Univeristy for Industiry 
            </p>
            <div class="social-links social-icons">
            	<h3>follow us on </h3>
            	<a href="https://www.facebook.com/" target="null"><i class="fa fa-facebook large"></i></a><br/>
            	<a href="https://www.twitter.com" target="null"><i class="fa fa-twitter larege"></i></a><br/>
            	<a href="https://www.linkedin.com" target="_blank"><i class="fa fa-linkedin large"></i>
            	
            </div>
        </div>
    </div>






<!-- footer-->
          
          
          
          
          
          
      </div>
    </footer>
    
    
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->  
    <script src="<?php echo site_url('assets/js/jquery.js'); ?>"></script>
    <script src="<?php echo site_url('assets/js/bootstrap.js'); ?>"></script>
    <script src="<?php echo site_url('assets/js/chart.js'); ?>"></script>
    <script src="<?php echo site_url('assets/js/chart.js'); ?>"></script>
    <script type="text/javascript" src="<?php echo site_url('assets/js/TreeMenu.js'); ?>"></script>
      <script src="<?php echo site_url('assets/ckeditor/ckeditor.js'); ?>"></script>
      
    <script>
    $(document).ready(function() {
		
        $(".carousel-indicators li:first").addClass("active");
        $(".carousel-inner .item:first").addClass("active");
		
       		
		
	});
	
	
	function activateNow(id){
		
		
			     
				$.ajax({
					
				   url : "<?php echo site_url('admin/post/activate_ajax'); ?>",	
				   type : 'POST',
				   data:  {id : id },
				   
				   beforeSend: function(){
				   $("#ativemode"+id).html("loading......");
				},
				   success: function(data){
					   
			    if(data =="activate"){
					$("#ativemode"+id).html('activated');
					$("#in_post"+id).addClass('bounceOutLeft').fadeOut();
				}
				  
			      },
					
				
				});
			      
			   
			   
			
			
    }
	
	
	
</script>
<script>
       
	   var bardata = {
		     
			 labels : ["january", "febuery", "march "],
			 dataset : [
			 
			          {
					     fillColor: "#ffffee",
						 strokeColor : "#000",
						 data: [500,230,700]  
					  
					  }
					  
			 
			 
			 ]  
		   
		   
		   
		   };
		   
		   var siteChart = document.getElementById('siteChart').getContext('2d');
	       new Chart(siteChart).Bar(bardata);
	   
    
    </script>
  </body>
</html>
