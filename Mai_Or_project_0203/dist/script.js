
//$('.collapse').not(':last').collapse(); // Collapse all but the first row on the page.

// This section makes the search work.
(function() {
  var searchTerm, panelContainerId;
  $('#accordion_search_bar').on('change keyup', function() {
    searchTerm = $(this).val();
    $('#accordion > .panel').each(function() {
      panelContainerId = '#' + $(this).attr('id');

      // Makes search to be case insesitive 
      $.extend($.expr[':'], {
        'contains': function(elem, i, match, array) {
          return (elem.textContent || elem.innerText || '').toLowerCase()
            .indexOf((match[3] || "").toLowerCase()) >= 0;
        }
      });

      // END Makes search to be case insesitive

      // Show and Hide Triggers
      $(panelContainerId + ':not(:contains(' + searchTerm + '))').hide(); //Hide the rows that done contain the search query.
      $(panelContainerId + ':contains(' + searchTerm + ')').show(); //Show the rows that do!

    });
  });
}());
// End Show and Hide Triggers

/*
function JsonFunc() {
    var json = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "/dist/parameters.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
    console.log(json);
    for (i = 0; i < 3; i++) {
        $(".my1").text("hey");


    }
}
*/


$(document).ready(function () {       
    $("#myNav").hide();


      for (var i = 0; i <14; i++) {
        $("#acord"+ i).find("a").text(myArray[i].myH1);
        $("#acord"+ i).find("p:first").text("קיצורי מקשים:" +" "+myArray[i].myShortcut);
        $("#acord"+ i).find("p:last").text(myArray[i].MyExplain);
        $("#acord"+ i).find("img").attr("src",myArray[i].myImg);
  

      }   


});



var myclick=0;
$("#exitNav").hide();

function navFunc(){
  // window.location.href = "about.html";
  if(myclick%2==0){
      $(".container").hide();
    $("#allContent").hide();
    $("#myNav").slideDown("slow");
    // // $("#myNav").show(); 
    //   width: 'toggle'
    // });
// $("h1").css('color','#FF5F6D');
$("#whiteBack").css('height','100%');
$("h1").css('color','#21375E');
$("#exitNav").show(); 
      $("#navIn").hide();

  }
  else{
    // $("#myNav").fadeOut("fast");
      $(".container").show();
      $("#allContent").show();
        $("#myNav").hide();
    $("#navIn").show(); 
    $("#exitNav").hide();    
    $("#whiteBack").css('height','6em');
    $("h1").css('color','#21375E');


  }
  myclick++;
}

function exitAbout(){
  window.location.href = "index.html";

}


function BTNgoTopkudot(){
  window.location.href = "index.html";


}

function BTNgoTotips(){

  window.location.href = "offers.html";

}


// END This section makes the search work.