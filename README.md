# Projeto de Bloco: Desenvolvimento Front-end com Frameworks

Siga os passos para clonar e rodar o código:
```bash
# Clonar o repositório
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Entrar na pasta
cd SEU_REPOSITORIO

# Instalar dependências (escolha um)
npm install
# ou
yarn
# ou
pnpm install

# Rodar o projeto
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

## TP3

Atualizações do código:
Todas as páginas utilizam o React Router para mudança de páginas.
É usado o useContext para dar acesso a todas as páginas ao usuário logado e fazer verificações do tipo de usuário e se há um usuário logado.
As páginas de Consultas, Horários, Documentos usam uma API local através do db.json. Ao rodar o projeto ele já roda os servidores locais.
As páginas de Progresso, Anotações usam API's públicas.
O artefato Backlog está presente no arquivo Backlog.txt

## TP4

Solicitações:
Menu de navegação - já existente

Gestures na versão mobile - OK

Listar componentes a serem modificados:
- Login.tsx: swipe up and down para mostrar e sumir o teclado em mobile.
- Cadastro: swipe up and down para mostrar e sumir o teclado em mobile. Swipe left para voltar ao login.
- Home.jsx: swipe left e right para mudar de página com gestos.

Revisar backlog - pendente
- Criação de utils/menuOrder e hooks/useSwipeNavigation para fazer a mudança de telas com o gesto em mobile - OK
- Realização de testes de login e acesso a paginas - OK
- Verificação de segurança de acesso aos chats - OK
- Ajustar tamanho das páginas para telas maiores - Pendente
- Adição de filtros em Consultas, Progresso e Horários - Pendente
- Permissão de novos chats de conversa - Pendente
- Site feito nativamente em mobile - Pendente

## TP5
- Feita primeiras páginas da versão mobile
- Backlog concluído
- Link da versão mobiule: https://github.com/dev-pedr0/projeto-de-bloco-frontend-frameworks-mind-care-mobile
- Uso de camêra e mudança nos tipos de botão da versão android e IOS