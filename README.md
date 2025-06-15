# 🌍 Mapa de Risco Ambiental (Exemplo Ilustrativo)

Este é um projeto de demonstração desenvolvido com Vue.js e Leaflet para visualizar pontos de "risco ambiental" no Brasil. As cores dos marcadores no mapa indicam diferentes níveis de risco, baseados em dados hipotéticos, mas **informados por características geográficas e socioambientais conhecidas de cada localidade.**

## ⚠️ Aviso Importante: Dados de Risco Ambiental

Este mapa apresenta dados de risco ambiental **ilustrativos**, elaborados para fins didáticos e demonstrativos da funcionalidade da aplicação. As informações sobre os níveis de risco não são em tempo real e foram desenvolvidas com base em pesquisas e análises gerais, **não refletindo dados oficiais para tomadas de decisão críticas**.

**NÃO confie cegamente nestas informações para propósitos críticos ou de segurança.** Sempre consulte fontes primárias e autoridades competentes para obter dados precisos e confiáveis (ex: Defesas Civis, CEMADEN, IBGE, INPE, órgãos ambientais oficiais).

## ✨ Tecnologias Utilizadas

* **Vue.js 3:** Framework progressivo para construção de interfaces de usuário.
* **Leaflet.js:** Biblioteca JavaScript de código aberto para mapas interativos amigáveis para dispositivos móveis.
* **HTML/CSS:** Estruturação e estilização.
* **JavaScript (ES6+):** Lógica da aplicação.
* **Dados JSON:** Armazenamento local dos dados de risco (simulando uma fonte externa).

## 🚀 Como Executar o Projeto Localmente

Siga estas instruções para configurar e executar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) (com npm) ou [Yarn](https://yarnpkg.com/) instalados.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
### Execução
1.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
    O aplicativo estará disponível em `http://localhost:5173/` (ou outra porta indicada no terminal).
2.  **Compile para produção (opcional):**
    ```bash
    npm run build
    # ou
    yarn build
    ```
    Isso gerará os arquivos estáticos na pasta `dist/` para deployment.
## 📁 Estrutura do Projeto (Simplificada)
