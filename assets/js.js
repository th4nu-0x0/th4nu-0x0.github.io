const uname = document.querySelector("span.navbar-text strong").innerHTML;
req.onload = handleResponse;
const editUname = uname.slice(0, -1)
var req = new XMLHttpRequest();
req.open('get',`http://barker-social.com:32880/profile/${editUname}/edit/`,true);
req.send();
function handleResponse() {
	var token = this.responseText.match(/name="_token" value="(\w+)"/)[1];
	console.log(token);
}
