modern react with redux. lesson 308
console.developer.google.com
new project
OAUTH2.0 CLIENT ID

add script tag
gapi.load('client:auth2')
gapi.client.init({ clientId: '', scope: 'email' })

gapi documentation

const auth = gapi.auth2.getAuthInstance()
auth.signIn()
auth.isSignedIn.get()           boolean

auth.signOut()
auth.isSignedIn.listen(callbackFn)

auth.currentUser.get().getId()
