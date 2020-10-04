<!--<?php
	session_start();
/*
	if (!isset($_SESSION['name'])) {
		$_SESSION['msg'] = "You must log in first";
		header('location: ../Admin1/login_student.php');
	}

	if (isset($_GET['logout'])) {
		session_destroy();
		unset($_SESSION['name']);
		header("location: ../index.html");
	}
*/
?>
 <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FMS</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cookie">
    <link rel="stylesheet" href="../../assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="../../assets/css/styles.css">
    <link rel="stylesheet" href="../../assets/css/Pretty-Footer.css">
    <link rel="stylesheet" href="../../assets/css/Google-Style-Login.css">
    <link rel="stylesheet" href="../../assets/css/Pretty-Registration-Form.css">
		<style>
		      #form_student{
        width: 250px;
        margin-left: 250px;
      }
			#pdf{
				margin-left: 150px;
			}
		body {
		    font-family: "Lato", sans-serif;
		}

		.sidenav {
		    height: 69%;
		    width: 0;
		    position: fixed;
		    z-index: 1;
		    top: 0;
		    right: 0;
		    background-color: #111;
		    overflow-x: hidden;
		    transition: 0.5s;
		    padding-top: 60px;
		}

		.sidenav a {
		    padding: 8px 8px 8px 32px;
		    text-decoration: none;
		    font-size: 25px;
		    color: #818181;
		    display: block;
		    transition: 0.3s;
		}

		.sidenav a:hover {
		    color: #f1f1f1;
		}

		.sidenav .closebtn {
		    position: absolute;
		    top: 0;
		    right: 25px;
		    font-size: 36px;
		    margin-left: 50px;
		}

		@media screen and (max-height: 450px) {
		  .sidenav {padding-top: 15px;}
		  .sidenav a {font-size: 18px;}
		}
		/* Dropdown Button */
.dropbtn {
padding: 8px 8px 8px 32px;
text-decoration: none;
font-size: 25px;
color: #818181;
display: block;
transition: 0.3s;
background-color: #111;
border-color: #111;
border-style: hidden;
}

.dropbtn:hover{
	color: white;
}
/* The container <div> - needed to position the dropdown content */
.dropdown,.dropdown1,.dropdown2 {
    position: relative;
    display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content,.dropdown-content1,.dropdown-content2 {
    display: none;
    margin-right: 10px;
    background-color:#111;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		padding: 8px 8px 8px 32px;
}

/* Links inside the dropdown */
.dropdown-content a,.dropdown-content1 a,.dropdown-content2 a {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}
.dropdown-content a:hover,.dropdown-content1 a:hover,.dropdown-content2 a:hover
 {
	 color: white;

}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}
		</style>
</head>

<body>
<div class="container" style="padding-top:50px">

</fieldset>
</div>
	<script>
	function openNav() {
	    document.getElementById("mySidenav").style.width = "250px";
	}

	function closeNav() {
	    document.getElementById("mySidenav").style.width = "0";
	}
	</script>
	<script type="text/javascript">
	function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

	var dropdowns = document.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
			openDropdown.classList.remove('show');
		}
	}
}
}
	</script>

	<script type="text/javascript">
	function myFunction1() {
	document.getElementById("myDropdown1").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

	var dropdowns = document.getElementsByClassName("dropdown-content1");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
			openDropdown.classList.remove('show');
		}
	}
}
}
	</script>

	<script type="text/javascript">
	function myFunction2() {
	document.getElementById("myDropdown2").classList.toggle("show");
	}

	// Close the dropdown menu if the user clicks outside of it
	window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

	var dropdowns = document.getElementsByClassName("dropdown-content2");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
			openDropdown.classList.remove('show');
		}
	}
	}
	}
	</script>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
					<div class="navbar-header">
						<span style="font-size:30px;cursor:pointer; color:#1d2b4d; font-weight:lighter;padding-bottom:5px; margin-bottom:5px;" onclick="openNav()">&#9776; Open</span>
					</div>
					<a class="navbar-brand navbar-link" href="#"><img src="../../assets/img/image_logo.jpg" id="logo" height='53px' style="padding-bottom: 0px; margin-left:360px;"><strong>AASTU</strong style="color:rgb(29,43,77);"> File Management Services</a>
					<button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
          <div class="collapse navbar-collapse" id="navcol-1">

						<div id="mySidenav" class="sidenav">
						  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
						  <a href="../../index.html">Home </a>
							<div class="dropdown">
  <button  onclick="myFunction()" class="dropbtn"> Manage Account </button>
  <div id="myDropdown" class="dropdown-content">
		<a href="manageusers/adminemployee/admin.php" style="font-size:10px;">Admin Employee</a>
    <a href="manageusers/student/admin.php" style="font-size:10px;">Student</a>
    <a href="manageusers/instructor/admin.php" style="font-size:10px;">Instructor</a>
    <a href="manageusers/recordhead/admin.php" style="font-size:10px;">Record Head</a>
    <a href="manageusers/ile/admin.php" style="font-size:10px;">Incomming Record Employee</a>
    <a href="manageusers/ole/admin.php"  style="font-size:10px;">Outgoing Record Employee</a>

  </div>
</div>

	<div class="dropdown1">
  <button  onclick="myFunction1()" class="dropbtn">Create Users </button>
  <div id="myDropdown1" class="dropdown-content1">
		<a href="admin_employee/registration_adminempl.php" style="font-size:10px;">Admin Employee</a>
    <a href="manageusers/student/admin.php" style="font-size:10px;">Student</a>
    <a href="manageusers/instructor/admin.php" style="font-size:10px;">Instructor</a>
    <a href="recordhead/registration_rechead.php" style="font-size:10px;">Record Head</a>
    <a href="ile/registration_ile.php" style="font-size:10px;">Incomming Record Employee</a>
    <a href="ole/registration_ole.php"  style="font-size:10px;">Outgoing Record Employee</a>

  </div>
</div>

	<div class="dropdown2">
	<button  onclick="myFunction2()" class="dropbtn"> Report </button>
	<div id="myDropdown2" class="dropdown-content2">
		<a href="../report_adminmpl/index.php" style="font-size:10px;">Admin Employee</a>
		<a href="../report_student/index.php" style="font-size:10px;">Student</a>
		<a href="../report_teacher/index.php" style="font-size:10px;">Instructor</a>
		<a href="../report_rcordhead/index.php" style="font-size:10px;">Record Head</a>
		<a href="../report_ile/index.php" style="font-size:10px;">Incomming Record Employee</a>
		<a href="../report_ole/index.php" style="font-size:10px;">Outgoing Record Employee</a>

	</div>
</div>
							<a href="#">Contacts </a>
							<a href="../feedback/feedback_form.php"> Feedback</a>
							<?php  if (isset($_SESSION['name'])) : ?>
	            <a href="../index.html?logout='1'" style="color: white;">Logout</a>
						<?php session_destroy();  ?>
	            <?php endif ?>
						</div>
          </div>
        </div>
    </nav>
		<div id="login_form" class="login-card">
			<h2 class="" id="for_heading" style=" color:#1d2b4d; text-align:center;"> Report</h2>
      <a href="#"><img class="img-responsive" style="width:600px;" src="../../assets/img/new student1.jpg" ></a>
			<form class=""  method="post" action="generate_pdf.php">
				<h2 >Student Report Generation</h2>
<button type="submit" id="pdf" name="generate_pdf" class="btn btn-primary">Generate Report</button>
			</form>
     </div>

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6 footer-navigation">
                    <h3><a href="#"><img src="../../assets/img/aastulogo.png" alt="Footer Logo" width="45" height="60">AASTU File Management</a></h3>
                    <p class="links"><a href="#">Home</a><strong> · </strong><a href="#">Services</a><strong> · </strong><a href="#">Contact Us</a><strong> · </strong><a href="#">Feedback</a><strong> · </strong><a href="#">Faq</p>
                    <p
                    class="company-name">AASTU FIle Management© 2018 </p>
                </div>
                <div class="col-md-4 col-sm-6 footer-contacts">
                    <div><span class="fa fa-map-marker footer-contacts-icon"> </span>
                        <p><span class="new-line-span">Killinto</span> Addis Ababa, Ethiopia</p>
                    </div>
                    <div><i class="fa fa-phone footer-contacts-icon"></i>
                        <p class="footer-center-info email text-left"> +251913014520</p>
                    </div>
                    <div><i class="fa fa-envelope footer-contacts-icon"></i>
                        <p> <a href="#" target="_blank">AASTU FM@company.com</a></p>
                    </div>
                </div>
                <div class="clearfix visible-sm-block"></div>
                <div class="col-md-4 footer-about">
                    <h4>About the company</h4>
										<p class="text-justify"> Addis Ababa Science and Technology's File Managment is a service developed for the university community by a group of <a href="/Project/project1/Homepage/developers.html">developers </a> to create a better and efficient ways to transact, manipulate,and maintain
												file.</p>
                    <div class="social-links social-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                </div>
            </div>
        </div>
    </footer>
    <script src="../../assets/js/jquery.min.js"></script>
    <script src="../../assets/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>
-->