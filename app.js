document.addEventListener('DOMContentLoaded', (e) => {
//1
     let profileImage = document.querySelector('.profile-image').src ="https://placebear.com/400/400";
//2
    let skyImage = document.querySelector('.photography').src="https://placebear.com/325/225";

//3
let titleName = document.getElementById('title_name').textContent = "Dovid Rabinowitz";
//4

let empolymentTitle = document.querySelector('#employment .info-title').textContent = "ninja skills";
//7

let body = document.body.style.color= 'red'

// 8

let highLights = document.getElementsByClassName('highlight');

for (let index = 0; index < highLights.length; index++) {
    const element = highLights[index];
    element.style.color = 'blue';
    
}

// 9

let title = document.querySelector('h1').style.fontFamily = 'monospace';

//10
let sideIcons = document.getElementsByClassName('action-icon');


for (let index = 0; index < sideIcons.length; index++) {
    const element = sideIcons[index];
    element.style.color = 'red';
    
}

//11
const name = document.getElementById('name');
name.placeholder = "identify yourself";
//12
document.getElementById('message').placeholder = "state your business";

//13
name.value = 'your nemesis';

//14
document.getElementById('email').value = 'koalathebear@gmail.com';

//15
const subBtn = document.getElementById('submit');
subBtn.value = 'En garde!';

//16
subBtn.disabled = true;

//17

const bioInfoValue = document.getElementsByClassName('bio-info-value');


for (let index = bioInfoValue.length - 1; index >= 0; index--) {
    const element = bioInfoValue[index];
    element.remove();

    // or i can do the loop in the reverse with 
    // element.textContent = '';
    
}



});