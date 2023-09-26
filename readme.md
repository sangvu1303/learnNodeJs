### NodeJs(Express):
>> npm init

>> npm install --save body-parser@1.20.2 dotenv@10.0.0 ejs@3.1.9 express@4.18.2

>> npm install --save-dev @babel/core@7.15.5 @babel/preset-env@7.15.6 @babel/node@7.15.4 nodemon@3.0.1

### MySql(Sequelize):
>> npm install --save-dev sequelize@6.33.0 sequelize-cli@6.6.1

>> cd src 

>> npx sequelize-cli init

>> npm i mysql2

>> example: 
    npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

    npx sequelize-cli db:migrate

    npx sequelize-cli seed:generate --name demo-user

    npx sequelize-cli db:seed:all




