
const settings = require("./settings"); // settings.json


var knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

knex.select('first_name','last_name')
.from('famous_people')
.where('last_name', 'like', `%${ process.argv[2] }%`)
.orWhere('last_name', 'like', `%${ process.argv[2] }%`)
.then(function(rows) {
  console.log(rows);
})


// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
// knex.select().from('famous_people')
// Outputs:
// select first_name from famous_people OR last_name from famous_people;
// ", ["%" + process.argv[2] + "%"], (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log(result.rows); //output: 1
//     client.end();
//   });
// });