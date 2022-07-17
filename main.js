//1.
let lineThrough = document.querySelectorAll("#crossout-ol li");

for(let i = 0; i < lineThrough.length; i++){
    
    let itemClick = lineThrough[i];

    itemClick.addEventListener('click', function(){
        itemClick.style.textDecoration = "Line-Through";
        console.log(lineThrough[i]);
    })
}

//2.
let fadeOut = document.querySelectorAll("#fadeout-ul li");

for(let i = 0; i < fadeOut.length; i++){
    
    let itemClick = fadeOut[i];

    itemClick.addEventListener('click', function(){
        itemClick.style.opacity = "0.0";
        console.log(fadeOut[i]);
    })
}

//3.
let fadeImage = document.querySelectorAll("#row img");

for(let i = 0; i < fadeImage.length; i++){
    
    let picClick = fadeImage[i];

    picClick.addEventListener('click', function(){
        picClick.style.width = "0px";
        console.log(fadeImage[i]);
    })
}

//4.
let meteorButton = document.querySelector("#burn");

meteorButton.addEventListener('click', function(){

    for(let i = 0; i < lineThrough.length; i++){
    
        let itemClick = lineThrough[i];
            itemClick.style.textDecoration = "Line-Through";
    }

    for(let i = 0; i < fadeOut.length; i++){
    
        let itemClick = fadeOut[i];
            itemClick.style.opacity = "0.0";
    }        

    for(let i = 0; i < fadeImage.length; i++){
    
        let picClick = fadeImage[i];
            picClick.style.width = "0px";
    }   
})


