$(document).ready(function () {

    var showData = $('#show-data');

    $.getJSON('example.json', function (data) {
      var opHolder=data.Operators;
        
      for (i = 0; i < opHolder.length; i++) { 
      showData.append("<li><a href=" + opHolder[i].portalLink+ ">" + opHolder[i].opertorName+"</a></li>");
         }
      
    });

});

$(document).ready(function () {
    bgPosition();
    
    $(window).resize(function() { 
	
	   bgPosition();
        
	});
});


function bgPosition(){
var bgSize =$( window ).height();
$('.container').css('min-height',bgSize); 
}

