import {LoadingOutlined} from '@ant-design/icons'
import {styles} from "./styles";
import Avatar from "../Avatar";
import React, {useState} from "react";

export default function EmailForm(props) {
    const [email, setEmail] = useState('');

    return (
        <div
            style={{
                ...styles.emailFormWindow,
                ...{
                    height: '100%',
                    opacity: '1',
                },
                height: props.visible ? '100%' : '0px',
                opacity: props.visible ? '1' : '0'
            }}
        >
            <div style={{height: '0px'}}>
                <div style={styles.stripe}/>
            </div>

            <div
                className='transition-5'
                style={{
                    ...styles.loadingDiv,
                    ...{
                        zIndex: props.loading ? '10' : '-1',
                        opacity: props.loading ? '0.33' : '0',
                    }
                }}
            />
            <LoadingOutlined
                className='transition-5'
                style={{
                    ...styles.loadingIcon,
                    ...{
                        zIndex: props.loading ? '10' : '-1',
                        opacity: props.loading ? '1' : '0',
                        fontSize: '82px',
                        top: 'calc(50% - 41px)',
                        left: 'calc(50% - 41px)',
                    }
                }}
            />

            <div style={{position: 'absolute', height: '100%', width: '100%', textAlign: 'center'}}>
                <Avatar
                    style={{
                        position: 'relative',
                        left: 'calc(50% - 44px)',
                        top: '10%',
                    }}
                />

                <div style={styles.topText}>
                    Welcome to Openline 👋
                </div>

                <form
                    onSubmit={e => props.handleSubmit(e, email)}
                    style={{position: 'relative', width: '100%', top: '19.75%'}}
                >
                    <input
                        placeholder='Your Email'
                        onChange={e => setEmail(e.target.value)}
                        style={styles.emailInput}
                    />
                </form>

                <div style={styles.bottomText}>
                    Enter your email <br/> to get started.
                </div>
            </div>
        </div>

    )
}