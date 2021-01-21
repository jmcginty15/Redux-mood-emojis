const moods = [
    { emoji: 'ʘ‿ʘ', name: 'Happy', color: 'green' },
    { emoji: '⊙︿⊙', name: 'Sad', color: 'blue' },
    { emoji: 'ಠ▃ಠ', name: 'Angry', color: 'red' },
    { emoji: '◔_◔', name: 'Confused', color: 'purple' },
    { emoji: '(￣^￣)', name: 'Proud', color: 'yellow' }
];

const reducer = (state, action) => {
    if (action.type === 'CHANGE') return { ...state, mood: action.payload };
    else return { ...state };
}

const store = Redux.createStore(reducer);
store.subscribe(function () {
    const mood = store.getState().mood;
    header.innerText = mood.emoji;
    body.style.backgroundColor = mood.color;
    moodDisplay.innerText = mood.name;
});

const body = document.querySelector('#body');
const header = document.querySelector('#header');
const moodDisplay = document.querySelector('#mood');
const happy = document.querySelector('#happy');
const sad = document.querySelector('#sad');
const angry = document.querySelector('#angry');
const confused = document.querySelector('#confused');
const proud = document.querySelector('#proud');
const random = document.querySelector('#random');
body.style.textAlign = 'center';
body.style.backgroundColor = 'green';

happy.addEventListener('click', function () {
    store.dispatch({ type: 'CHANGE', payload: moods[0] });
});

sad.addEventListener('click', function () {
    store.dispatch({ type: 'CHANGE', payload: moods[1] });
});

angry.addEventListener('click', function () {
    store.dispatch({ type: 'CHANGE', payload: moods[2] });
});

confused.addEventListener('click', function () {
    store.dispatch({ type: 'CHANGE', payload: moods[3] });
});

proud.addEventListener('click', function () {
    store.dispatch({ type: 'CHANGE', payload: moods[4] });
});

random.addEventListener('click', function () {
    store.dispatch({ type: 'CHANGE', payload: moods[Math.floor(Math.random() * moods.length)] });
});