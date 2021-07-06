// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')
var notesarea = document.querySelector('notes-area')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE

localStorage.setItem("NAMEHEADER", "Jim")
//document.getElementById("nameid").innerHTML = nameHeader;
document.getElementById("nameid").innerHTML = localStorage.getItem("NAMEHEADER");

localStorage.setItem("TEXT-AREA", "Please add something here")
document.getElementById("notes-area").innerHTML = localStorage.getItem("TEXT-AREA");

formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  // YOUR CODE HERE





  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE

  localStorage.setItem("NAMEHEADER", "Your Name");
  localStorage.setItem("TEXT-AREA", "")
  document.getElementById("nameid").innerHTML = localStorage.getItem("NAMEHEADER");
  document.getElementById("notes-area").innerHTML = localStorage.getItem("TEXT-AREA");



  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp