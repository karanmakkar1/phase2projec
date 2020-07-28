
 
     //let button = document.querySelector("button");
     
     //button.onclick = addtomyroutine;
    /*  let textentry = document.querySelector("input");
 let AddtoList = document.querySelector('input + input');
 let body = document.querySelector('body'); */






 function addtomyroutine()
  {
    

    
   let newactivity = document.getElementById("newactivity");
   let txt = document.getElementById('txt');
     let Li = document.createElement("Li");
     Li.setAttribute('id' , txt.value);
    let textNode = document.createTextNode(txt.value);

     Li.appendChild(textNode);
     newactivity.appendChild(Li);
     
    
    }

    
       function deleteLI() {
         let newactivity = document.getElementById("newactivity");
         let txt = document.getElementById('txt');
         let newitem = document.getElementById(txt.value);
         newactivity.removeChild(newitem);
    }