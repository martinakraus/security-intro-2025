# Setup and Preparation

- Open the application `xss-attack`
- Install the dependencies `npm install`
- Inject following malicious JavaScript inside the `Abstract`-Input field: `<iframe src="javascript:alert(`xss`)">`
- Investigate the Angular Code - Do you know how the attack could happen?
- Fix the code :)

### Hint

- The malicious code got injected within the `BookCardComponent`
