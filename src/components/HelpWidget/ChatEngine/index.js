import {styles} from "./styles";
import {Button, Input, MessageList} from "react-chat-elements";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import useStomp from "./useStomp";

let clearRef = () => {
}

function useForceUpdate() {
    const [value, setValue] = useState(0)
    return () => setValue(() => value + 1)
}

export default function ChatEngine(props) {
    const [datasource, setDatasource] = useState([]);
    const [messageText, setMessageText] = useState();
    const message = useStomp(/messages/ + props.user);
    const messageListReferance = useRef()
    const inputReferance = useRef();
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        if (Object.keys(message).length !== 0) {
            let parsedMessage = JSON.parse(message.body);
            setDatasource(prevDatasource => [...prevDatasource, {
                position: 'left',
                type: 'text',
                text: parsedMessage.message,
                date: new Date(),
            }]);
        }
    }, [message])

    const handleMessage = (msg) => {
        axios.post(`${process.env.NEXT_PUBLIC_BE_PATH}/api/v1/widget/message`, {
            user: props.user,
            message: msg
        }).then(res => {
            if (res !== null) {
                setDatasource(prevDatasource => [...prevDatasource, {
                    position: 'right',
                    type: 'text',
                    text: msg,
                    date: new Date(),
                }]);
                clearRef();
                forceUpdate();
            }
        });
    }

    return (
        <div style={{...styles.divStyle}}>
            <MessageList
                referance={messageListReferance}
                className='message-list'
                toBottomHeight={'100%'}
                dataSource={datasource}
                lockable={true}
                downButton={false}
                downButtonBadge={10}
                sendMessagePreview={true}
            />
            <Input
                referance={inputReferance}
                clear={(clear) => (clearRef = clear)}
                placeholder='Write your message here.'
                multiline={true}
                maxHeight={50}
                onChange={e => setMessageText(e.target.value)}
                onKeyPress={(e) => {
                    if (e.shiftKey && e.key === "Enter") {
                        return true
                    }
                    if (e.key === "Enter") {
                        clearRef();
                        handleMessage(messageText);
                    }
                }}
                rightButtons={<Button text={"Send"} onClick={() => handleMessage(messageText)}
                                      title="Send"/>}
            />
        </div>
    )
}