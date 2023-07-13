## Basic setup for an ExpressJS server

Look in `src/index.js` for annotated code based on [Arol.Dev](https://www.arol.dev/) lectures.

## Project init steps

1. `mkdir express-server`
2. `cd express-server`
3. `git init`
4. copypaste .gitignore file from other repo
6. yarn init (press enter on all to accept default vals)
7. yarn add express
8. yarn (ensure all packages are up-to-date)
9. add to package.json (or see [end of ReadMe](https://github.com/craigostrin/express-server/blob/main/README.md#full-packagejson-entry))

```
  "scripts": {
    "start": "node src/index.js"
  }
```

10. add `"type": "module"` to package.json
11. Forget to add your `src/index.js` file
12. yarn add --dev nodemon
   * Add `"dev": "nodemon src/index.js"` to package.json scripts
13. yarn add morgan
14. Remember that you forgot to add `src/index.js`

### Full package.json entry
For easy copypasting:

```
  "type": "module",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  }
```
