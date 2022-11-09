import {useEffect, useState} from 'react'
import {Client} from '@stomp/stompjs'

const useStomp = (topic) => {
    const [message, setMessage] = useState({});
    const client = new Client();
    
    useEffect(() => {
        client.configure({
            brokerURL: process.env.NEXT_PUBLIC_STOMP_SERVER,
            onConnect: () => {
                console.log('onConnect');
                client.subscribe(topic, message => {
                    setMessage(message);
                });
            },
            // Helps during debugging, remove in production
            debug: (str) => {
                console.log(new Date(), str);
            }
        });
        client.activate();
    },[])

    return message;
}

export default useStomp