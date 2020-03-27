 const DevTo = require('./cliente');

const api = new DevTo({
  api_key: "vCY4QFUwZrgw9gu7GvRdndJA"
});

api.getArticles({ username: "bearer", page: 1 }).then(data => console.log(data))
