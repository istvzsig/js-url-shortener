// DOM Element
class Element {
      static  addText(target, txt='') {          
            return target.innerText = txt;
      }
      create(properties) {

            function define() {
                  if(!properties) { return false }; // cut it short

                  let el = properties.type ? 
                        document.createElement(properties.type): null;
                  
                  if(el && properties.target) {
                        properties.className ? 
                              (el.className = properties.className)
                        : false;

                        properties.id ? 
                              (el.id = properties.id)
                        : false;

                        properties.target.appendChild(el);

                  }

                  return el;
                                   
            }
            return define();            
      }

}
// text :: Element
class Text extends Element {
      constructor(target, type="p") {
            super();
            this.properties = new Properties(type, "ui_elem ui_text");
            this.properties.target = target;       
            this.element = this.create(this.properties);
      }
}

// button :: Element
class Button extends Element {
      constructor(target) {
            super();            
            this.properties = new Properties("button", "ui_elem ui_button");
            this.properties.target = target; 
            this.element = this.create(this.properties);
      }
      static getState(state, element) {
            return element.getAttribute(state)
      }
      static setState(state, element) {
            
            if(!state && !element) { return };            
            state = element.setAttribute('state', state);

            if(parseInt(element.getAttribute('state'))) {
                  element.style.opacity = 1;
            }

            else {
                element.style.opacity = .1;  
            }
      }     
}


// input field :: Element
class InputField extends Element {
      constructor(target) {
            super();
            this.properties = new Properties("input");
            this.properties.target = target; 
            this.properties.value = "";    
            this.element = this.create(this.properties);  
      }
}

// input field :: Element
class Link extends Element {
      constructor(target) {
            super();
            this.properties = new Properties("link");
            this.properties.target = target;   
            this.element = this.create(this.properties);  
      }
}

