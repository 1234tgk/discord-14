import initApp from './app';
import config from './config';

const server = initApp();

server.listen(config.PORT, () => {
  console.log('Server is listening on port ' + config.PORT);
});

export default server;
