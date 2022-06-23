$("#tres").hover(function(){

    $('#sub_menu').css('display','block')  

})
$("#tres").mouseleave(function(){
    setTimeout(() => {
        $('#sub_menu').css('display','none')  
    }, 3000); 
})
$('#search').focus( function(){
    $('#pesquisa').css('border','1px solid rgb(211, 211, 211)')
} )
$('#search').focusout( function(){
    $('#pesquisa').css('border','1px solid rgb(240, 240, 240)')
} )