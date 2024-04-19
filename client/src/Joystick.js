import React, { useState, useEffect, useRef } from "react";
import ReactNipple from "react-nipple";


const Joystick = (props) => {
  // state
  const [data, setData] = useState();

  const [state, setState] = useState({
    axes: [0, 0, 0, 0, 0, 0],
    buttons: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });

  const directionVector = useRef({
    x: 0,
    y: 0
  });

  const translateVector = useRef({
    x: 0,
    y: 0
  });

  const [joystickActive, setJoystickActive] = useState(false);
  
  function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
  }



  useEffect(() => {
    console.log(joystickActive);
    if (joystickActive)
    {
      const FixedIntervalUpdate = setInterval(() => {
        translateVector.current.x = translateVector.current.x + directionVector.current.x;
        translateVector.current.y = clamp(translateVector.current.y + directionVector.current.y, -90, 90);

        props.xValue(translateVector.current.x);
        props.yValue(translateVector.current.y);
      }, 20); // Updates every 20ms

      return () => {
        directionVector.current.x = 0;
        directionVector.current.y = 0;
        clearInterval(FixedIntervalUpdate);
      };
    }
  }, [joystickActive]);

  // functions
  const handleJoystickStart = (evt, data) => {
    setData(data);
    setJoystickActive(true);
  };

  const handleJoystickEnd = (evt, data) => {
    setData(data);
    setState({
      axes: [0, 0, 0, 0, 0, 0]
    });
    setJoystickActive(false);
  };

  const handleJoystickMove = (evt, data) => {
    setData(data);
    let y_direction = Math.sin(data.angle.radian);
    let x_direction = -Math.cos(data.angle.radian);

    directionVector.current.x = -x_direction * (data.distance / 80);
    directionVector.current.y = y_direction * (data.distance / 80);

    //console.log("Direction x: "+ directionVector.x +"  y: "+ directionVector.y );

    //console.log(data);
  };

  const handleJoystickDir = (evt, data) => {
    setData(data);
  //let max_distance = 75.0; // pixels;
  // let y_direction = Math.sin(data.angle.radian);
  // let x_direction = -Math.cos(data.angle.radian);
  //let x_inverte = Math.cos(data.angle.radian);

//});
    
   // let linear_speed = Math.sin(data.angle.radian) * ;

    let x = data.direction.x === "right" ? 1 : -1;
    let y = data.direction.y === "up" ? 1 : -1;

   // let max_distance = 150 / 2;
     if(data.distance === 0){
      x = 0.0;
      y = 0.0;
    }

    setState({
      axes: [x, y, 0, 0, 0, 0],
      buttons: [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    }); 
        // console.log("Direction x: "+ x_direction +"  y: "+ y_direction );
        // console.log("Exos x: "+ x +"  y: "+ y )
        // console.log("invertido x: ", x_inverte)
        // console.log(" valor diustancia  "+ data.angle.radian);
        // console.log(" valor linear_speed  "+ linear_speed);
        // console.log(" valor angular_speed  "+  angular_speed);
  };

  const handleJoystickPlain = (evt, data) => {
    setData(data);
  };

  const handleJoystickShown = (evt, data) => {
    setData(data);
  };

  const handleJoystickHidden = (evt, data) => {
    setData(data);
  };

  const handleJoystickPressure = (evt, data) => {
    setData(data);
  };

    return ( 
        <div className="joystick-wrapper">
            <ReactNipple 
            className="joystick-element"
            options={{
                mode: "static",
                position: { top: "50%", left: "50%" },
                size: 160,
                treshold: 0.1,
                color: "white"
            }}
            style={{
                position: "relative",
                width: 220,
                height: 220,
            }}
            onStart={handleJoystickStart}
            onEnd={handleJoystickEnd}
            onMove={handleJoystickMove}
            onDir={handleJoystickDir}
            onPlain={handleJoystickPlain}
            onShown={handleJoystickShown}
            onHidden={handleJoystickHidden}
            onPressure={handleJoystickPressure}
            />
        </div>
     );
}
 
export default Joystick;