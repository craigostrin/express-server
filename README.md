# Project init steps

1. `mkdir express-server`
2. `cd express-server`
3. `git init`
4. copypaste .gitignore file from other repo
5. yarn init (press enter on all to accept default vals)
6. yarn add express
7. yarn (ensure all packages are up-to-date)
8. add to package.json:

```
  "scripts": {
    "start": "node src/index.js"
  }
```

8. add `"type": "module"` to package.json
9. yarn add --dev nodemon
   * Add `"dev": "nodemon src/index.js"` to package.json scripts
