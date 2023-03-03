function validar() {
 
    let isValid = false;

   
    const input = document.forms['registro']['name'];


    const message = document.getElementById('message');

    input.willValidate = false;

   
    const maximo = 35;


    const pattern = new RegExp('^[A-Z]+$', 'i');


    if(!input.value) {
      isValid = false;
    } else {

      if(input.value.length > maximo) {
        isValid = false;
      } else {
     
        if(!pattern.test(input.value)){ 
      
          isValid = false;
        } else {
      
          isValid = true;
        }
      }
    }

   
    if(!isValid) {
    
      input.style.borderColor = 'salmon'; 
   
      message.hidden = false;
    } else {
   
      input.style.borderColor = 'palegreen'; 
    
      message.hidden = true;
    }

    
    return isValid;
  }

  
 