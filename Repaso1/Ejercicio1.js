function traducir(idioma1, idioma2, palabra) {
    // Buscar la palabra en idioma1
    const index = idioma1.indexOf(palabra);
    
    // Si la palabra está en idioma1, devolver la traducción en idioma2
    if (index !== -1) {
      return idioma2[index];
    } else {
      // Si no se encuentra la palabra, devolver "No encontrado"
      return "No encontrado";
    }
  }
  
  // Ejemplo de uso
  const idioma1 = ["hola", "mundo", "javascript"];
  const idioma2 = ["hello", "world", "javascript"];
  const palabra = "elefante";
  console.log(traducir(idioma1, idioma2, palabra));  // Salida: "world"
