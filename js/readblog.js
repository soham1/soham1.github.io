jQuery(function() {
	parseRSS("http://sohamashodiya.wordpress.com/?feed=rss", function(feed){
		//console.log(feed);
	} );
});



function parseRSS(url, callback) {
  jQuery.ajax({
    url: url,
    dataType: 'xml',
    success: function(data) {
	  console.log(data);
      //callback(data);
	  //data.responseData.feed
    },
	error: function(e){
		console.log(e);
	}
  });
}



