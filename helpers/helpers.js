export const validate=(text,element,clss)=>{
    const to_check=document.querySelector(`#${element}`);
    if (!to_check.classList.contains(clss)) {
        let alert = document.createElement('div'),
        alertText=document.createTextNode(`${text}`);
    alert.setAttribute('class','alert-feedback')
    alert.setAttribute('data-set-alert',to_check.id);
    alert.appendChild(alertText);
    to_check.classList.add(clss)
    
    to_check.parentNode.insertBefore(alert,to_check.nextSibling);
    }
   
  


}