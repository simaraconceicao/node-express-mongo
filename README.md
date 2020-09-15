<h1 align="center">
  <br>
  <img src="https://media.giphy.com/media/RJwzWBeDjoqqeOHfCo/giphy.gif" alt="Gif Yeah" width="600">
  <br>
    <br>
       Minha primeira aplicação com NodeJs, Express e MongoDb
  <br>
</h1>
<p align="center">Back-end não morde e nem é bicho de sete cabeças!<p>

### Ambiente
Usei o Express que é um framework minimalista e orientado a rotas de Node.js. 
Para instalar, basta usar o comando npm install express --save dentro da pasta de seu projeto.

Usei o Nodemon que é um automatizador que atualiza o código sem precisar, encerrar o servidor, salvar alterações e rodar o código de novo. Para instalar você já sabe, né: npm install nodemon --save

Além disso instalei também os pacotes: 
- express-handlebars (um framework para views, usei o bootstrap junto)
- body-parser (um pacote que nos ajuda a enviar os dados do Body em JavaScript Object o famoso Json)
- mongoose (um ODM, que me ajuda a trabalhar com um banco de dados orientado a documentos que é o caso do MongoDb)
- express-session (nos ajuda a configurar as sessões, cookies e middlewares)
- connect-flash (para envio de mansagens nas sessões)

E por fim, baixei e instalei o MongoDb, aprendi os comandos e conceitos básicos, conectei com minha aplicação e tô achando a coisa mais linda da vida. A próxima fase vai me levar a usar esse serviço na nuvem. 

### O programinha
Criar um sistema de cadastrar categorias e slugs para um blog. Criar esse sistema foi mega importante para entender na prática o conceito de arquitetura MVC, faltou usar o C(haha), mas pelo menos já sei como criar uma arquitetura que me permita ter um sistema com abstrações e desacomplamento.
O que me permite realizar testes unitários sem interferir em outras partes do sistema e manter back-end e front-end independentes.

### Comentários
Comentei  algumas linhas de código mostrando exatamente o que eu estava fazendo.

### Minha percepção
Você precisa ser a melhor amiga do terminal, entender bem o conceito de funcionamento da web e do protocolo http. Além disso, precisa estudar um pouco de arquitetura de software e melhores práticas para ter um sistema escalável, fácil manutenção e boa performance. Já estou de olho nos próximos desafios que serão: construir uma aplicação completa com o back-end em node.js e express, MongoDb na nuvem e o front-end em react. Vamossss! Continue de olho!
