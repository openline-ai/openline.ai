import React from 'react';
import Footer from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import type {WrapperProps} from '@docusaurus/types';
import {WebChat} from "@openline-ai/openline-web-chat";
import "@openline-ai/openline-web-chat/dist/esm/index.css"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
        <WebChat apikey={`${siteConfig.customFields.REACT_APP_SP_API_KEY}`}
                 httpServerPath={`${siteConfig.customFields.REACT_APP_SP_HTTP_PATH}`}
                 wsServerPath={`${siteConfig.customFields.REACT_APP_SP_WS_PATH}`}
                 trackerEnabled={`${siteConfig.customFields.REACT_APP_SP_TRACKER_ENABLED}` === 'true'}
                 trackerAppId={`${siteConfig.customFields.REACT_APP_SP_TRACKER_APP_ID}`}
                 trackerId={`${siteConfig.customFields.REACT_APP_SP_TRACKER_TRACKER_ID}`}
                 trackerCollectorUrl={`${siteConfig.customFields.REACT_APP_SP_TRACKER_COLLECTOR_URL}`}
                 trackerBufferSize={`${siteConfig.customFields.REACT_APP_SP_TRACKER_BUFFER_SIZE}`}
                 trackerMinimumVisitLength={`${siteConfig.customFields.REACT_APP_SP_TRACKER_MIN_VISIT_SECONDS}`}
                 trackerHeartbeatDelay={`${siteConfig.customFields.REACT_APP_SP_TRACKER_HEARTBEAT_SECONDS}`}
                 location='right'
        ></WebChat>
      <Footer {...props} />
    </>
  );
}
