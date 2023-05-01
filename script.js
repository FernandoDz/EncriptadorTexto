function encriptarTexto() {
    let inputText = document.getElementById('inputText').value;
    
    let textoEncriptado = inputText.replace(/e/g, 'enter')
                                      .replace(/i/g, 'imes')
                                      .replace(/a/g, 'ai')
                                      .replace(/o/g, 'ober')
                                      .replace(/u/g, 'ufat');
    
    let outputArticle = document.querySelector('.output-section__noInput');
    outputArticle.innerHTML = `<p>${textoEncriptado}</p>`;
}

  // Función para desencriptar el texto encriptado
  function desencriptarTexto() {
    let inputText = document.getElementById('inputText').value;
    let textoDesencriptado = inputText.replace(/enter/g, 'e')
                                        .replace(/imes/g, 'i')
                                        .replace(/ai/g, 'a')
                                        .replace(/ober/g, 'o')
                                        .replace(/ufat/g, 'u');
    let outputArticle = document.querySelector('.output-section__noInput');
    outputArticle.innerHTML = `<p>${textoDesencriptado}</p>`;
  }

  

  