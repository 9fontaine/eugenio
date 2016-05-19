<script>
$(document).ready(function(){
/*$(".oji").click(function(){
 var offset = $( this ).offset();
  event.stopPropagation();
  $( "#result" ).text( this.tagName +
    " coords ( " + offset.left + ", " + offset.top + " )" );*/


});



  var imgs = ["IMG_20150413_212008.jpg",
            "IMG_20150413_212008.jpg",
            "IMG_20150413_212008.jpg"]
    var cnt = imgs.length;

    $(function() {
        setInterval(Slider, 5000);
    });

    function Slider() {
    $("#imageSlide").show("fast", function() {
       $(this).attr("src", imgs[(imgs.length++) % cnt]).show();
    });
    

$(".btn_close").click(function(){
$(".popup_block").hide();
$(".oji").css({"background-color": "#49498e"});
$(".oji a").css({"color": "#fff"});
  });

    $(".oji").mouseover(function(){

if($(this).css('display') == 'show')
{

//completer
}
$(this).css({"background-color": "white"});
var link_name = "#" + $(this).attr("name");
$(".oji a").css({"color": "#221"});
  $(link_name).show ().css({"background-color": "#49498e;"}); 

   
    });
/*break   first*/
    $("this").mouseout(function(){
$(".oji").css({"background-color": "white"});

         //$(".popup_block").hide();  
    });

$(".oji").css({"background-color": "#49498e"});
$(".oji a").css({"color": "#fff"});
});


    $(".huko").mouseover(function(){
$(".huko").show("slow");
       $(".huko2").show("slow");
    });
    $(".huko2").mouseout(function(){
        $(".huko2").hide("slow");
    });
 $(".huko").on(function(e) {
        e.preventDefault();
        window.open($(this).attr('href'), '.popup_block');
    });
  $("button").click(function(){
        $("#w3s").attr("href", "http://www.w3schools.com/jquery");
    });




    $(".huko").mouseover(function(){
$(".huko").show("slow");
       $(".huko2").show("slow");
    });
    $(".huko2").mouseout(function(){
        $(".huko2").hide("slow");
    });
 $(".huko").on(function(e) {
        e.preventDefault();
        window.open($(this).attr('href'), '.popup_block');
    });
  $("button").click(function(){
        $("#w3s").attr("href", "http://www.w3schools.com/jquery");
    });




    $(".huko").mouseover(function(){
$(".huko").show("slow");
       $(".huko2").show("slow");
    });
    $(".huko2").mouseout(function(){
        $(".huko2").hide("slow");
    });
 $(".huko").on(function(e) {
        e.preventDefault();
        window.open($(this).attr('href'), '.popup_block');
    });
  $("button").click(function(){
        $("#w3s").attr("href", "http://www.w3schools.com/jquery");
    });

});
</script>