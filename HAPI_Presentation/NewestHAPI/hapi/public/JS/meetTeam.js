$(window).on('load', function(){
      setTimeout(addSpan, 400);
      setTimeout(colorHapi, 800);
      setTimeout(showBtn, 2500);
  });

  function addSpan() {
    var oldString = 'HAPI PEOPLE MAKE FOR HAPI USERS',
    newString = '<span id="firstHAPI">HAPI</span><span id="peep"> PEOPLE</span><span id="make"> MAKE</span><span id="for"> FOR</span><span id="haptwo"> HAPI</span><span id="users"> USERS</span>'
    newText = $('#head').text().replace(RegExp(oldString,"gi"),newString);
    

    $('#head').html(newText);        
  }



 function colorHapi() {
    setTimeout('$("#firstHAPI").addClass("animated zoomInUp colour")',500);
    setTimeout('$("#peep").addClass("animated zoomInUp colour")',800);
    setTimeout('$("#make").addClass("animated zoomInUp colour")',1100);
    setTimeout('$("#for").addClass("animated zoomInUp colour")', 1400);
    setTimeout('$("#haptwo").addClass("animated zoomInUp colour")',1700);
    setTimeout('$("#users").addClass("animated zoomInUp colour")', 2000);
    setTimeout('$("#head").css("text-decoration", "underline")', 2300);
    
  }

 

function hideBtn() {
  $('#btn').css('visibility','hidden');
}

  function showQuote() {
    $('#eoinp').html("Recursively drinks tea");
  }
  function alQuote() {
    $('#alp').html("Loves going for a long swim in the digital Ocean");
  }

  function sobQuote() {
    $('#sobp').html("Only eats Raspberry Pi");
  }

  function andQuote() {
    $('#andp').html("I'm Sorry Ms Jackson");
  }
  
  function showCurtain() {
    $("body").addClass("animated slideInRight");
   
  }

  function showBtn() {
    $("div#btn").removeClass("hidden");
    $("#btn").addClass("animated slideInLeft");
  }


