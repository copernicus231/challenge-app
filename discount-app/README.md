# DISCOUNT-APP DESCRIPTION
Serivce that contains the web page logic that display product search all logic for discount is on discount-service

# LOCAL BUILD
The url could be any deployment of discount-service on local,docker,heroku or maybe other
```bash
REACT_APP_API_URL="http://<app-id-discount-service>:8080/graphql" npm start
```
# BUILD FOR HEROKU
```bash
git clone https://github.com/copernicus231/challenge-service.git
cd challenge-app/discount-app/
heroku create
```
Get app name <app-id>

```bash
export REACT_APP_API_URL="https://<app-id-discount-service>.herokuapp.com/graphql"
docker build --build-arg REACT_APP_API_URL=${REACT_APP_API_URL} -t discount-app .
docker run -e REACT_APP_API_URL -d -p 3000:3000 --name service2 discount-app
docker run  -d -p 3000:80 --name service2 discount-app.
```
Check app on localhost:3000
```bash
docker container stop service2
```
```bash
heroku config:set  REACT_APP_API_URL="https://<app-id-discount-service>.herokuapp.com/graphql" --app <app-id>
heroku config --app  <app-id>
heroku container:login
heroku container:push web --arg REACT_APP_API_URL=$REACT_APP_API_URL --app  <app-id>
heroku container:release web --app   <app-id>
heroku open --app <app-id>
```

