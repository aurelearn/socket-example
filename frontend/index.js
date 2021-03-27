import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

if (window.localStorage.getItem('master')) {
  socket.emit('admin');
  window.addEventListener('scroll', () => {
    socket.emit('scrollInput', {
      offset: window.scrollY,
      height: window.innerHeight,
    });
  });
} else {
  socket.emit('newVisitor');
  socket.on('scrollEvent', ({ offset, height }) => {
    window.scrollTo(0, (offset * window.innerHeight) / height);
  })
}
