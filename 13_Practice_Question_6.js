/*Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

a. Remove the first company from the array.

b. Remove Uber & Add Ola in its place.

c. Add Amazon at the end.
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
document.write(companies + '<br>');

document.write('<h3>a. Remove the first company from the array.</h3>')
let delval1 = companies.shift();
document.write(delval1 + '<br>');
document.write(companies + '<br>');

document.write('<h3>b. Remove Uber & Add Ola in its place.</h3>')
let uberIndex = companies.indexOf("Uber");
if (uberIndex != -1) {
  companies.splice(uberIndex, 1, "Ola");
}
document.write(companies + '<br>');


document.write('<h3>c. Add Amazon at the end.</h3>')
companies.push("Amazon");
document.write(companies + '<br>');