// function play(){
//     // hide the home screen
//     const homeScreen = document.getElementById('home');
//     homeScreen.classList.add('hidden')
//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }
function play(){
    hideElementById('home');
    showElementById('play-ground');
}