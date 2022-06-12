$(document).ready(function(){
    
    $('input').on('keyup', function(){
     let first = $('#name').val()
     let second =$('#ch').val()
     let third = $('#adverb').val()
     

     
     let last= first * second * third /1024/8

     
   // //   console.log(first)
   // })
   
   $('button').on('click', function(){
      
      $('.result').addClass("violet").html("<div>"+"    "+last +"kb"+"</div>");
      
   })
})
})

