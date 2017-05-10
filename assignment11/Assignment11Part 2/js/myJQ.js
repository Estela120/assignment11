$(document).ready(function(){
		$.getJSON('/data/json.js', function(data) {
			$.each(data, function() {
				$.each(this, function(key, value) {
					$("#result").append("<li>" + 'ID: ' + value.ID + '<br>'+  value.name + '<br>' + value.title + '<br><img src=' + value.image + ' alt=' + value.ID + '><br>' + 'Office Phone ' + value.OfficeNumber + '<br>' +  'CellPhone ' + value.CellNumber + '<br>' + value.Email + '<br>' + 'Reports To: ' + value.ReportsTo + '<br><br>' + "</li>");
				});
			});
		});
	$("#result").on("click", "img", function(event){
//		window.console.log(event.target.src);
		var manager = event.target.alt;
		var count = 0;
		$.getJSON('/data/json.js', function(data) {
			$.each(data, function() {
				$.each(this, function(key, value) {
					if (value.ReportsTo == manager) {
					count += 1;
					}
				});
			window.alert(manager + " " + count);
			});
		});
	});
});



