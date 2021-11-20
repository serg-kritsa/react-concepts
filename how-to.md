## run react demo app
npx create-react-app <app-name>
cd <app-name>
npm start

## install google font
- [https://fonts.google.com/]
- open font
- +'Select this style'
- find link like `<link href="https://fonts.googleapis.com/css2?family="`<font-name>`"&display=swap" rel="stylesheet">` and copy it
- insert in the head tag of `public/index.html`
- apply font in css property like `font-family: '`<font-name>`';`

## deploy app on github.io
- push code to remote repository
- `npm i gh-pages`
- add `"homepage": "https://`<git-user-name>`.github.io/`<git-repo-name>`",` property to `package.json"` file  
- add `"predeploy": "npm build",` property to ` script` section of `package.json` file  
- add `"deploy": "gh-pages -d build",` property to ` script` section of `package.json` file  
- `npm run deploy`

## use lifecycle method right
- mounting
  constructor() > render() > updating DOM & refs by React > componentDidMount()
- updating
  received new props, forceUpdate()
    render()
  received new state
    render() > updating DOM & refs by React
- unmounting
  componentWillUnmount()

  
## setup Firebase
[https://console.firebase.google.com]

### config for web app
[https://console.firebase.google.com/project/fir-app-99824/settings/general]
+'</>' 
'Add Firebase to your web app'
'(1) Register app'
'App nickname'=demo_app > +'Register app'
r'npm' > paste copied config in project
npm i firebase

## Authentication 
- 'Authentication'
|Sign-in method| 
Enable Google
Enable Email/Password

[https://firebase.google.com/docs/auth/web/password-auth?hl=en&authuser=0#web-version-9](link to signup/in docs)

## Redux
link to docs
[https://redux.js.org/api/createstore]
[https://redux.js.org/api/applymiddleware]

## React routing
<Route path={} component={}> tag from `react-router-dom` always passes to component as props: match, location & history
