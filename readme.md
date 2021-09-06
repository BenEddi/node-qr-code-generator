QR Generator API

* Setting up the server :

Clone the code then run "npm install"

* Running the server:

run "npm start"

* Trying The api:

`
curl --location --request POST 'http://localhost:7777/qr' \
--header 'Content-Type: application/json' \
--data-raw '{
    "items": [
        "Hello world!",
        "Hakuna Matata"
    ]
}'
`
