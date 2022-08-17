



// //обєкт тільки справа від =;
// const x = {};
// // при передачі функціїж
// const fn = function (myObject) {
//     console.log(myObject);
// };

// fn({ a: 1, b: 2 });
// // коли повертаємо х функції
// const rtfm = function () {
//     const x = {}
//     return {};
// };

// ключ завжди рядок

const playlist = {
    name: 'My super playlist',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
};
//playlist.rating = 10;
console.log(playlist);
// console.log(playlist.name);
// console.log(playlist.tracks);

const propertyName = 'tracks';

// console.log(playlist.rating);
// console.log(playlist['rating']);

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
    username,
    email,
};

//console.log(signupData);

const inputName = 'color';
const inputVale = 'tomato';

const colorPickerData = {
    [inputName]: inputVale,
};

// console.log(colorPickerData);


// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.c = 100;

// console.log(a);
// console.log(b);

// все обєкти 

// const a = [1, 2, 3];

// a.hello = ':'

// const fn = function () {
//     console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);
