////////////////////////////////////////////////////////////////////////////
#Online-Noticeboard-System-for-Addis Ababa Science and Technology  University 

A online noticeboard system built on the codeigniter php framework, The noticeboard system can be used by any Higher education organization or Universities.
The notice board system has three user areas the backend for the Admin and Frontend for the normal users and up loaders. Up loaders can post announcement only when registered and will have to wait for the admin to verify the post against spamming before the post is public. The user one’s they are registered  view the notice which is basic and directed to them only.
The admin are responsible for activate or give permition for the post , if necessary  the admin edit or delete the post as much as possible. 

## Technologies: 
1. PHP(Codeignitor) for backend.
2. HTML, CSS and bootstrap(CSS framework) for frontend.
3. Javascript, Ajax for user experience.

## Technical Description

#### Model: we have create four models in this project.
1. Auth_model : This model controls the authentication aspect of the platform.
2. Category_model : This model controls all aspect regarding categories .
3. Post_model : This model controls the fetching of posts and inserting of post in db.
4. User_model : This model fetches the users from the database. 
#### View
All the views are named as their functionality. the header and footer view contain the header and footer of every pages and necessary links on stylesheets and scripts.

## Controllers
### public controllers
1. Auth : This deals with the authentication of users on the platform.
2. post : This deals with all post in the public area.
3. home : This displays the homepage of the noticeboard and its post.

### Admin controllers
1. dashboard : this displays the admins dashboard
2. category : This displays the categories
3. users : This displays the users
4. post : This displays the post 

//////////////////////////////////////
  AASTU ONB System instalation guide
/////////////////////////////////////

1. First of all install xampp server in your computer .
2. Run apache server and mysql from xampp containt managment tool interface.
3. Then copy the project source code and go to the location where your xampp is installed.
4. Then select the local disk->xampp->htdocs->the past the code.
5. After you past the code then open the xampp mysql database.
6. Create new database name what ever you want.
7. In the nav bar of xamp click on import button and select notice_db.sql file fromthe project folder and insert it into the database.

8. If you are define the database name according to your preference do the following
  8.1 Open the project  FINALPROJECT-ONB from the htdocs 
  8.2 Click on application folder
  8.3 Select config folder
  8.4 Select database .php
  8.5 Then inside the databse file rename the database name in place you create one.




***************
Acknowledgement
***************
AASTU online notice board system developer group wants to thanks codignieter frame
work developer for their nice user_guide manual  and also those who release same free template based on 
codigniter framework.



//////////////////////////////////////
Developers information
//////////////////

    NAME	                                     IDNO        
1.	Kasahun Shimalis                          ETS2300/07
2.	Guta Geme                                 ETS0550/07
3.	Giziyawit W/Michael                       ETS1479/06
4.	Fufa Diriba                               ETS0508/07
5.	Tigist Wubishet                           ETS1029/07




///////////////
To login with admin : use  any thing what u want we make if free for easy understadinf for you
///////////////////
To login us a user 
 regno====050505
 password==kasahun
 ///////////////////////////////////////