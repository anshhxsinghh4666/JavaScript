/* Fetch API : The Fetch API provides an interface for fetching (sending/Receiving) resources.
               It uses Request and Response objects.
               The fetch() method is used to fetch a resource (data).

               Syntax : let promise = fetch(url, [options])
*/


const url = "https://dog.ceo/api/breeds/list/all"
const fact = document.querySelector("#fact");
const btn = document.querySelector("#btn1");


let promise = fetch(url); // Get Request
console.log(promise);

const getFacts = async () => {
  console.log("Getting Data....");
  let response = await fetch(url);
  console.log(response);  // JSON Format
  let data = await response.json();
  console.log(data);
  fact.innerText = data[0].text;
};
console.log(getFacts());
btn.addEventListener("click", getFacts);


// OR (Alternative Version)


function getFacts2() {
  fetch(url).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data)
    fact.innerText = data[2].text;
  });
}


/* Understanding Terms : 
-> AJAX is Asynchronous JS & XML
-> AJAJ is Asynchronous JS & JSON
-> JSON is JavaScript Object Notation
-> json method : returns a second promise that resolves with the result of parsing the response body text as JSON. 
(Input is JSON, output is JS object)
*/

/* Requests & Response : 
-> HTTP Verbs
-> Response Status Code
-> HTTP response headers also contain details about the responses, such as content type, HTTP status code etc.
*/
