 function changelanguage(e){
    // alert(e);
    $('.english').css('backgroundColor','#fff') ;  
    $('.english').css('color','#000') ;
    $('.french').css('backgroundColor','#fff') ;  
    $('.french').css('color','#000') ;  
    $('.polish').css('backgroundColor','#fff') ;  
    $('.polish').css('color','#000') ;  

    $("."+e).css('backgroundColor','#95a4d0') ;  
    $("."+e).css('color','#fff') ;
    $("#languageval").val(e); 
    alert("Language is "+e);
}
function openmodal(){
    $('#language').animate({
        height: 'toggle'
      });

    }