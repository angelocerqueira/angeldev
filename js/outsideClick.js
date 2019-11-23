export default function outsideClick(element, events, callback){
    const html = document.documentElement;
    const outside = 'data-outside';
  
    if(!element.hasAttribute(outside)){
      events.array.forEach(userEvent => {
      html.addEventListener(userEvent, handleOutsideclick);
        
      });
      element.setAttibute(outside, '');} 
    
    function handleOutsideclick(){
      if(!element.contains(event.target)){
        events.array.forEach(userEvent => {
          html.removeEventListener(userEvent, handleOutsideclick);
          });
        element.removeAttribute(outside);} 
        callback();
    }     
}

