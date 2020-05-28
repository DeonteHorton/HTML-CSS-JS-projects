$(document).ready(function(){
    // do stuff;
    // console.log(Hello world);
    $('.hello').click(function(){
        //do stuff
        $('.hello').toggleClass('goodbye');
        $('.goodbye').slideleft('hello'); 
    });  
});

$(document).ready(function(){
    $("button").click(function(){
      $("#p1").css("color", "red")
        .slideUp(2000)
        .slideDown(2000);
    });
  });
