
var dkGetServiceUrl = function(){

	if(location.host.indexOf("github.io") != -1)
		return "http://dk-cloud-service.azurewebsites.net/";
	else
		return "http://localhost/cloudservice/"

}
