let create = document.querySelector("#create");
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");
let title = document.querySelector("#title");
let textArea = document.querySelector("#textArea");
let notes = document.querySelector("#the-note");
let counter = 0;

create.onclick = function (){
    document.querySelector('#window-create').style.display = 'block';
    title.value = "";
    textArea.value = "";
    remove.onclick = function (){
        document.querySelector("#window-create").style.display = 'none';
    }
    add.innerHTML = 'ADD'

    

}

add.onclick = function (){
    window.localStorage.setItem(`titleNote${counter}`,title.value)
    window.localStorage.setItem(`textNote${counter}`,textArea.value)
    
    let divNote = document.createElement("div");
    divNote.id = 'content';
    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    notes.appendChild(divNote)
    divNote.appendChild(h1)
    divNote.appendChild(p)
    
    if (window.localStorage.getItem(`titleNote${counter}`) === ""){
        h1.innerHTML = `Unnamed Note`
    }else{
        window.localStorage.setItem(`titleNote${counter}`,title.value);
        h1.innerHTML = title.value;
    }

    if(window.localStorage.getItem(`textNote${counter}`) === ""){
        p.innerHTML = `There isn't note`;
    }else{
        window.localStorage.setItem(`textNote${counter}`,textArea.value);
        p.innerHTML = textArea.value;
    }  
    document.querySelector("#window-create").style.display = 'none'; 
    counter++;
    
    let note = document.querySelectorAll("#content")

    for(let k =0;k<note.length;k++){
        note[k].onclick = function (){
            document.querySelector('#window-create').style.display = 'block';
            title.value = window.localStorage.getItem(`titleNote${k}`)
            textArea.value = window.localStorage.getItem(`textNote${k}`)
            add.innerHTML = 'Edit'
            add.onclick = function (){
                window.localStorage.setItem(`titleNote${k}`,title.value)
                window.localStorage.setItem(`textNote${k}`,textArea.value)
                document.querySelector('#window-create').style.display = 'none';  
            }
            remove.onclick = function (){
                document.querySelector('#window-create').style.display = 'none';
                note[k].remove();
                window.localStorage.removeItem(`titleNote${k}`);
                window.localStorage.removeItem(`textNote${k}`);
            }
        }
    }
}

document.body.onload = function(){
    if (window.localStorage.length >= 1){
        for (let c=0 ;c<window.localStorage.length/2;c++ ){
            let divNote = document.createElement("div");
            divNote.id = 'content';
            let h1 = document.createElement('h1')
            let p = document.createElement('p')
            notes.appendChild(divNote)
            divNote.appendChild(h1)
            divNote.appendChild(p)
            
            if (window.localStorage.getItem(`titleNote${c}`) === ""){
                h1.innerHTML = `Unnamed Note`
            }else{
                h1.innerHTML = window.localStorage.getItem(`titleNote${c}`);
            }
            if(window.localStorage.getItem(`textNote${c}`) === ""){
                p.innerHTML = `There isn't note`;
            }else{
                p.innerHTML = window.localStorage.getItem(`textNote${c}`);
            }
        }
        counter = Math.floor(window.localStorage.length)/2;
    }

    let note = document.querySelectorAll("#content")

    for(let k =0;k<note.length;k++){
        note[k].onclick = function (){
            document.querySelector('#window-create').style.display = 'block';
            title.value = window.localStorage.getItem(`titleNote${k}`)
            textArea.value = window.localStorage.getItem(`textNote${k}`)
            add.innerHTML = 'Edit'
            add.onclick = function (){
                window.localStorage.setItem(`titleNote${k}`,title.value)
                window.localStorage.setItem(`textNote${k}`,textArea.value)            
                document.querySelector('#window-create').style.display = 'none';  
            }
            remove.onclick = function (){
                document.querySelector('#window-create').style.display = 'none';
                window.localStorage.removeItem(`titleNote${k}`)
                window.localStorage.removeItem(`textNote${k}`);
                note[k].remove();

            }
        }
    }
}

// let searchDiv = document.querySelector("#filterText");
// let note = document.querySelectorAll("#content")
// searchDiv.onchange = function (){
//     console.log(searchDiv.value)
//     for(let k=0;k<note.length;k++){
//         if (note[k].h1.innerHTML != searchDiv.value){
//             note[k].style.display = 'none'
//         }
//     }
// }
