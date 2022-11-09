import React, {useRef, useEffect, useState} from "react";
import Avatar from "../Avatar";
import SupportWindow from "../SupportWindow";
import OpenlineTracker from "../Tracker";

export default function SupportEngine() {
    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef);

    const [visible, setVisible] = useState(false)

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setVisible(false)
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return (
        <div>
            <div ref={wrapperRef}>
                <SupportWindow visible={visible}/>
                <Avatar
                    onClick={() => visible ? setVisible(false): setVisible(true)}
                    style={{
                        position: 'fixed',
                        bottom: '24px',
                        right: '24px',
                    }}
                />
            </div>
            <OpenlineTracker
                enabled={true}
                appId={process.env.NEXT_PUBLIC_SP_TRACKER_APP_ID}
                trackerId={process.env.NEXT_PUBLIC_SP_TRACKER_TRACKER_ID}
                collectorUrl={process.env.NEXT_PUBLIC_SP_TRACKER_COLLECTOR_URL}
                bufferSize={process.env.NEXT_PUBLIC_SP_TRACKER_BUFFER_SIZE}
                minimumVisitLength={process.env.NEXT_PUBLIC_SP_TRACKER_MIN_VISIT_SECONDS}
                heartbeatDelay={process.env.NEXT_PUBLIC_SP_TRACKER_HEARTBEAT_SECONDS}
            />
        </div>
    )
}
