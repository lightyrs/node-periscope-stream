var request = require('request');

function periscope(url, callback) {
	var id = url.match(/periscope.tv\/w\/(.*)/i)[1];
	
	var api = 'https://api.periscope.tv/api/v2/getAccessPublic?token=' + id;
	
	request(api, function(error, response, body) {
		if (error || response.statusCode != 200) {
			callback('Response error: ' + respones.statusCode);
			return;
		}
		
		var obj = JSON.parse(body);
		
		callback(null, obj);
	});
}

module.exports = periscope;
