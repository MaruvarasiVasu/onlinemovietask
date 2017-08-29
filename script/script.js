 //$(document).ready(function(){
 //alert("Movie database ! ");
// $.getJSON("https://api.themoviedb.org/3/movie/550?api_key=22d8568621673d1336e8d0d1fb253821",function(data){
 // $.each(data.production_companies,function(key,value){
   //console.log(key, value);
   //alert("Name = "+value.name);
  // $("#prodCompanies").append("<li>"+value.name+"</li>");
 // });
 //});


(function($){
  $.getJSON("http://api.themoviedb.org/3/discover/movie?api_key=9a3279d9c69bf0d7cbb1b7b24da30df0 ").then(function (data){
    $.each(data.results,function(key,value){
   //console.log(data);
      $("#latestmovie").append('<li><a href="#" onClick="chance('+value.id+'); return false;">' + value.title + '</a></li>');
 });    
});
})(jQuery);


function chance(movieid){
  $("#leftpart").css("width","50%");
   $("#rightpart").css("width","50%");
     $('#rightpart').show();
      $.getJSON("http://api.themoviedb.org/3/movie/"+movieid+"?api_key=9a3279d9c69bf0d7cbb1b7b24da30df0").then(function (data) {
        var image ="https://image.tmdb.org/t/p/w500"+data.backdrop_path;
         $("#movieposter").attr("src",image);
          $("#title").html("movietitle: "+data.title);
           $("#language").html("movielanguage: "+data.original_language);
             $("#popular").html("moviepopular: "+data.popularity);
   //console.log("image:"+image);
    });
}

function callAboutus() {
  $.getJSON("json/abtjson.json",function(data){
    $.each(data.about,function(key,value){ 
      console.log(key,value);
       $("#homeSectionPart").html(aboutUsWrapper(value.title, value.contentOne));
      });
   });
}
function aboutUsWrapper(title,contentOne){
    var output= '<div class="about"> <span class="title"> '+title+'<br> </span> <span class="contentOne">' +contentOne+'</span> </div>';
  return output;
}



function callcontactForm(){
   $("#homeSectionPart").html(
        $("<form/>",{action:'#', method:'#'}).append(   
         $("<input/>", {type:'text', id:'vname', name:'name', placeholder:'Your Name'}), 
          $("<input/>", {type:'text', id:'vemail', name:'email', placeholder:'Your Email'}),
            $("<input/>", {type:'number', id:'vname', name:'contact', placeholder:'Contact number'}), 
              $("<textarea/>", {rows:'4px', cols:'63px', type:'text', id:'vmsg', name:'msg', placeholder:'Feedback'}),
                 $("<input/>", {type:'submit', id:'submit', value:'Submit'}))
       )
 }













