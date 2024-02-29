const express = require('express');
const app = express();

const flavors = [
  {id: 1, flavor: 'Chocolate'},
  {id: 2, flavor: 'Matcha'},
  {id: 3, flavor: 'Strawberry'}
];

app.get('/',(req, res) =>{
  res.send('Hello World');
});

app.get('/api/flavors',(req, res) =>{
  res.send(flavors);
});

app.get('/api/flavors/:id',(req, res) =>{
  const flavor = flavors.find(c => c.id === parseInt(req.params.id));
  if (!flavor) res.status(404).send('The flavor with the given ID is not found.');
  res.send(flavor);
});

app.get('/api/post/:year/:month',(req, res) =>{
  res.send(req.params);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`
));