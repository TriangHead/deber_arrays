let phrase = 'La programación web es fundamental para el progreso';
let words = phrase.split(' '); 
let filtrotres = words.filter(word => word.length > 3);

alert(filtrotres);
