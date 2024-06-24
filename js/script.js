/////fetch jessica taylor patient data


var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic [coalition, skills-test]");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://fedskillstest.coalitiontechnologies.workers.dev", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));