function encriptarTexto() {
    const inputText = document.getElementById('inputText').value;
    
    const textoEncriptado = inputText.replace(/e/g, 'enter')
                                      .replace(/i/g, 'imes')
                                      .replace(/a/g, 'ai')
                                      .replace(/o/g, 'ober')
                                      .replace(/u/g, 'ufat');
    
    const outputArticle = document.querySelector('.output-section__noInput');
    outputArticle.innerHTML = `<p>${textoEncriptado}</p>`;
}

  // Función para desencriptar el texto encriptado
  function desencriptarTexto() {
    const inputText = document.getElementById('inputText').value;
    const textoDesencriptado = inputText.replace(/enter/g, 'e')
                                        .replace(/imes/g, 'i')
                                        .replace(/ai/g, 'a')
                                        .replace(/ober/g, 'o')
                                        .replace(/ufat/g, 'u');
    const outputArticle = document.querySelector('.output-section__noInput');
    outputArticle.innerHTML = `<p>${textoDesencriptado}</p>`;
  }
  
  // Función para copiar el texto encriptado o desencriptado al portapapeles
  function copiarTexto() {
    const outputSection = document.querySelector('.output-section__output');
    const textoCopiado = outputSection.innerHTML;
  
    // Creamos un elemento temporal de tipo textarea para copiar el texto
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = textoCopiado;
    document.body.appendChild(tempTextarea);
  
    // Seleccionamos el contenido del textarea y copiamos al portapapeles
    tempTextarea.select();
    document.execCommand('copy');
  
    // Removemos el elemento temporal del DOM
    document.body.removeChild(tempTextarea);
  
    // Creamos un alert para indicar que el texto ha sido copiado
    alert('El texto ha sido copiado al portapapeles.');
  }
  

  