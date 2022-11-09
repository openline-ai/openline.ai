import React, {useState} from "react";
import {styles} from './styles'

import EmailForm from "./EmailForm";
import ChatEngine from "../ChatEngine";

export default function SupportWindow(props) {
    const [user, setUser] = useState(null);

    function handleSubmit(event, email) {
        event.preventDefault();

        setUser(email);
    }

    return (
        <div
            className='transition-5'
            style={{
                ...styles.supportWindow,
                ...{opacity: props.visible ? '1' : '0',
                    zIndex: props.visible ? '100' : '-1'}
            }}
        >
            <EmailForm visible={user === null}
                       handleSubmit={(event, email) => handleSubmit(event, email)}
                       loading={false}/>
            <div
                className='transition-5'
                style={{
                    ...styles.chatEngineWindow,
                    ...{
                        height: props.visible ? '100%' : '0px',
                        zIndex: props.visible ? '100' : '0',
                    }
                }}
            >
                {user !== null && <ChatEngine user={user}/>}
            </div>
        </div>
    )
}
