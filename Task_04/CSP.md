# Content-Security-Policy

### Basic CSP

- Open the application `xss-attack` (you can use the same Application from Task 03)
- Make sure the XSS attack takes place so we know we mitigate it with the CSP Header
- Configure a minimalistic CSP in angular side (index.html)
  with the following value and observe the result
  (see console log):
  `default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self';`
- Update step by step the configuration in order to make the website load properly (Content-Security-Policy-Report-Only header)

`Note: The Angular CLI doesn't recognize changes on the index.html. You must restart "ng serve"
 manually`

### Hints

- This policy allows images, scripts, AJAX, and CSS from the same origin, and does not allow any other resources to load (eg inline scripting, inline styles, object, frame, media, etc). It is a good starting point but often too restrictive for many existing sites
- You can declare your CSP as a meta tag with http-equiv directive in index.html :<meta http-equiv="__directive__" content="__value__">
- If your website is online you can check the security level of this CSP on csp-evaluator.withgoogle.com/
