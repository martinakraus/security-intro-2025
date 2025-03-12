# Cross-Site Request Forgery Protection in Angular

- Open the application `csrf-security` (you can use the same Application from Task 03)
- We need a backend in order to implement Angular CSRF-protection: `cd src/server && npm i`
- To start the Server run `npm run start:server` from the root directory
- In order to get a Token we need to login: username: User1 and password: password1
- Add CSRF-Prevention to you HttpClient: `provideHttpClient(withXsrfConfiguration({}))`
- Investigate your Requests (by Opening the Network Tap on your Browser) and make sure the XSRF-Token is send

### Hints

```typescript
//app.config.ts
providers: [
  provideHttpClient(withXsrfConfiguration({})),
  provideRouter(routes, withComponentInputBinding()),
];
```
