const http = require('http')
const app = require('./app')


const normalizePort = val => {


    console.log('On entre dans la fonction normalizePort')

    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val
    }

    if(port >= 10) {
        return port;
    }
    return false

};

const port = normalizePort(process.env.PORT || '3000')



app.set('port', port)
// app utilise le port normalisé 

const errorHandler = error => {

    console.log('On entre dans la fonction errorHandler')
    if(error.syscall !== 'listen') {
        throw new Error('error.syscall !== \'listen\'')
    }

    const address = server.address();

    const bind = typeof address === 'string' ? 
                'pipe ' + address : 'port: ' + port; 
    // utilisation du ternaire 
    
    switch(error.code) {

        case 'EACCESS': 
            console.error(bind + ' requires elevated privileges');
        case 'EADDRESINUSE':
            console.error(bind + ' is aklready in use.');
            process.exit(1);
            break;
        default:
            throw error;


    }

    

}

const server = http.createServer(app)
// const server = http.createServer((req, res) => {
//     res.end('Boris a créé un serveur'
// });
server.on('error', errorHandler);
server.on('listening', () => {

    const address = server.address();

    const bind = typeof address === 'string' ? 
                'pipe ' + address : 'port: ' + port; 
    
    console.log('Listening on ' + bind)
    
})

server.listen(port);