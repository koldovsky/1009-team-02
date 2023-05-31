const title = document.querySelector('.furniture-collection__sale');
const greetings = [
    'On Monday sale -10%*',
    'On Saturday sale -20%*',
    'On Sunday sale -30%*'
];
function getRandomGreeting(greetings) {
    const randIndx = Math.floor(Math.random() * greetings.length);
    return greetings[randIndx];
}
title.innerText = getRandomGreeting(greetings);
