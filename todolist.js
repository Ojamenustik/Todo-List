// check off specific todos by clicking
$("ul").on( "click", "li", function(){
   $(this).toggleClass("complited");
});

//click on x to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var TodoText = $(this).val();
        $(this).val("");
        $("ul").prepend("<li><span><i class='fa fa-trash'></i></span> " + TodoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})
 