# Example Backend

This is a example of a backed server.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Instructions

Click the "Deploy to Heroku" button.


> You will need to place your Secret Key when doing the deployment. **Make sure** this secret key matches the public key that you are using in JS/SDK solution.

## Endpoints
For simplicity, all endpoints will need only the following data.

> Other options can be changed in the config file 

> Here you simply need to do a POST request with the card token:

```json
{
  "cardToken": "card_tok_XXXX"
}
```

| Endpoint      | Description   |
| ------------- |:-------------:|
| /charge      | perform an authorisation and immediately perform a capture |
| /charge3d    | perform an authorisation, return the response including the 3D Secure URL and finally perform a capture |
| /authorise   | only perform an authorisation |
| /authorise3d | perform an authorisation, return the response including the 3D Secure URL |


> For more information or help during the integration process contact integration@checkout.com