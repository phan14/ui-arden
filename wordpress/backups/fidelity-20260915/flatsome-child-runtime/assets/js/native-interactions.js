document.addEventListener('DOMContentLoaded',function(){
  var fabric=document.querySelector('#fabric-grid');
  if(fabric){
    var input=fabric.querySelector('input[type="text"],input[type="search"]');
    var buttons=Array.from(fabric.querySelectorAll('a.button')).slice(0,5);
    var cards=Array.from(fabric.querySelectorAll('.col')).filter(function(el){return el.querySelector('h3')&&el.textContent.indexOf('Thành phần:')!==-1;});
    var category='';
    function apply(){var query=(input&&input.value||'').trim().toLocaleLowerCase('vi');cards.forEach(function(card){var text=card.textContent.toLocaleLowerCase('vi');var categoryMatch=!category||text.indexOf(category)!==-1;card.hidden=!(categoryMatch&&(!query||text.indexOf(query)!==-1));});}
    buttons.forEach(function(button,index){button.setAttribute('role','button');button.setAttribute('aria-pressed',index===0?'true':'false');button.addEventListener('click',function(event){event.preventDefault();var label=button.textContent.toLocaleLowerCase('vi');category=index===0?'':label.replace('vải ','').replace(' & nỉ','').replace(' kaki & jean','');buttons.forEach(function(item){item.setAttribute('aria-pressed',item===button?'true':'false');});apply();});});
    if(input)input.addEventListener('input',apply);
  }
  document.querySelectorAll('.arden-special-element--form form button[type="button"]').forEach(function(button){button.setAttribute('aria-pressed',button.classList.contains('bg-blue-900')?'true':'false');button.addEventListener('click',function(){var active=button.getAttribute('aria-pressed')==='true';button.setAttribute('aria-pressed',active?'false':'true');button.classList.toggle('bg-blue-900',!active);button.classList.toggle('text-white',!active);});});
});
