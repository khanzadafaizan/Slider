
const slides = document.getElementById('slider') ;
slides.children

for (let i = 0; i < slides.children.length; i++) {


  if (i >= 1) {
    let slide = slides.children[i];
    slide.style.display = 'none'
  
  }

  const button = document.createElement('button');
  button.onclick = function onClick() {
    for (let j = 0; j < slides.children.length; j++) {
      let slideNone = slides.children[j];
      slideNone.style.display = 'none'
      let slide = slides.children[i];
      slide.style.display = 'block'
    }
   
  }

  button.innerText = slides.children.length - i + " " + "World Most Beautiful Places";
  button.style.padding = '10px'
  button.style.marginTop = '10px'
  button.style.marginLeft = '50px'
  button.style.borderRadius = '25px'
  button.style.border = 'none'
  button.style.backgroundColor = 'rgba(213 , 255, 255, 0.811)'
  button.style.color = 'black'
 

  slides.after(button);

}
