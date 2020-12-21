var socket = io();

// escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al sevidor');
})

socket.on('disconnect', function() {
    console.log('Conexión perdida con el servidor');
})

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Daniel Tore',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta del server', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Info del servidor', mensaje);
})