
let box=document.querySelector('#box');
let myinput=document.querySelector('#inputClass');

myinput.addEventListener('keypress', function(event){
    let inputtxt=this.value;
    if (event.keyCode == 32){
        myinput.value="";
        // myinput.placeholder="Add a tag";
        let myspan = document.createElement('span');
        let myi = document.createElement('i');
        myi.classList.add('bi', 'bi-x-lg');
        myspan.classList.add('inputSpan');
        myspan.textContent = inputtxt;

        myspan.appendChild(myi);
        box.appendChild(myspan);

        myi.addEventListener('click', function(){
            myspan.remove();

        })
        
    }
})