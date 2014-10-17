//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function (){
  
  $(".links").on("click", function(e){
    
    $(this).attr('disabled', 'disabled');
    e.preventDefault();
    $("#right_column").empty();
    var url = $(this).attr("href");
    
    $.getJSON("https://www.readability.com/api/content/v1/parser?url="+ url +"&token=2bb54b407184819615691a30fba3eda0e58d20d0&callback=?",function(result){
      $('#right_column').html(result.content);
      console.log(result.content);
      });
  });
  
});