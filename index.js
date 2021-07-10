  // acquire references to page elements

    var nameSpan = document.querySelector('span')
    var formEl = document.querySelector('form')
    var clear = document.querySelector('#clear')
    var textarea = document.querySelector('textarea')

  // Retrieve name and note content from cookies and localstorage
  // Then apply them to elements on the page
  // YOUR CODE HERE

    document.cookie = "return_visitor=yes";


    var inputNote = localStorage.getItem('notes')
      if (inputNote) {
        textarea.textContent = inputNote
        textarea.value = inputNote
      } else {
        textarea.textContent = ''
      }

    function  inputnameCookie() {
      document.cookie = "yourname=yes";
    };

    formEl.addEventListener('click', inputnameCookie);
    if (document.cookie.split(';').filter((item) => item.includes('yourname=yes')).length) {
      nameSpan.innerHTML = "James"; //can't figure how to make the "name" be personalized vs. storing a name
    }

    formEl.onsubmit = function(e) {

  // prevents form submission
    e.preventDefault()

  // save name element's content to cookies
  // save textarea's content to localstorage
  // YOUR CODE HERE

    inputNote = textarea.value
    localStorage.setItem('notes', inputNote)
    textarea.textContent = inputNote

  // triggers thumbs up animation
    this.elements.save.classList.add('emoji')
    }

    clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE


      localStorage.removeItem('notes');
      textarea.value = "";
      window.localStorage.clear();

  // triggers thumbs up animation
      this.classList.add('emoji')
      }

  // this code allows repeated thumbs up animations
      function endThumbsUp() {
        this.classList.remove('emoji')
      }

      formEl.elements.save.onanimationend = endThumbsUp
      clear.onanimationend = endThumbsUp