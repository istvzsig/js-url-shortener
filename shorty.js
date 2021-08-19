// create elements
var logo = new Text(__root__, "h1");
logo.element.id = 'logo';

var heading = new Text(__root__, "h1");
heading.element.style.fontWeight = 900;

var input = new InputField(__root__);
var generateButton = new Button(__root__);

var copyButton = new Button(__root__);

// attributes and properties
input.element.setAttribute('type', 'url');
input.element.id = "urlEntry";
 
// add text to elements
var LOGOTEXT = "SHORTY";

Element.addText(generateButton.element, "GENERATE");

Element.addText(copyButton.element, "COPY");

designLogo(LOGOTEXT)


checkUserInputAndValidate();




/*debugger;*/

