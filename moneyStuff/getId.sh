curl -X POST \
  https://hack.softheon.io/oauth2/connect/token \
  -H 'authorization: Basic NzAxNjVhOGItMjAyNi00ZmFhLTg3ZGItODQwN2Y1YWVlYTk3OjE2MTNmYTliLTQ3YTMtNDYxNi1iOTQ4LWEwNWU4Y2VhZjc1ZA==' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -H 'postman-token: 830102ce-7699-e737-f1cd-64d519e4c9e9' \
  -d 'grant_type=client_credentials&scope=paymentapi'
