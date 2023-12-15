
  function check(){
    let f=document.getElementById('full_name');
    const name=f.value;
    let e=document.getElementById('email');
    let email=e.value;
    const namePattern = /^[A-Za-z\s]+$/; // Allows only letters and spaces
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Basic email pattern

    if(!namePattern.test(name)){
      alert ('please enter a valid name (letters and spaces)');
      return false;
    }
    else if(!emailPattern.test(email)){
      alert('Please enter a valid email address.');
      return false;
    }
    
    else{
      return alert('thank you for contacting we will response you shortly');
    }
      
  }
 