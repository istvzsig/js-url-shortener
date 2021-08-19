// url validator
function urlValidator(string, url) {
      try {
            url = new URL(string);
      } catch (_) {
            return false;  
      }

      return url.protocol === "http:" || url.protocol === "https:";
}

// get value from input ** every 500 millisecionds :: meth - looping
// check if user paste or start typing

function designLogo(TEXT, arr=[]) {
      
      for(var letter in TEXT) {
            arr.push(TEXT[letter])
      }
      all = []
      for(var idx in arr) {
            try {
                  el = new Text(logo.element, "span");              
                  all.push(el.element)     
                  Element.addText(el.element, arr[idx]);
            }

            catch(err) {return}
      }

      all.reverse().forEach((p, idx) => {
            var opacity = ((((parseInt(idx+1)) / 0.6).toFixed(1))/12).toFixed(2);
            p.style.opacity = opacity;
      });


}

function checkUserInputAndValidate(func, TEXT='') {     
      txt = new Text(null, 'p');
      input.element.before(txt.element);
      txt = txt.element;
      TEXT = 'Please enter an url';
      txt.id = 'alertText'
      Element.addText(txt, TEXT)
      Button.setState(0, generateButton.element);
      Button.setState(0, copyButton.element);
          
      setInterval(function(isValid=false) {           
           
            var value = urlEntry.value;            
            if(value) {
                  isValid = urlValidator(value);
                  if(isValid && value) {
                        Button.setState(1, generateButton.element);
                        TEXT = value.slice(0,30) + '... is valid.';
                        Element.addText(txt, TEXT);
                        input.element.style.background = 'green';
                        input.element.style.color = 'white';
                        txt.style.color = 'green';
                        txt.style.fontWeight = 'bold';
                  }
                  else if(!isValid) {

                        TEXT = 'PLEASE ENTER A VALID URL';
                        Element.addText(txt, TEXT);
                        input.element.style.background = 'red';
                        

                        input.element.style.color = 'white';
                        input.element.style.fontStyle = 'italic'
                        txt.style.color = 'red';
                        txt.style.fontWeight = 'bold';
                  }
                            
            }
            else if(!value.length) {
                  input.element.style.background = 'white';
                  input.element.style.color = 'black';

                  TEXT = 'Please enter an url';
                  Element.addText(txt, TEXT);
                  txt.style.color = 'black'; 
                  txt.style.fontWeight = 'bold';
            }
            else  {
                  input.element.style.background = 'blue';
            }

            var generateButtonState = Button.getState('state', generateButton.element);
            console.log(generateButtonState)
            
      }, 500);

}


// export { urlValidator, checkUserInputAndValidate};0