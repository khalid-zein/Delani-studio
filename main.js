// $(document).ready(function(){
//     $(".image1").click(function(){
//       $(".image1").slideDown('1500').hide('1000');
//       $(".hidden").show('1500');
//     });
//     $(".hidden").click(function(){
//       $(".hidden").slideUp('1500');
//       $(".image1").slideDown('1500');
//     });
//   });

  $(document).ready(function(){
    $(".image1").click(function(){
      $(".image1").toggle();
      $(".hidden").toggle();
    });
    $(".hidden").click(function(){
      $(".hidden").toggle();
      $(".image1").toggle();
    });
  });

  $(document).ready(function(){
    $(".image2").click(function(){
      $(".image2").toggle();
      $(".hidden2").toggle();
    });
    $(".hidden2").click(function(){
      $(".hidden2").toggle();
      $(".image2").toggle();
    });
  });

  $(document).ready(function(){
    $(".image3").click(function(){
      $(".image3").toggle();
      $(".hidden3").toggle();
    });
    $(".hidden3").click(function(){
      $(".hidden3").toggle();
      $(".image3").toggle();
    });
  });
  
  