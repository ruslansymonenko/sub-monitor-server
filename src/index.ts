import server from './server';

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

server.listen(PORT, () => {
  console.log('Server started on port', PORT);
});
