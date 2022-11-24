import React from 'react';
import Footer from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import type {WrapperProps} from '@docusaurus/types';
import OpenlineTracker from '../../components/Tracker';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      <Footer {...props} />
      <OpenlineTracker
                enabled={true}
                appId={process.env.REACT_APP_SP_TRACKER_APP_ID}
                trackerId={process.env.REACT_APP_SP_TRACKER_TRACKER_ID}
                collectorUrl={process.env.REACT_APP_SP_TRACKER_COLLECTOR_URL}
                bufferSize={process.env.REACT_APP_SP_TRACKER_BUFFER_SIZE}
                minimumVisitLength={process.env.REACT_APP_SP_TRACKER_MIN_VISIT_SECONDS}
                heartbeatDelay={process.env.REACT_APP_SP_TRACKER_HEARTBEAT_SECONDS}
            />
    </>
  );
}
