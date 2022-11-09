import React, {useEffect} from 'react';
import {newTracker, enableActivityTracking, trackPageView} from '@snowplow/browser-tracker';
import {LinkClickTrackingPlugin, enableLinkClickTracking} from '@snowplow/browser-plugin-link-click-tracking';

export default function OpenlineTracker(props) {

    function propertyOrDefault(propertyValue, defaultValue) {
        if (propertyValue !== undefined) {
            return propertyValue;
        }
        return defaultValue;
    }

    useEffect(() => {
        if(props.enabled !== false) {
            newTracker(props.trackerId, props.collectorUrl, {
                appId: props.appId,
                discoverRootDomain: true,
                cookieSecure: true,
                cookieSameSite: "None",
                eventMethod: "post",
                postPath: "/ai.openline.sp/tp2",
                platform: "web",
                bufferSize: parseInt(propertyOrDefault(props.bufferSize, 1)),
                contexts: {
                    webPage: true
                },
                plugins: [LinkClickTrackingPlugin()],
            });

            enableActivityTracking({
                minimumVisitLength: parseInt(propertyOrDefault(props.minimumVisitLength, 30)),
                heartbeatDelay: parseInt(propertyOrDefault(props.heartbeatDelay, 30))
            });

            enableLinkClickTracking({
                pseudoClicks: true,
                denylist: ['untracked'],
                trackContent: true
            });

            trackPageView({}, [props.trackerId]);
        }
    }, []);

    return (
        <></>
    )
}