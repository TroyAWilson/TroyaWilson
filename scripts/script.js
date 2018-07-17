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
for(let i =0; i < 5; i++){
$(".project").eq(i).mouseover(function(){
    $('.project-information').eq(i).css({'transform' : 'translateY(-100px)'});
      //Using the .eq() method lets me pick out a specfic element in the array similar to using project-information[i]
    $('.project-image').eq(i).css({'transform' : 'scale(1.1)'});
  }).mouseout(function(){
    $('.project-information').eq(i).css({'transform' : 'translateY(0px)'});
    $('.project-image').eq(i).css({'transform' : 'scale(1)'});
})};

/************************************************************************************************************************
//Functionality for the services buttons, changes the text when each respective button is clicked
*************************************************************************************************************************/
servicesDevelopment[0].addEventListener('click', function (){
    leftServices[1].textContent = "I am a developer at heart, developing websites is my passion. I use the lastest in Front-end development technologies such as HTML5, CSS3, ES6, jQuery and Python to create unique websites and web applications. All my code is clean and follows W3C standards. Let's create together!";
    // rightServices[1].textContent =" 'web delopment' usually refers to the main non-design aspects of building web sites: writing markup and coding. Most recently Web development has come to mean the creation of content management systems or CMS. These CMS can be made from scratch, proprietary or open source. In broad terms the CMS acts as middleware between the database and the user through the browser. A principle benefit of a CMS is that it allows non-technical people to make changes to their"
});

servicesDesign[0].addEventListener('click', function (){
    leftServices[1].textContent = "Design goes hand in hand with development. I create logos, buisness cards, website redesigns, and much more. Using modern design tools like Sketch and Photoshop. Let's create together!";
    // rightServices[1].textContent ="The term web design is normally used to describe the design process relating to the front-end (client side) design of a website including writing mark up. Web design partially overlaps web engineering in the broader scope of web development. Web designers are expected to have an awareness of usability and if their role involves creating mark up then they are also expected to be up to date with web accessibility guidelines."
});

servicesWordPress[0].addEventListener('click', function (){
    leftServices[1].textContent = "COMING SOON! WordPress is a Content Management System (CMS) that powers 76.5 million sites."
    // leftServices[1].textContent = "WordPress is a Content Management System (CMS) that powers 76.5 million sites. I specialize in setting up and customizing premium themes as well as developing custom ones fit for any business or niche. All WordPress sites come with free CPanel hosting and basic SEO optimization";
    // rightServices[1].textContent ="and the second case could be a computer running the software package WordPress.org.[5] A local computer may be used for single-user testing and learning purposes. Features include a plugin architecture and a template system. WordPress is used by 30.6% of the top 10 million websites as of April 2018.As such, WordPress is the most popular website management or blogging system in use on the Web,"
});

/************************************************************************************************************************
// jQuery for form validation
*************************************************************************************************************************/

// var frmvalidator  = new Validator("contactform");
// frmvalidator.addValidation("name","req","Please provide your name");
// frmvalidator.addValidation("email","req","Please provide your email");
// frmvalidator.addValidation("email","email",
//   "Please enter a valid email address");
