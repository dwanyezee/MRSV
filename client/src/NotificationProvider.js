import { createContext, useContext, useReducer } from "react";
import Notification from "./Notification";
import { v4 } from "uuid";

const NotificationContext = createContext();

export const UseNotification = () => {
    const dispatch = useContext(NotificationContext)

    return (props) => {
        dispatch({
            type: "ADD_NOTIFICATION",
            payload: {
                id: v4(),
                ...props
            }
        })
    }
}

const NotificationProvider = (props) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "ADD_NOTIFICATION":
                return [...state, {...action.payload}];
            case "REMOVE_NOTIFICATION":
                return state.filter(el => el.id !== action.id);
            default:
                return state;
        }
    }, []);

    // dispatch({
    //     type: "ADD_NOTIFICATION",
    //     payload: {
    //         id: useId(),
    //         type: "SUCCESS",
    //         message: "your notification here"
    //     }
    // })

    return (
        <NotificationContext.Provider value={dispatch}>
            <div className="notification-wrapper">
                {state.map(note => {
                    return <Notification dispatch={dispatch} key={note.id} {...note} />
                })}
            </div>
            {props.children}
        </NotificationContext.Provider>
     );
}
 
export default NotificationProvider;