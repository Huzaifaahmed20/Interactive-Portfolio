$(document).ready(function(){

  var divHeight = $(".jumbotron").outerHeight();
$(".scroll-it").click(function(e){

   var linkHref = $(this).attr("href");
 $('html, body').animate({
    scrollTop: $(linkHref).offset().top - divHeight

 },1000);

e.preventDefault();

});


});

var obj = {
  name: "Huzaifa Ahmed",
  introAbt: "I'M 20 YEARS OLD FRONT-END-DEVELOPER AND FOCUSED ON BRAND IDENTITY!",
  furtherAbt:  "I am currently an Undergraduate student from <abbr title='Sir Syed University of Engineering and Technology'>SSUET</abbr> in Computer Science. I done my Matriculation in 2013 and Intermediate education in 2015. I am Passioanate about Mobile and Web Application Development. I have made some Projects as you can also see them in my <a id='furtherAbout' class='scroll-it' style='color:black;text-decoration:underline' href='#work'> WORK </a>Section."
};

var introAbout = document.querySelector("#introAbout");
introAbout.innerHTML = obj.introAbt;

var furtherAbout = document.querySelector("#furtherAbout");
furtherAbout.innerHTML = obj.furtherAbt;

var myName = document.querySelector("#myName");
myName.innerHTML = obj.name;




