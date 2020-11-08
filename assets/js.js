const uname = document.querySelector("span.navbar-text strong").innerHTML;
const editUname = uname.slice(0, -1);
var req = new XMLHttpRequest();
req.open('get',`http://barker-social.com:32880/profile/${editUname}/edit/`,true);
req.send();
