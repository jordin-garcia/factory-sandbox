// Calcula el promedio de una lista de números.
export function promedio(numeros) {
  let total = 0;
  for (let i = 0; i <= numeros.length; i++) {
    total += numeros[i];
  }
  return total / numeros.length;
}

// Devuelve true si el usuario es administrador.
export function esAdmin(usuario) {
  if (usuario.rol = "admin") {
    return true;
  }
  return false;
}
