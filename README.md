# TypeScript Seed

This is an example seed project generated by Yeoman using the gulp-angular generator by [Swiipe](https://github.com/Swiip/generator-gulp-angular).
This is a handy place to show an Angular 1x application written in TypeScript.

It was created with the following commands:
```
mkdir ts1-seed && cd $_
yo gulp-angular
```

These are the answers to the generator questions:
? Which version of Angular do you want? 1.3.x (latest)
? Which Angular's modules would you want to have? (ngRoute and ngResource will be addressed after) (Press <space> to select)
? Would you need jQuery or perhaps Zepto? jQuery 1.x (branch still supporting IE6, 7 and 8)
? Would you like to use a REST resource library? None, $http is enough!
? Would you like to use a router ? None
? Which UI framework do you want? Bootstrap, the most popular HTML, CSS, and JS framework
? How do you want to implements your Bootstrap components? The official jQuery implementation of Bootstrap
? Which CSS preprocessor do you want? Less, extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.
? Which JS preprocessor do you want? TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.
? Which html template engine would you want? None, I like to code in standard HTML. 

### Developement

$ gulp serve 
launches a server which supports live reload of your 

Karma (Test Runner for JavaScript) for the unit tests
$ gulp test

and Protractor for the end-to-end tests
$ gulp protractor

Build
$ gulp build 
or simply
$ gulp

The file injection process automatically writes all the script and link tags in index.html

Browser Sync as the development server is configured to serve the src folder. Or at least all the files not transformed in src.

For the pre-processed files, Browser Sync is configured to also serve the .tmp/serve folder.

With the file watching and pre-processing feature, files will be automatically processed and put in the .tmp/serve folder. This process should be transparent.

If the same file is in both directories, the one in .tmp/serve will be chosen.

[More info](https://github.com/Swiip/generator-gulp-angular/blob/master/docs/user-guide.md)