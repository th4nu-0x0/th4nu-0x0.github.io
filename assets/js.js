const uname = document.querySelector("span.navbar-text strong").innerHTML;
var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get',`http://barker-social.com:32880/profile/${uname}/edit/`,true);
req.send();
