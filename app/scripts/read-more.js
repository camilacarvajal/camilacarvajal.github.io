$(".read-more-expand").hide();//Showing and hiding done in javascript in case Javascript is disabled.
$(".read-more-button").show();

$(".read-more-button").click(function(){
  var me = $(this).toggleClass("open"),
      txt = me.is('.open') ? '- hide' : '+ read more';
  me.text(txt);
  $(".read-more-expand").slideToggle();
}); 

  

 