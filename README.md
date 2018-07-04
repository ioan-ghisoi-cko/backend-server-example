# Example Backend

This is a example of a backed server.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Instructions

Click the "Deploy to Heroku" button.


> You will need to place your Secret Key when doing the deployment. **Make sure** this secret key matches the public key that you are using in the mobile SDK

## Endpoints
### /charge
> Here you simply need to do a POST request with the card token:

```json
{
  "token": "card_tok_XXXX"
}
```
The response will have the following form:
```json
{
  "id": "charge_test_XXXX",
  "responseMessage": "Approved",
  "status": "Authorised",
}
```
