# Waje Smart Code Assessment

This is an app for monitoring and tracking tasks.

In total, there are 3 major views

1. The home/welcome view, which is accessible to ALL users and is unprotected.
2. The login view, accessible only to UNAUTHENTICATED users.
3. The tasks view, accessible only to AUTHENTICATED users.

To start the server, simply follow the steps below;

1. cd waje-smart-code-assessment
2. npm install
3. npm run dev

To run the unit tests, simply run either of the code below;

  - npm run test
  - npm run test:ui

To login to the application, use the details below as i've implemented a mock backend to retrieve the jwt token

EMAIL=marcel.chukwuma00@gmail.com
PASSWORD=password

ASSUMPTIONS:

- Login: jsonplaceholder api doesn't return a valid jwt, so i implemented a mock login function which returns a valid jwt token.

BRANCHING STRATEGY

- Branch Name (main): I use the main branch for all deployments and chose vercel as my deployment channel. This was based on the instruction given, i.e. the branch name.