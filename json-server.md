## create project
mkdir api
cd api
npm init -y
npm i json-server

## init config
touch db.json
{
    "<endpoint-name>": []
}

edit package.json
script.start: "json-server -p 3001 -w db.json"

## run server in 2nd terminal window
npm start