curl -X POST \
  https://hack.softheon.io/api/payments/v1/creditcards/ \
  -H 'authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwN0VBQTg0REFCMTVCQUE2QjQ1NDAxM0M0NkM3RThBMTY5QkEwMDQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJFSDZxaE5xeFc2cHJSVUFUeEd4LWloYWJvQVEifQ.eyJuYmYiOjE1MDk4NDA4NjksImV4cCI6MTUwOTg0NDQ2OSwiaXNzIjoiaHR0cHM6Ly9oYWNrLnNvZnRoZW9uLmlvL29hdXRoMiIsImF1ZCI6WyJodHRwczovL2hhY2suc29mdGhlb24uaW8vb2F1dGgyL3Jlc291cmNlcyIsInBheW1lbnRhcGkiXSwiY2xpZW50X2lkIjoiNzAxNjVhOGItMjAyNi00ZmFhLTg3ZGItODQwN2Y1YWVlYTk3Iiwic2NvcGUiOlsicGF5bWVudGFwaSJdfQ.OhLyeacnFwatZPKOBGTY91J9gY545pCnmAJd16ilH0-i7FhMRYrkwZ2aMya4b8E9DMi9V51R65JR0kJMb0fNdadnDeLSAWYgk1rtcUEfBhPVxzlLAEtMBWA_zKe7zmy9-swEb3PpiuBJ63IgZHkN6a2O5Eunn9fvTeMxTKpUmb2cFieNjlznZalE5lhQvxfIkUJxa2E8BCQOP3EeG4ggQQn5r_do6zjIH9uEba7f8tCRXVWB84ucK170QXzb-YarPWoZ0KLq7WniugSW7m8pJi35mgPus-gXdcnfobW6HffS6o5-qK44oFmZBuOIJzSifEhSwECf85ZAEPcTpBO2HH5fAUYLUN4blnGrZLVgG9obPG5r6DVlSlkJgKLKHJuP9-CudyweGZTUIKqKoGKKdiBnXcJUQ5pe4dL25F5kMAjsQFNyTjwS1ddLPPZRWOEd9eif6t5dIuNlhZ6gTQNIqbfDduz4CYDBMXTTvk_6fJFwRgG9DawlE1DgG2NJ_mSrLVugZnjQ2q8LkHM_NnNu8QR30_IJRC6fewR9ddli6KjWS9w8HuaSvDqv63eSkgEoIm-DISKm-sEYbaU0AGWVeg3CTCgMLR4vo5JjxSDiJWtV5MX7EkN5X5veVksO5TqkHS34oMSoonZy2H7GOD0o5tGtVVbFOYToHFI8O5bCrrw' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 45b0880f-352f-28c7-a1f2-33164525c09e' \
  -d '{
    "token": "4134185779995000",
    "cardHolderName": "John Doe",
    "cardNumber": "4111113956134018",
    "securityCode": "939",
    "expirationMonth": 11,
    "expirationYear": 2017,
    "billingAddress": {
        "address1": "1500 Stony Brook Road",
        "address2": "",
        "city": "Stony Brook",
        "state": "NY",
        "zipCode": "11790"
    },
    "email": "jdoe@example.com",
    "cardState": "Authorized",
    "cardType": "Visa",
    "createdTime": "2016-11-02T16:11:29.1408066-04:00",
    "modifiedTime": "2016-11-02T16:11:29.1408066-04:00"
}'
