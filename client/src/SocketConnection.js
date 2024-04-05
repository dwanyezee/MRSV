import { io } from "socket.io-client";

var socket;

export default class mrsvSocket {

    Initialize() {
        // sending a connect request to the server.
        socket = io.connect('http://192.168.156.124:5000');

        socket.on('connect', function(msg) {
            console.log('After connect', msg);
        });
        
    }

    // -----------------------------------------------------------

    SetTimeOfDay(val) {
        socket.emit('timeofday_changed', {
            data: val * 0.1
        });

        socket.on('timeofday_updated', function(msg) {
            console.log('timeofday_updated:' + msg.data);
        });        
    }
    // -----------------------------------------------------------

    SetWeatherIntensity(val) {
        socket.emit('weather_intensity_changed', {
            data: val * 0.01
        });

        socket.on('weather_intensity_updated', function(msg) {
            console.log('weather_intensity_updated:' + msg.data);
        });
    }



    // -----------------------------------------------------------

    SetWeatherType(val) {
        socket.emit('weather_type_changed', {
            data: val * 1.0
        });

        socket.on('weather_type_updated', function(msg) {
            console.log('weather_type_updated:' + msg.data);
        });
        
    }


    // -----------------------------------------------------------

    SetCameraYaw(val) {
        socket.emit('camera_yaw_changed', {
            data: val * 0.1
        });

        socket.on('camera_yaw_updated', function(msg) {
            console.log('camera_yaw_updated:' + msg.data);
        });
    }



    // -----------------------------------------------------------

    SetCameraPitch(val) {
        socket.emit('camera_pitch_changed', {
            data: val * 0.1
        });

        socket.on('camera_pitch_updated', function(msg) {
            console.log('camera_pitch_updated:' + msg.data);
        });
    }



    // -----------------------------------------------------------

    SetConfigRequest() {
        console.log('config_request button pressed');
        socket.emit('config_request', {});

        socket.on('config_request_reply', function(msg) {
            console.log('config_request_reply');
        });
    }

    // -----------------------------------------------------------

}


