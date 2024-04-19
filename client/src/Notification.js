import { useEffect, useState } from "react";

const Notification = (props) => {
    const [width, setWidth] = useState(0);
    const [exit, setExit] = useState(false);

    const handleStartTimer = () => {
        setInterval(() => {
            setWidth((prev) => {
                if (prev < 100) {
                    return prev + 0.1;
                }

                return prev;
            })
        }, 20);
    };

    const handleCloseNotification = () => {
        setExit(true);
        setTimeout(() => {
            // Remove the state
            props.dispatch({
                type: "REMOVE_NOTIFICATION",
                id: props.id
            })
        }, 400)
    }

    useEffect(() => {
        if (width >= 100) {
            handleCloseNotification()
        }
    }, [width])

    useEffect(() => {
        handleStartTimer()
    }, []);

    return (
        <div onClick={handleCloseNotification} className={`notification-item ${props.type === "SUCCESS" ? "success" : "error" } ${exit ? "exit" : ""}`}>
            <div className="notification-bar" style={{width: `${width}%`}}/>
            <div className="notification-state"/>
            <p>{props.message}</p>
        </div>
     );
}
 
export default Notification;