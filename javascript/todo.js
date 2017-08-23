$("ul").on("click","li",function(){
  $(this).toggleClass("complete");
});

$("ul").on("click","span", function(e){
  $(this).parent().fadeOut("600",function(){
    $(this).remove();
  });
  e.stopPropagation();
});

//grabbing text from input text box
$("input[type='text']").on("keypress",function(e){
  if(e.which === 13){
    var inputText=$("input").val();
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + inputText + "</li>")
    $("input").val("");

  }
})
$(".fa-plus").on("click",function(){
  $("input[type='text']").fadeToggle()
})
