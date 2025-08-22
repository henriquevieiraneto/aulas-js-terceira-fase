function buscarCEP() {
    const cep = document.getElementById('cep').value.trim();
    const resultado = document.getElementById('resultado');
  
    if (!cep || cep.length !== 8 || isNaN(cep)) {
      resultado.innerHTML = "<p style='color:red;'>Digite um CEP válido com 8 números.</p>";
      return;
    }
  
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          resultado.innerHTML = "<p style='color:red;'>CEP não encontrado.</p>";
        } else {
          resultado.innerHTML = `
            <p><strong>Logradouro:</strong> ${data.logradouro}</p>
            <p><strong>Bairro:</strong> ${data.bairro}</p>
            <p><strong>Cidade:</strong> ${data.localidade}</p>
            <p><strong>Estado:</strong> ${data.uf}</p>
          `;
        }
      })
      .catch(error => {
        resultado.innerHTML = "<p style='color:red;'>Erro ao buscar o CEP.</p>";
        console.error(error);
      });
  }
  
  function buscarEndereco() {
    const rua = document.getElementById('rua').value.trim();
    const bairro = document.getElementById('bairro').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const estado = document.getElementById('estado').value.trim();
    const pais = document.getElementById('pais').value.trim();
    const resultadoEndereco = document.getElementById('resultadoEndereco');
  
    if (!rua || !bairro || !cidade || !estado || !pais) {
      resultadoEndereco.innerHTML = "<p style='color:red;'>Preencha todos os campos para buscar o CEP.</p>";
      return;
    }
  
    const enderecoCompleto = `${rua}, ${bairro}, ${cidade}, ${estado}, ${pais}`;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(enderecoCompleto)}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          resultadoEndereco.innerHTML = "<p style='color:red;'>Endereço não encontrado.</p>";
        } else {
          const info = data[0];
          resultadoEndereco.innerHTML = `
            <p><strong>Endereço encontrado:</strong></p>
            <p>${info.display_name}</p>
            <p><strong>Latitude:</strong> ${info.lat}</p>
            <p><strong>Longitude:</strong> ${info.lon}</p>
          `;
        }
      })
      .catch(error => {
        resultadoEndereco.innerHTML = "<p style='color:red;'>Erro ao buscar o endereço.</p>";
        console.error(error);
      });
  }
  