

<?php  $this->load->view('home/headingnew');?>

 <!-- main body content -->
  
<section>
   <div class="container">
      <div class="row">
      
<?php  $this->load->view('admin/nav_admin');?>      
      
<?php  $this->load->view($main);?>      




       </div> 
   </div>
</section>


<?php  $this->load->view('footer');?>