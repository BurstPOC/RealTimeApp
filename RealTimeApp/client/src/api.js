import openSocket from 'socket.io-client';
const socket = openSocket('http://10.246.17.241:8000');

function subscribeToAccount(cb) {
  socket.on('signups', signups => cb(signups));
  socket.emit('subscribeToAccount');
}

function createAccount(name) {
  socket.emit('createAccount', { name });
}

export {
  createAccount,
  subscribeToAccount,
};