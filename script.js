//no js? No way, maybe I should write an malware auto installer.
let starContainer = document.querySelector(".stars");

for (let i = 0; i < 100; i++) {
  starContainer.innerHTML += `<div class="star"></div>`;
}
// update! theres javascipt now! So i can obfusicate everything and then install the malware!

//defentiley not sus things
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => console.log(data.ip));
//just saying it only pulls your public ip, silly dev team


//makes a variable called data.ip with the clients ip, then prints it in the console.
//this looks very questionable mr dev team
