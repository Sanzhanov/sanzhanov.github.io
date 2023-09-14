function hello() {
    alert('You are going to visit the web-site of Alex Sanzhanov.')
  }

  function thanks() {
    document.querySelector('h4').innerHTML = 'Thanks for providing your information!'
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#submit').onclick = thanks
  })

  hello()