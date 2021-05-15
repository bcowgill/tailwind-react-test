# tailwind-react-test
A test repository for using Tailwind CSS tools with Create React App

# Creation log

## 1. Created github repo using node template for .gitignore file.

created .nvmrc file use node version v15.12.0 tailwind wants 12.13+
created env.local file to nvm use

## 2. Following procedure from [Tailwind CSS site](https://tailwindcss.com/docs/guides/create-react-app)

```
npx create-react-app tailwind-react-test
```
have to remove .nvmrc and env.local files first then git checkout them after.
.gitignore and README files are modified by the installation.

Files installed by create-react-app were:

```
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   .gitignore
        modified:   README.md
        new file:   package.json
        new file:   public/favicon.ico
        new file:   public/index.html
        new file:   public/logo192.png
        new file:   public/logo512.png
        new file:   public/manifest.json
        new file:   public/robots.txt
        new file:   src/App.css
        new file:   src/App.js
        new file:   src/App.test.js
        new file:   src/index.css
        new file:   src/index.js
        new file:   src/logo.svg
        new file:   src/reportWebVitals.js
        new file:   src/setupTests.js
        new file:   yarn.lock
```

## 3. Says to install Tailwind next:

```
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

## 4. and then CRACO to change the build scripts for PostCSS

```
npm install @craco/craco
```

Then create craco.config.js and modify package.json as suggested in the docs.

If you want to use other PostCSS plugins with tailwind see the [Tailwind PostCSS documentation](https://tailwindcss.com/docs/using-with-preprocessors)

## 5. Then create your Tailwind configuration

```
npx tailwindcss init
```

See the [Tailwind CSS configuration documentation](https://tailwindcss.com/docs/configuration) and [Production optimisation](https://tailwindcss.com/docs/optimizing-for-production)

Configured tailwind.config.js, index.css and index.js

Read our documentation on [adding base styles](https://tailwindcss.com/docs/adding-base-styles), [extracting components](https://tailwindcss.com/docs/extracting-components), and [adding new utilities](https://tailwindcss.com/docs/adding-new-utilities) for best practices on extending Tailwind with your own custom CSS.

## 5. Finished, run the thing!

```
npm install serve
npm run test
npm run start
npm run build
serve -s build
```

There is a warning about vulnerabilities:

```
To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force
```

## 6. Next, learn how to use Tailwind

[Learn Tailwind](https://tailwindcss.com/docs/utility-first)


# Getting Started with Create React App (section created by create-react-app)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
