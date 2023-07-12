function register(){



var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");



var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
const username=document.getElementById('username').value;
const password=document.getElementById('password').value;

fetch("https://127.0.0.1:8000/front/register?username="+username+"password="+password, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}