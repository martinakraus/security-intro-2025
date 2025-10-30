# Setup and Preparation

This project needs a backend first:
- Start the Book-Dummy-Backend with `npx bookmonkey-api`

### Executing th attack
- Open the application `xss-attack`
- Install the dependencies `npm install`
- Inject following malicious JavaScript inside the `Abstract`-Input field: `<iframe src="javascript:alert('xss')">`
- Investigate the Angular Code - Do you know how the attack could happen?
- Fix the code :)


### Hint

- The malicious code got injected within the `BookCardComponent`

[Solution](https://github.com/martinakraus/security-intro-2025/commit/9f22a3ac1f0467f69e395e010878e88368f1f753)
