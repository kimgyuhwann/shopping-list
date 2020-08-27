const btn=document.querySelector('.btn');
const input=document.querySelector('.input');
const items=document.querySelector('.items');
const itemscontainer=document.querySelector('.items_container');
const item_list=document.querySelector('.item_list');

function onAdd(){
    const text=input.value;

    if(text===''){
        input.focus();
        return;
    }
    
    input.value='';
    input.focus();
    const item=createItem(text);
    items.appendChild(item);

};
function createItem(text){
    const itemscontainer=document.createElement('li');
    itemscontainer.setAttribute('class','items_container');
   
    const itemlist=document.createElement('div');
    itemlist.setAttribute('class','item_list');
   
    const textt=document.createElement('span');
    textt.setAttribute('class','textt');
    textt.innerText= text;
   
    const deleteBtn=document.createElement('button');
    deleteBtn.setAttribute('class','deleteBtn');
    deleteBtn.innerHTML='<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click',()=>{
        items.removeChild(itemscontainer);
    });

    const line=document.createElement('div');
    line.setAttribute('class','line');

    itemlist.appendChild(textt);
    itemlist.appendChild(deleteBtn);

    itemscontainer.appendChild(itemlist);
    itemscontainer.appendChild(line);

    return itemscontainer;
};



btn.addEventListener('click',()=>{
    onAdd();
});

input.addEventListener('keypress',(event)=>{
    if(event.key==='Enter'){
       onAdd();
    }
});

