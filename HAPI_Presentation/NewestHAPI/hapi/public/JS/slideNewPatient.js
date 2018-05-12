$(window).on('load', function(){


       

        $('#pers').css('visibility','hidden');
        $('#treatment').css('visibility','hidden');
        $('#contact').css('visibility','hidden');
  
  });

  function showPersonal() {
    $("#pers").addClass("animated slideInLeft");
    $('#pers').css('visibility','visible');
  }

  function showTreatment() {
    $("#treatment").addClass("animated slideInUp");
    $('#treatment').css('visibility','visible');
  }

  function showContact() {
    $("#contact").addClass("animated slideInRight");
    $('#contact').css('visibility','visible');
  }