const { Client } = require('pg');

async function getConnection(){
  const client = new Client({
    host:'localhost',
    port: 5432,
    user:'sebasdev',
    password: 'sebas1234',
    database: 'my_store2'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
