# React + TypeScript + MSAL Authentication

Este projeto é um aplicativo React com TypeScript que implementa autenticação via Azure Active Directory (Azure AD) usando a biblioteca MSAL.

## 🚀 Tecnologias Utilizadas

- **React** com TypeScript
- **MSAL (@azure/msal-react, @azure/msal-browser)** para autenticação com Azure AD
- **React Router** para gerenciamento de rotas

## 📌 Configuração e Variáveis de Ambiente

Antes de rodar o projeto, você precisa configurar as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes configurações:

```env
VITE_CLIENT_ID="SEU_CLIENT_ID"
VITE_TENANT_ID="SEU_TENANT_ID"
VITE_REDIRECT_URI="http://localhost:3000/"  # Ou outro valor configurado no Azure AD
```

Esses valores devem ser obtidos no portal do Azure, dentro da configuração do App Registration.

## 📦 Instalação e Execução

1. Clone o repositório:

   ```sh
   git clone https://github.com/Kc1t/react-msal-template
   cd react-msal-template
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Execute o projeto:

   ```sh
   npm run dev
   ```

## 🔑 Como Funciona a Autenticação

1. O usuário acessa `/login`, onde o componente `Login` inicia o fluxo de autenticação.
2. Após o login, o Azure AD redireciona o usuário para a URL configurada (`VITE_REDIRECT_URI`).
3. O componente `Callback` captura a resposta e finaliza o processo de login.
4. O token de acesso é armazenado e pode ser utilizado para chamadas autenticadas à API.

## 📁 Estrutura do Projeto

```
/src
 ├── msalConfig.ts      # Configuração do MSAL
 ├── App.tsx            # Componente principal
 ├── login.tsx          # Página de login
 ├── callback.tsx       # Processa o retorno do Azure AD
 ├── routes             # Gerenciamento de rotas
 ├── components         # Componentes reutilizáveis
```

## 🛠 Possíveis Melhorias

- Implementação de um contexto global para armazenar o estado do usuário autenticado.
- Proteção de rotas para impedir acesso sem login.
- Integração com uma API protegida por Azure AD.

## 📜 Licença

Este projeto é de uso livre. Modifique e utilize conforme necessário!
