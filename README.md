Como rodar o projeto (React + Vite)
🚀 1. Pré-requisitos

Antes de começar, você precisa ter instalado:

Node.js (versão LTS recomendada)
https://nodejs.org/
Git
https://git-scm.com/

Para verificar se está instalado:

node -v
npm -v
git --version
📥 2. Clonar o repositório
git clone https://github.com/SEU_USUARIO/dashboard-otimizado.git

Depois entre na pasta:

cd dashboard-otimizado
📦 3. Instalar dependências

Esse comando baixa tudo que o projeto precisa:

npm install

👉 Se der erro (como você teve antes), use:

npm install --legacy-peer-deps
▶️ 4. Rodar o projeto em modo desenvolvimento
npm run dev

Depois abra no navegador:

http://localhost:5173
🏗️ 5. Gerar versão de produção (opcional)
npm run build

Isso cria a pasta:

dist/
👀 6. Visualizar build localmente (opcional)
npm run preview
🧠 Resumo rápido

Sempre que for rodar o projeto no futuro:

git clone <repo>
cd dashboard-otimizado
npm install
npm run dev
📌 Dica importante

Como seu projeto tem:

React 19
libs como react-window

Se algum dia der conflito, use:

npm install --legacy-peer-deps
