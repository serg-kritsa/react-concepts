## vercel
sign up on vercel.com through github account 
npm i -g vercel
vercel login
    enter email from github account
        confirm email clicking 'Verify' button in received email
cd project-folder
vercel
    hit Enter to confirm default values. change project's name if needed. value will be in https://<project-name>.vercel.app 
### deploy changes 
vercel --prod
==============================================================
## netlify
create new github repo
push code
sign in on netlify.com with github account 
+'New site from Git'
    'Continuous Deployment' > +'GitHub' >
        +'<account-name>'    
        r'Only select repositories' > v'<repo-name>' > +'Install'
        (default values in text fields)> +'Deploy site'
        navigate the generated link 
### deploy changes
push changes to repo.           project will be re-built and re-deployed
navigate the generated link (the same) 
