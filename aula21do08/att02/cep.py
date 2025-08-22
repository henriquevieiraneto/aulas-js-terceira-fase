import requests

def consultar_cep(cep):
    # Remove qualquer caractere não numérico
    cep = ''.join(filter(str.isdigit, cep))

    # Verifica se o CEP tem 8 dígitos
    if len(cep) != 8:
        print("❌ CEP inválido. Deve conter 8 dígitos.")
        return

    url = f"https://viacep.com.br/ws/{cep}/json/"

    try:
        response = requests.get(url)
        response.raise_for_status()

        dados = response.json()

        if "erro" in dados:
            print("❌ CEP não encontrado.")
        else:
            print("✅ Dados do CEP:")
            for chave, valor in dados.items():
                print(f"{chave}: {valor}")

    except requests.exceptions.RequestException as e:
        print(f"❌ Erro na requisição: {e}")

# Consulta do CEP da Rua Guapere, Monte Verde, Florianópolis–SC
consultar_cep("88032-560")
