# Projeto de Bloco: Desenvolvimento Front-end com Frameworks

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

Gestures na versão mobile - pendente

Mobile feito react native - pendente

Listar componentes a serem modificados:
- Login.tsx: swipe up and down para mostrar e sumir o teclado em mobile.
- Cadastro: swipe up and down para mostrar e sumir o teclado em mobile. Swipe left para voltar ao login.
-Home.jsx: swipe left e right para mudar de página com gestos.

Revisar backlog - pendente
- Criação de utils/menuOrder e hooks/useSwipeNavigation para fazer a mudança de telas com o gesto em mobile - OK
- Ajustar tamanho das páginas para telas maiores - Pendente
- Adição de filtros em Consultas, Progresso e Horários.
- Permissão de novos chats de conversa.
- Verificação de segurança de acesso aos chats.

Consruir testes com React Testing Library - pendente