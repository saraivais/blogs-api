<h1 align="center">BLOG'S API 💻</h1>

![image](https://user-images.githubusercontent.com/96205316/188949516-601b96c9-4ceb-4036-bf19-a5ff73270201.png)

## English 🇬🇧
<details>
  <summary>Click to expand!</summary>
  
### Description 📝
Blog's API is a RESTful API Developed with the MSC (Model-Service-Controller) layered software architecture, using the Sequelize ORM to manage database queries and manipulation. This project was developed during the Back-end module at [Trybe](https://www.betrybe.com/), in August, 2022. The objective of Blog's API was to simulate the system of a blog, managing login, users, post categories and posts.   
The following ERD (Entity-Relationship Diagram) was provided for database construction.
![image](https://user-images.githubusercontent.com/96205316/188949372-e171e27d-adfe-47fb-a28c-45ed4a5f8d0f.png)


### Technologies and Tools 🔧
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm-logo"/>
<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="docker-logo"/>
<img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql-logo">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs-logo"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express-logo"/>
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="sequelize-logo" />
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="jwt-logo" />
<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" alt="postman-logo"/>
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white" alt="swagger-logo"/>

Blog's API was developed through **Docker** to create an isolated development environment. The **npm** packages **dotenv** and **express-rescue** were used to manage environment variables and deal with asynchronous errors, respectively. This project was developed using the **MSC** (Model-Service-Controller) layered architecture, using the ORM **Sequelize** to take care of all database manipulation and querying abstration. Also, the **jsonwebtoken** (JWT) library was used to generate and authenticate tokens, aiming to add a security layer into this API using validation middlewares.   
The **Express.js** framework was used to design and structure this API's endpoints following **REST** Principles. **Nodemon** and **Postman** were used to monitor and test scripts and requests during development. Afterwards, **Swagger** was used to write this API's documentation.

### Installation 📋
1. Create a directory using the **mkdir** command:
```
  mkdir saraivais-projects
```

2. Access the directory using the **cd** command and clone the repository:
```
  cd saraivais-projects
  git clone https://github.com/saraivais/blogs-api
```

3. Access the project directory and install it's dependencies:
```
  cd blogs-api
  npm i
```

4. Lastly, use the **npm start** command and access the **API documentation** via browser, using the following url
```
  http://localhost:3000
```
  
### If you'd like more information, this API is also available on Postman!


</details>

## Português 🇧🇷
<details>
  <summary>Clique para expandir!</summary>
  
### Descrição 📝
Blog's API é uma API RESTful desenvolvida com a arquitetura de software em camadas MSC (Model-Service-Controller), utilizando o Sequelize ORM para gerenciar consultas e manipulação de banco de dados. Este projeto foi desenvolvido durante o módulo Back-end em [Trybe](https://www.betrybe.com/), em Agosto de 2022. O objetivo do Blog's API foi simular o sistema de um blog, gerenciando login, usuários , categorias de postagem e postagens.   
O seguinte ERD (Diagrama Entidade-Relacionamento) foi fornecido para construção do banco de dados.
![image](https://user-images.githubusercontent.com/96205316/188949391-495c5e8d-4f6b-40b0-ab36-45d74228392d.png)


### Tecnologias e Ferramentas 🔧
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm-logo"/>
<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="docker-logo"/>
<img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql-logo">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs-logo"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express-logo"/>
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="sequelize-logo" />
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="jwt-logo" />
<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" alt="postman-logo"/>
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white" alt="swagger-logo"/>

Blog's API foi desenvolvido por meio do **Docker** para criar um ambiente de desenvolvimento isolado. Os pacotes **npm** **dotenv** e **express-rescue** foram usados para gerenciar variáveis de ambiente e lidar com erros assíncronos, respectivamente. Este projeto foi desenvolvido utilizando a arquitetura em camadas **MSC** (Model-Service-Controller), utilizando o ORM **Sequelize** para cuidar de toda a abstração de consultas e manipulação do banco de dados. Além disso, a biblioteca **jsonwebtoken** (JWT) foi utilizada para gerar e autenticar tokens, com o objetivo de adicionar uma camada de segurança a esta API utilizando middlewares de validação.   
O framework **Express.js** foi usado para projetar e estruturar os endpoints dessa API seguindo os Princípios **REST**. O **Nodemon** e o **Postman** fora, usados para monitorar e testar scripts e solicitações durante o desenvolvimento. Posteriormente, **Swagger** foi utilizado para escrever a documentação desta API.

### Instalação 📋
1. Crie um diretório usando o comando **mkdir**:
```
  mkdir saraivais-projetos
```

2. Acesse o diretório usando o comando **cd** e clone o repositório:
```
  cd saraivais-projetos
  git clone https://github.com/saraivais/blogs-api
```

3. Acesse o diretório do projeto e instale suas dependências:
```
  cd blogs-api
  npm i
```

4. Por fim, use o comando **npm start** e acesse a **documentação da API** pelo navegador, usando o seguinte URL
```
  http://localhost:3000
```
  
### Se você quiser mais informações, essa API também está disponível no Postman!

  
</details>
