# Content-Security-Policy against Clickjacking

### Setup

- Open the vulnerable application `demo-app` and install the denpendencies: `npm install`
- Open the attacker server `attacker-server` and install the denpendencies: `npm install`
- You start both servers with `npm start`:
- Visit `http://localhost:3000` to check if the Vulnerable Movie Center is up and running.
- Visit `http://localhost:4000` to check if attacker server displays the demo app correctly.
- By clicking on the Text area you should get an alert - the clickjacking attack was successful
- Open the `demo-app/server.js` and add the `frame-ancestor`-Directive to the `app.get('/', ..)`-Request Handler
- The clickjacking attack should not be possible anymore

### Hints

```javascript
app.get('/', function (req, res) {
  ...
   res.setHeader('Content-Security-Policy', "frame-ancestors 'none'");
  res.send(view);
});
```

[Solution](https://github.com/martinakraus/angular-security-intro-2025/commit/f7bc183b26696253d397ea860283193cc43255a1)
