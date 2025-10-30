# Content-Security-Policy

# Setup and Preparation

This project needs a backend first:

- Start the Book-Dummy-Backend with `npx bookmonkey-api`

### Basic CSP

- Navigate to the application `xss-attack` in your terminal
- Install the dependencies `npm install`
- Start the application with `npm start`
- Make sure the XSS attack takes place so we know we mitigate it with the CSP Header (You have to redo the attack)
- Configure a minimalistic CSP in angular side (index.html)
  with the following value and observe the result
  (see console log):
  `default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self';`
- Update step by step the configuration in order to make the website load properly (Content-Security-Policy header)

`Note: The Angular CLI doesn't recognize changes on the index.html. You must restart "ng serve"
 manually`

### CSP Hashes

- In index.html, declare an arbitrary inline scripting : `<script>document.write('<h1>Inline scripting is <b>not recommended</b>! But if you have not the choice, <b>secure your app with CSP</b></h1>');</script>`
- Update the CSP in order to allow this inline scripting securely (consider CSP3 SHA-256 hash syntax)

Hints : To generate the hash of the script content, use this online tool : [Report-Uri Hash](https://report-uri.com/home/hash) (beware of spaces and carriage returns...)

### Hints

- This policy allows images, scripts, AJAX, and CSS from the same origin, and does not allow any other resources to load (eg inline scripting, inline styles, object, frame, media, etc). It is a good starting point but often too restrictive for many existing sites
- You can declare your CSP as a meta tag with http-equiv directive in index.html :<meta http-equiv="__directive__" content="__value__">
- If your website is online you can check the security level of this CSP on csp-evaluator.withgoogle.com/

[Solution Basic CSP](https://github.com/martinakraus/angular-security-intro-2025/commit/f5eab38c62a8622006207e6594ca27730c727cd4)

[Solution Basic CSP Hashes](https://github.com/martinakraus/angular-security-intro-2025/commit/26a6fede222295f542398b7a62dd330e6279b1b4)
