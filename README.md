# Login application - 3PLearning assessment

Here is my version of the technical test provided.

It uses Angular 1.5 and SCSS.

##Tools used
- NPM,
- Bower,
- Gulp

##Installation

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
