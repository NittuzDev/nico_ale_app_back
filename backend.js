
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {


    /* pool.query(
        "INSERT INTO student(firstname, lastname, age, address, email)VALUES('Mary Ann', 'Wilters', 20, '74 S Westgate St', 'mroyster@royster.com')",
        (err, res) => {
          console.log(err, res);
          pool.end();
        }
      ); */

  res.send('Hello World!')


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})