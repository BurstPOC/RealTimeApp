const r = require('rethinkdb');
const io = require('socket.io')();

function createAccount({ connection, name }) {
  return r.table('signup')
  .insert({
    name,
    timestamp: new Date(),
  })
  .run(connection)
  .then(() => console.log('Name has been saved ', name));
}

function subscribeToAccount({ client, connection }) {
  r.table('signup')
  .changes({ include_initial: true })
  .run(connection)
  .then((cursor) => {
    cursor.each((err, signupRow) => client.emit('signups', signupRow.new_val));
  });
}


r.connect({
  host: 'localhost',
  port: 28015,
  db: 'cricfizz'
}).then((connection) => {
  io.on('connection', (client) => {
    client.on('createAccount', ({ name }) => {
      createAccount({ connection, name });
    });

    client.on('subscribeToAccount', () => subscribeToAccount({
      client,
      connection,
    }));
  });
});


const port = 8000;
io.listen(port);
console.log('listening on port ', port);

