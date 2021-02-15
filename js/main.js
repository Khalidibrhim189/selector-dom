// memilih salah satu selector 

console.log(document.getElementById('task-title'))
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className)


// Change Style
document.getElementById('task-title').style.background = '#000';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.textAlign = 'center';


document.getElementById('task-title').textContent = 'Daftar Nama';
document.getElementById('task-title').innerHTML = 'Absen List'