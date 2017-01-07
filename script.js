
$("#searchButton").on("click",function(){
	$(".landing").addClass("done");
	$(".searchContent").addClass("ready")
	$(".searchContent").html("");
	var searchTerm = $("input").val();
	var wikipedia = "https://en.wikipedia.org/?curid="	
	$.ajax( { 
      url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch='+searchTerm,
       success:function(data) {
       	console.log("on function(data)")
      	var searchTitle = data.query.pages;

      	for (var key in searchTitle) {
      		var id = searchTitle[key].pageid
      		var title = searchTitle[key].title
      		var extract = searchTitle[key].extract
      		if(searchTitle.hasOwnProperty(key)) {
      			$(".searchContent").append("<a href='"+wikipedia+id+"'>"+"<div class='query well'>"+"<p class='title'><strong>"+title+"</strong></p>"+"<p class='extract'>"+extract+"</p></div></a>" )
      		}
      	}
      },
  })
})



