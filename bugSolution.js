const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate userId using a regular expression to ensure it is numeric
  const idRegex = /^[0-9]+$/; 
  if (!idRegex.test(userId)) {
    return res.status(400).send('Invalid user ID');
  }
  // ... some database query to get the user with userId ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});