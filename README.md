# React-Redux-MongoDb Auth Boilerplate

This project is a Dashboard ready-to-use with React and mongoDB noSql database.

This project need two more things to do:

  - Theming with style-components for better css.
  - Organize assets.
  - Create script for launch client and server at the same time
  
  
#### For install project:

1. Copy project directory in folder of you'r choice
```
git clone https://github.com/jerembardon/react-redux-dashboard-boilerplate.git
```


2. Got to client directory and run
```
npm install --save
```


3. Do the same with the backend folder


4. In ./backend/ create .env file and fill the file like that (I'm using Mlab db storage)
```
PORT=3090
DB="mongodb://<username>:<password>@ds235022.mlab.com:35022/<DatabaseName>"
SECRET_KEY="qkdKDN8js9osUIsj87nzhjn65yszjs"
```


5. In ./backend/ create config.js file and fill him like that (I'm using Mlab)
```
module.exports = {
  secret: "dsnsd3Dslks98P3JDiejudçzkk89uiUtreb"
};
```

#### Launch project

1. In ./backend/
```
npm run server
```

2. In ./client/
```
npm run start
```


Done ! 
Don't forget to fill you'r db with an admin user.
