const chatModel = require('../models/chat')
exports.init = function (io) {
    io.sockets.on('connection', function (socket) {
        try {
            socket.on('chat', function (room, userId, chatText) {
                console.log(room, userId, chatText);
                io.emit('chatback', room, userId, chatText);
                let chatInfo = new chatModel({
                    id: room,
                    user: userId,
                    time: new Date(),
                    text: chatText
                })
                chatInfo.save()
            });
            
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });


        } catch (err) {
            console.log(err);
        }
    })
}