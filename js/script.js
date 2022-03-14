window.addEventListener('DomContentLoaded', (event)=>{
    console.log("Dom Loaded");
})

const button = document.getElementById('load');

function clickMe() {
    button.addEventListener('click', function(){
        console.log('Hi');
    });
}