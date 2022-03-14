window.addEventListener('DomContentLoaded', (event)=>{
    console.log("Dom Loaded");
})

const button = document.getElementById('load');


function clickMe(){
    console.log('Hi');
}

button.addEventListener('click', clickMe)