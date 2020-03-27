 const DevTo = require('./cliente');

const api = new DevTo({
  api_key: "XXXXXXXXXX"
});

api.getArticles({ username: "bearer", page: 1 }).then(data => console.log(data))
