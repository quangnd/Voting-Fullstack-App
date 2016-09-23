# Voting-Fullstack-App
A fullstack web app with NodeJS and its ecosystem

##Tech stacks
1. Frontend
    + ReactJS
    + Bootstrap
    + Jquery
    + Toastr
    + Chart.js
2. Backend (coming soon)
    + NodeJS
    + MongoDB with Mongoose
    + Express
    
##User stories
1. As an authenticated user, I can keep my polls and come back later to access them.

2. As an authenticated user, I can share my polls with my friends.

3. As an authenticated user, I can see the aggregate results of my polls.

4. As an authenticated user, I can delete polls that I decide I don't want anymore.

5. As an authenticated user, I can create a poll with any number of possible items.

6. As an unauthenticated or authenticated user, I can see and vote on everyone's polls.

7. As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)

8. As an authenticated user, if I don't like the options on a poll, I can create a new option.

##Note about ReactJS
+ React-Router with param need original link before (if not, eror did not match any route)
    + For example: `<Route path='/details/:id' component={PollViewPage}/>`
    + Need `<Route path='/details' component={PollViewPage}/>`
+ If id is int type, need parseInt after get from query string.
+ To change Component state on the same page, need look into componentWillReceiveProps() life cycle.
+ To CRA work with API backend, you need
1. Install foreman (process management module)
2. Create Procfile with content:
`web: cd client && npm start
api: npm run server
`
(client directory is where CRA application located!)
3. Change package.json (at api backend server)
`
"scripts": {
    "start": "nf start -p 3000",
    "server": "API_PORT=3001 ./node_modules/.bin/babel-node server.js"
`
4. Proxy CRA app (edit package.json of CRA app)
"proxy": "http://localhost:3001/" (suppose API backend port is 3001 )

Reference more: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#integrating-with-a-node-backend

