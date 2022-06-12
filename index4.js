$(document).ready(function(){
    
     $('input').on('keyup', function(){
      let first = $('#name').val()
      let second =$('#ch').val()
      let third = $('#adverb').val()
      let last =$('#adjective').val()

      
      

      
    // //   console.log(first)
    // })
    
    $('button').on('click', function(){
       
       $('.result').addClass("violet").html("<div> One day "+first+" came to Incubator.Suddenly saw "  + second +".At first glance " +second+" seemed like a  google developer who knows everything.But he turned out "+ last+ " and at the end of the incubator "+first+" and " +second+" "+ third +" together to create the best web application in the World"+"</div>");
       
    })
})
})

