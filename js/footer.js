document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    var email = document.getElementById('user-email').value;
    
    document.getElementById('modal').style.display = 'block';
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {

    document.getElementById('modal').style.display = 'none';
  });
