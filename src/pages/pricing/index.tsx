import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css'


function PricingHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('pricing-hero hero--primary')}>
      <div className="pricing-hero pricing-background">
        <div style={{ maxWidth: '70%', paddingLeft: '20vw', paddingTop: '4rem' }}>
          <h1 className="pricing-title">Open Transparent Pricing</h1>
          <h2 className="pricing-subtitle">Openline Cloud or Self-hosted.<br></br> Same Price. Same Support.</h2>
          <div className='border-button pricing-book-demo'><a href='https://meetings-eu1.hubspot.com/matt2/customer-demos' rel="noreferrer" target="_blank" style={{ color: '#100024' }}>Schedule a demo</a></div>
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
        <div className="pricing-container">
          <div className={styles.pricingrow}>
            <div className={styles.pricingtable}>
              <h3 className={styles.pricingtitle}>customerOS<br></br><br></br></h3> {/* fix this hack */}
              <br></br>
              <ul className={styles.pricingtext}>
                <li>Unlimited events pipelines</li>
                <li>Unlimited contacts</li>
                <li>Unlimited API queries</li>
                <li>Dedicated support</li>
                <br></br> {/* fix this hack */}
                <br></br>
                <br></br>
              </ul>
              <div style={{ textAlign: 'center' }}>
                <h5 className={styles.pricingfreemiumprice}>$0 / month</h5>
                <p className={styles.pricingsubtext}>for 1,000 contacts</p>
                <h5 className={styles.pricingprice}>Extra contacts</h5>
                <p className={styles.pricingsubtext}>$0.15 / contact</p>
              </div>
            </div>
            <div className={styles.pricingtable}>
              <h3 className={styles.pricingtitle}>Openline App Suite</h3>
              <br></br>
              <ul className={styles.pricingtext}>
                <li>Contact management</li>
                <li>Chat</li>
                <li>Messaging</li>
                <li>Email</li>
                <li>Voice</li>
                <li>Web analytics</li>
                <li>Dedicated support</li>
              </ul>
              <div style={{ textAlign: 'center' }}>
                <h5 className={styles.pricingfreemiumprice}>Free</h5>
                <p className={styles.pricingsubtext}>for unlimited contacts</p>
                <p className={styles.pricingsubtext} style={{lineHeight: '0px', fontStyle: 'italic', fontSize: '12px'}}>(requires customerOS)</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>Want to learn more?</p><a href='https://meetings-eu1.hubspot.com/matt2/customer-demos' rel="noreferrer" target="_blank" style={{ color: '#A16AFF' }}><p>Schedule a Demo ➔</p></a>
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