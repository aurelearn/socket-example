const io = require('socket.io')({
  cors: {
    origin: 'http://localhost:1234',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', client => {
  client.on('newVisitor', () => {
    console.log('visitor');
    client.join();
  });
  
  client.on('admin', () => {
    console.log('admin');
    client.join();
  });

  client.on('scrollInput', (offset) => {
    console.log(offset);
    client.broadcast.emit('scrollEvent', offset);
  })
});

io.listen(3000);
