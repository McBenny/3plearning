# Login application - 3PLearning assessment

Here is my version of the technical test provided.

It uses Angular 1.5 and SCSS.

## Tools used
- NPM,
- Bower,
- Gulp

## Installation

To get you started you can simply clone the `3plearning` repository and install the dependencies:

### Prerequisites

You need git to clone the `3plearning` repository.

It also uses a number of Node.js tools to initialize `3plearning`. You must have Node.js
and its package manager (npm) installed.

### Clone `3plearning`

Clone the `3plearning` repository using git:

```
git clone https://github.com/McBenny/3plearning.git
cd 3plearning
```

### Install Dependencies

The project is preconfigured with `npm` to automatically run `bower` so we can simply do:

```
npm install
```

### Run the server

```
npm start
```

### Generate the files in the public folder

```
gulp init
gulp prod
```

Please note that "gulp prod" generates the scripts and styles files (minified), it doesn't "watch" for any change. To turn to development mode and set the watch on changes, use "gulp". In this case, also change the calls to the scripts and styles files in index.html so not to call their minified versions.

Now browse to the app at [`localhost:8000/`][local-app-url].

## What it does...

1) From the home page, you can access to the login page and the account creation page. The "protected page" is only accessible if you are authenticated. If you try to reach the protected page without being authenticated, you are redirected to the login page.
2) The account creation page lets you create an account with your name, email address (used as the login) and password. if your email address is already registered, it will be spotted. You can register several users. Once your account is created, you are redirected to the login page.
3) The login page lets you enter your credentials. If they are correct, you are redirected to the protected page. otherwise a message is displayed.
4) A "log out" button on the protected page enables you to log out.

The accounts created are stored in the localStorage of the browser. An authentication token is also stored to grant access to the protected page. Only one user can access the protected page at a time.

## What it doesn't do

- The accounts being stored on the machine, there is no link with any server.
- The passwords are not encrypted in any way.
- There is no specific test on the validity of the data apart from what the browser can do (type=email, required).
- I did not implement any kind of design apart from a simple presentation and the minimum requirements for understanding the interface (titles or messages) but the classes respect the BEM methodology and the styles are defined in SASS.