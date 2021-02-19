# Infinity

## Project Description

## MVP

### Current Features

### Future Feature

## Database Schema and API

## API Routes Plan

URI | HTTP Method | Description
--- | ----------- | -----------

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as express.
- `cd client` and run `yarn install`. This will install client dependencies React App.
- You can test your client app on `http://localhost:3000` by running `yarn start`.
- You can test your API in `http://localhost:5000/` by running `npm start`.

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called `infinity`: create database `infinity`;
- Add a `.env` file to the main folder of this repository containing the MySQL authentication information for MySQL user. For example:

  ```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=infinity
  DB_PASS=YOURPASSWORD
  ```

  - Replace `YOURPASSWORD` with your actual password

Run `npm run migrate` in the main folder of this repository, in a new terminal window. This will create tables of the infinity database with some dummy data.

## Resources

- [MySQL Cheat Sheet](http://www.mysqltutorial.org/mysql-cheat-sheet.aspx)
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Three.js Documentation](https://threejs.org/)

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Kuala Lumpur._
