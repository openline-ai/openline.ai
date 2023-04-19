import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css'
import SignUpModal from '../../components/SignupModal';


function PricingHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('pricing-hero hero--primary')}>
      <div className={styles.pricingBackground}>
        <div className={styles.pricingHeader}>
          <h1 className={styles.pricingTitle}>Open Transparent Pricing</h1>
          <h2 className={styles.pricingSubtitle}>Openline Cloud or Self-hosted.<br></br> Same Price. Same Support.</h2>
          <br></br>
          <SignUpModal waitlistName='Demo-Pricing' slack={siteConfig.customFields.REACT_APP_SLACK_WEBHOOK} />
        </div>
      </div>
    </header>
  );
}

function Pricing() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <section style={{ marginTop: '-30px', paddingBottom: '30px' }}>
        <div className={styles.pricingContainer}>
          <div className={styles.pricingRow}>
            <div className={styles.pricingTable}>
              <h3 className={styles.pricingTitle}>Starter</h3>
              <ul className={styles.pricingText}>
                <li>Contact management</li>
                <li>Email</li>
                <li>Messaging</li>
                <li>Voice</li>
                <li>Chat</li>
                <li>Web analytics</li>
                <li>Integrations</li>
                <br></br>
              </ul>
              <div style={{ textAlign: 'center' }}>
                <h5 className={styles.pricingFreemiumPrice}>$500 / month</h5>
                <p className={styles.pricingSubtext}>for 5,000 contacts</p>
                <h5 className={styles.pricingPrice}>Extra contacts</h5>
                <p className={styles.pricingSubtext}>$0.10 / contact</p>
              </div>
            </div>
            <div className={styles.pricingTable}>
              <h3 className={styles.pricingTitle}>Growth</h3>
              <ul className={styles.pricingText}>
                <li>Contact management</li>
                <li>Email</li>
                <li>Messaging</li>
                <li>Voice</li>
                <li>Chat</li>
                <li>Web analytics</li>
                <li>Integrations</li>
                <br></br>
              </ul>
              <div style={{ textAlign: 'center' }}>
                <h5 className={styles.pricingFreemiumPrice}>$2,500 / month</h5>
                <p className={styles.pricingSubtext}>for up to 40,000 contacts</p>
                <h5 className={styles.pricingPrice}>Extra contacts</h5>
                <p className={styles.pricingSubtext}>$0.05 / contact</p>
              </div>
            </div>
            <div className={styles.pricingTable}>
              <h3 className={styles.pricingTitle}>Enterprise</h3>
              <ul className={styles.pricingText}>
                <li>Same as Growth tier</li>
                <li><i>plus...</i></li>
                <li>Dedicated Support</li>
                <li>SAML</li>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </ul>
              <div style={{ textAlign: 'center' }}>
                <h5 className={styles.pricingFreemiumPrice}>Contact us</h5>
                <p className={styles.pricingSubtext}>for bespoke pricing</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>Want to learn more?</p>
            <SignUpModal waitlistName='Demo-Pricing' slack={siteConfig.customFields.REACT_APP_SLACK_WEBHOOK} />
          </div>
        </div>
      </section>
    </>
  );
}


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Pricing`}
      description="Openline makes it easy to get a complete 360-degree view of your customers. We bring together behavioral, demographic, transactional, conversational, and social data to give you the most comprehensive view of your customer relationship.">
      <main>
        <PricingHero />
        <Pricing />
      </main>
    </Layout>
  );
}