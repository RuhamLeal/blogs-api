# blogs-api

An API that manages a Blog website. You can add, update, find and delete specific blog posts, categories of posts and manage your user.    

Project made in [Trybe](https://www.betrybe.com/) course and uses node.js, express, mysql, JWT, sequelize, Docker, and has the Model, Service and Controller architecture.


# Table of contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Contact](#contact)

## Getting Started

This API was developed by me and it works with a mysql database, many endpoints have validations and are working with route management, I user Json Web Token to manage authorizations and tokens, it works locally so you need to download the repository      


SOME ENDPOINTS:    
  

Project have more endpoints, install repo and see more !

### Prerequisites

node 16 version         
MySQL 5.7 version or 8.0 version        
Docker(v20.10) and docker-compose(v2.5.0) (If you dont have MySQL installed)        

### Installation  

Clone the repo:     
```
git clone https://github.com/RuhamLeal/blogs-api.git    
```

Go to project folder:     
```
cd blogs-api   
```

Install dependencies:     
```
npm install    
```

Populate database with scripts:    
```
npx sequelize db:create && npx sequelize db:migrate  
```
```
npx sequelize db:seed:all 
```
Run server:
```
npm start    
```           
               
                  
                    
                     
### If you dont have node 16 version or MySQL installed, you can run with docker-compose:   
```
docker-compose up -d --build
```
 
Await download the images and then:    
```
docker exec -it blogs_api bash
```

Inside the container, install dependecies and run scripts:       
```
npm install
```
```
npx sequelize db:create && npx sequelize db:migrate  
```
```
npx sequelize db:seed:all 
```         

And run server:       
```
npm start
```


### Contact

Ruham Leal    
Email: ruhamxlpro@hotmail.com    
Linkedin: https://www.linkedin.com/in/ruham-leal-dos-santos-sutil-38a837243/
