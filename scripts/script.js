//Long list O' components and variables
leftServices = document.getElementsByClassName('left');
rightServices = document.getElementsByClassName('right');
servicesDevelopment = document.getElementsByClassName('services-development');
servicesDesign = document.getElementsByClassName('services-design');
servicesWordPress = document.getElementsByClassName('services-wordpress');

/************************************************************************************************************************
//jQuery for sticky header, using sticky plugin
*************************************************************************************************************************/

  $("header").sticky({topSpacing:0,responsiveWidth:true});

/************************************************************************************************************************
//Portfolio Animatinons
*************************************************************************************************************************/

$(".project").mouseover(function(){
    $('.project-information').css({'transform' : 'translateY(-100px)'});
    $('.project-image').css({'transform' : 'scale(1.1)'})
  }).mouseout(function(){
    $('.project-information').css({'transform' : 'translateY(0px)'});
    $('.project-image').css({'transform' : 'scale(1)'})
});


/************************************************************************************************************************
//Functionality for the services buttons, changes the text when each respective button is clicked
*************************************************************************************************************************/
servicesDevelopment[0].addEventListener('click', function (){
    leftServices[1].textContent = "Web development is a broad term for the work involved in developing a web site for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing the simplest static single page of plain text to the most complex web-based internet applications (or just 'web apps') electronic businesses, and social network services. A more comprehensive list of tasks to which web development commonly refers, may include web ";
    rightServices[1].textContent =" 'web delopment' usually refers to the main non-design aspects of building web sites: writing markup and coding. Most recently Web development has come to mean the creation of content management systems or CMS. These CMS can be made from scratch, proprietary or open source. In broad terms the CMS acts as middleware between the database and the user through the browser. A principle benefit of a CMS is that it allows non-technical people to make changes to their"
});

servicesDesign[0].addEventListener('click', function (){
    leftServices[1].textContent = "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization. Often many individuals will work in teams covering different aspects of the design process, although some designers will cover them all.";
    rightServices[1].textContent ="The term web design is normally used to describe the design process relating to the front-end (client side) design of a website including writing mark up. Web design partially overlaps web engineering in the broader scope of web development. Web designers are expected to have an awareness of usability and if their role involves creating mark up then they are also expected to be up to date with web accessibility guidelines."
});

servicesWordPress[0].addEventListener('click', function (){
    leftServices[1].textContent = "The term web design is normally used to describe the design process relating to the front-end (client side) design of a website including writing mark up. Web design partially overlaps web engineering in the broader scope of web development. Web designers are expected to have an awareness of usability and if their role involves creating mark up then they are also expected to be up to date with web accessibility guidelines.";
    rightServices[1].textContent ="and the second case could be a computer running the software package WordPress.org.[5] A local computer may be used for single-user testing and learning purposes. Features include a plugin architecture and a template system. WordPress is used by 30.6% of the top 10 million websites as of April 2018.As such, WordPress is the most popular website management or blogging system in use on the Web,"
});
