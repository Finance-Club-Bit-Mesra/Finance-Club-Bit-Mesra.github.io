// <!-- validator css -->
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
      .forEach(function (form) {
          form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
              }
              form.classList.add('was-validated')
          }, false)
      })
})()

// <!-- pop-up function -->

function openForm() {
  document.getElementById("joinusForm").style.display = "block";
  document.body.style.overflow="hidden";
}

function closeForm() {
  document.getElementById("joinusForm").style.display = "none";
  document.body.style.overflow="";
  document.body.style.filter="";
}

// <!-- data messsenger  -->

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzb5bd6KYCvlMxoF68k3o1J9MH-_MIjwMKhyw5I3lebZ-8gmu7SSJsuUJX7hwJktLI5/exec'
          const form = document.forms['google-sheet']
        
          form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => redirect())
              .catch(error => console.error('Error!', error.message))
          })

//  pop-up to index redirector

function redirect() {
  alert("Thanks for applying ..! We Will Contact You Soon...");
 window.location.href = "index.html";
}
