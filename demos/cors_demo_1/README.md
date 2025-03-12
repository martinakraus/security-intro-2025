# Simple CORS Request Task

From the root directory of this folder you need to start two Servers:
(You need to also do this in two separate terminals):

## Starting first Web Server:

Insert following command inside the terminak: `npm start`

You should see following output:

```
 cors_exercise_1 git:(main) ✗ npm start

> cors@1.0.0 start
> nodemon server.js

[nodemon] 3.1.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Server is running on http://localhost:3000
```

You can open `http://localhost:3000` inside your Web Browser and should see a small login-form.
Inside the `index.html` file you'll find the implementation of `fetch` that is made when you login.
(There is no check of login data at all you can enter what you want to login)

## Starting API Server:

Insert following command inside a second terminak: `npm run start-cors`

You should see following output:

```
➜  cors_exercise_1 git:(main) ✗ npm run start-cors

> cors@1.0.0 start-cors
> nodemon cors-server.js

[nodemon] 3.1.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node cors-server.js`
Server is running on http://localhost:4000
```

This is our API Server where we need to configure our CORS policy.
You'll finde the implementation inside the `cors-server.js`-File.
All CORS-Policies are defined inside the CORS middleware:

```
app.use(cors({}));
```

## Task

If you try to login you'll get an CORS error.
Inside the `index.html` you also see that the `POST` Request is made to our API which has the Origin `http://localhost:4000`

1. Configure CORS in order to make the Login-Request work
2. Change the config in order to just allow requests from the origin `http://localhost:3000`

Check the results inside the Developer Tools in your Web Browser.
By checking the Response Header on the `login`-Request you should see the `access-control-allow-origin`-Header.

## Hint

The cors-middleware takes following object in order to configure cors further:

```javascript
interface CorsOptions {
  /**
   * @default '*''
   */
  origin?: string | undefined;
  /**
   * @default 'GET,HEAD,PUT,PATCH,POST,DELETE'
   */
  methods?: string | string[] | undefined;
  allowedHeaders?: string | string[] | undefined;
  exposedHeaders?: string | string[] | undefined;
  credentials?: boolean | undefined;
  maxAge?: number | undefined;
}
```
