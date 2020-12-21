const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicacion'
    })

    client.on('disconnect', () => {
        console.log('Cliente desconectado!');
    });

    // Escuchar mensaje
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data)
            // if (mensaje.usuario) {

        //     callback({
        //         resp: 'Ha salido BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO MAL!!!!'
        //     });
        // }

    });
});