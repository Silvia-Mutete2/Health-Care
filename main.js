$(document).ready(function(){
    //For the navbar to appear on scroll
    
    $(window).scroll(function(){
        if(this.scrollY >200){
            $('.navbar').addClass('sticky')
        }else{
            $('.navbar').removeClass('sticky')
            }
        })
    })


