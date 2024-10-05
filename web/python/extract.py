import requests
import cssutils

# URL do CSS
url = "https://www.ipm.com.br/wp-content/themes/theme_ipm_sistemas/css/main/main.min.css"

# Função para baixar e formatar o CSS
def download_and_format_css(url, output_file):
    try:
        # Baixar o arquivo CSS
        response = requests.get(url)
        response.raise_for_status()  # Lança um erro para códigos de status HTTP 4xx/5xx

        # Criar um objeto CSS e desativar a validação
        css_parser = cssutils.CSSParser(loglevel='ERROR')
        stylesheet = css_parser.parseString(response.text)

        # Formatando o CSS
        formatted_css = stylesheet.cssText.decode('utf-8')

        # Salvar o CSS formatado em um arquivo
        with open(output_file, 'w') as file:
            file.write(formatted_css)

        print(f"CSS formatado salvo em '{output_file}'")

    except Exception as e:
        print(f"Erro ao baixar ou formatar o CSS: {e}")

# Chamar a função
download_and_format_css(url, 'formatted_main.css')
