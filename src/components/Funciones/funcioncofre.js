var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://127.0.0.1:8002/api/backs", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result["hydra:member"]))
    .catch(error => console.log('error', error));
