// EX7.: Write a function to change the h1 text
function change(){
    const h1 = document.querySelector('h1')
    h1.innerText = 'not opening today'

}

// EX8.: Write a function to change the page background color
function changeBackground(){
    const Bg = document.querySelector('body')
     Bg.style.backgroundColor = 'green'
    
     

}

// EX9.: Write a function to change the footer address with a fake one

function changeFooter(){
    let foot = document.querySelector('footer')
    foot.innerText = 'james@gmbh-rel.com'
}

// EX10.: Write a function to add a CSS class to every Amazon link
function addCss(){
    for( let node of document.querySelectorAll('a')){
        node.classList.add('amazon-link')
    }
}


// EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image


function toggleImage(){
    for(let node of document.querySelectorAll('img')){
        
        node.classList.toggle('hidden')
    }
    
}


// EX12: Write a function to color the price of each product in a different one every time it's invoked
function changeColor(){

}