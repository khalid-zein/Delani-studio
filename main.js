$(document).ready(function(){
    $(".image1").click(function(){
      $(".image1").toggle('hide');
      $("#design").toggle('show');
    });
    $("#design").click(function(){
      $("#design").toggle();
      $(".image1").toggle();
    });
    $(".image2").click(function(){
      $(".image2").toggle('hide');
      $("#development").toggle('show');
    });
    $("#development").click(function(){
      $("#development").toggle();
      $(".image2").toggle();
    });
    $(".image3").click(function(){
      $(".image3").toggle('hide');
      $("#product").toggle('show');
    });
    $("#product").click(function(){
      $("#product").toggle();
      $(".image3").toggle();
    });
    $("#work1").mouseover(function(){
      $("#overlay1").show();
    }).mouseout(function(){
      $("#overlay1").hide();
    });
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
});

const btn = document.getElementById("btn");

function formReset() {
    document.getElementById("myForm").reset();
}

btn.addEventListener("click", function(event) {
    event.preventDefault();
    let message = document.getElementById("message").value;
    let email = document.getElementById("email").value;
    let Name = document.getElementById("name").value;
    let result = document.getElementById("result");
    let error = document.getElementById("error");

    if (Name === "" || email === "") {
      return  error.innerHTML = "Enter your Name and Email!";
    }else if((Name) && (email)){
        result.innerHTML = Name + ", We have received your message, Thank you for reaching out to us";
    }
    formReset();
    error.innerHTML = "";

});


  
  