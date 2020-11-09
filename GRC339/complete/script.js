//for burger menu: toggel open and close
$(".toggle").click(function() {
    $('header').toggleClass('show-menu');
});
//slippry code to create image slider
$('#out-of-the-box-demo').slippry(
    {controls: false, //no navigation arrows
    captions: false, //no captions
});