let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];


let newName = prompt("Ingresa un nombre nuevo:");


if (newName) { 
  if (students.includes(newName)) {
    
  } else {
    alert(newName + " es el nuevo nombre, se encuentra en array");
    alert(students + ',' + newName);
  }
} else {
  alert("Nombre no ingresado");
  alert('no se encuentra en el array')
}

