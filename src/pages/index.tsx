import React, { useState } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SignUpFormReact from '../components/Signup';
import { Carousel } from 'primereact/carousel';


import AgentScreen from '@site/static/img/AgentScreen.png';
import GithubButton from '@site/static/img/GithubButton.png';
import InvestorLogos from '@site/static/img/InvestorLogos.svg';
import CustomerWindow from '@site/static/img/CustomerWindow.png';
import Integrations from '@site/static/img/IntegrationLogos.png';

import Carousel0 from '@site/static/img/carousel/1000.svg';
import Carousel1 from '@site/static/img/carousel/1001.svg';
import Carousel2 from '@site/static/img/carousel/1002.svg';
import Carousel3 from '@site/static/img/carousel/1003.svg';
import Carousel4 from '@site/static/img/carousel/1004.svg';
import Carousel5 from '@site/static/img/carousel/1005.svg';

import styles from './index.module.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import useBaseUrl from '@docusaurus/useBaseUrl';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.tagline}</h1>
        <p className="hero__subtitle">Openline customerOS is an open source platform for managing customer data, building deeper relationships, and supercharging the productivity of customer-facing teams.</p>
        <SignUpFormReact />
      </div>
      <div className="hero__image">
        <img src={AgentScreen} />
      </div>
    </header>
  );
}

function HomepageInvestors() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div className={styles.investorcontainer}>
        <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className={styles.titlepill}>
            Backed by leading investors
          </div>
          <div style={{ paddingTop: '3rem' }}>
            <InvestorLogos className={styles.features} />
          </div>
        </div>
      </div>
    </>
  );
}

function HomepageIntimacy() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div className="container" style={{ paddingTop: '5rem' }}>
        <h1 className={styles.title}>Customer intimacy.<br></br>At scale.</h1>
        <p className={styles.subtitle} style={{ fontSize: '1.5rem' }}>Build relationships so personal, your users will think you're exclusive.</p>
      </div>
    </>
  );
}

function HomepageCarousel() {
  const { siteConfig } = useDocusaurusContext();
  const [products] = useState([
    {
      "id": "1000",
      "image": "/img/carousel/1000.svg",
      "text": "The customer lifecycle begins the very first time they land on your website.  From the first visit, customerOS catalogs user engagement across your website, webapps, mobile, and email so you have better insight into what???s resonating and how to personalize the customer journey.",
      "subtextTitle": "First-Party Event Tracking",
      "subtextContent": "Automatically track every event on your website, app, or email in a manner that???s compliant with GDPR, HIPAA, CCPA, and all other 4-letter Regulations. As our event trackers are always first-party by design, they are not impacted by add trackers or third-party cookie deprecation."
    },
    {
      "id": "1001",
      "image": "/img/carousel/1001.svg",
      "text": "Centralizing your customer data doesn't need to be difficult.  Our web components, 3rd party integrations, and suite of APIs make it easy for you to bring all your customer data together in one place.",
      "subtextTitle": "Data Pipeline Tools",
      "subtextContent": "Use our open source ETL & reverse ETL tools to aggregate and federate customer data to and from your favorite applications."
    },
    {
      "id": "1002",
      "image": "/img/carousel/1002.svg",
      "text": "customerOS is designed from the ground up to be a true development platform.  It???s fast, secure, and easy to use.  By bringing all your customer data together in a transactional system, you can finally build the personalized experiences you???ve always wanted.",
      "subtextTitle": "GraphQL API",
      "subtextContent": "Build amazing experiences with real-time access to all your customer data.  We speak graphQL, REST, and gRPC."
    },
    {
      "id": "1003",
      "image": "/img/carousel/1003.svg",
      "text": "Data normalization is hard.  Our open source integrations do the dirty work so you always have clean data to build on.  Clean data is better data.  And better data unlock delightful customer experiences.",
      "subtextTitle": "Data Integration",
      "subtextContent": "Combine and organize customer data across different sources and applications into a single, easy-to-use schema. Eliminate bad or duplicate data."
    },
    {
      "id": "1004",
      "image": "/img/carousel/1004.svg",
      "text": "Track and record customer behavior, transactions, demographic, conversational, and social data out of the box.  Extend customerDB further by appending your own custom attributes.  customerDB is your single source of truth for all your customer interactions across your business.",
      "subtextTitle": "CustomerDB",
      "subtextContent": "A real-time, high performance, transactional database that is the customer system of record for all your applications. Any because we???re open source, you can self-host, giving you complete control of your data."
    }
  ]);

  const productTemplate = (product) => {
    return (
      <div className="features-carousel-container">
        <div className="column col--6">
          <div className="features-carousel-image">
            <img src={useBaseUrl(product.image)} style={{ maxWidth: '100%' }} />
          </div>
        </div>
        <div className="features-carousel-text">
          <div style={{ padding: '0 30px 30px 30px' }}>
            {product.text}
          </div>
          <div style={{ padding: '30px' }}>
            <h3>{product.subtextTitle}</h3>
            <p>{product.subtextContent}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container justify-content-center" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className={styles.titlepill}>
          customerOS
        </div>
        <Carousel style={{ paddingTop: '10px' }}
          value={products} numVisible={1} numScroll={1} circular='true'
          itemTemplate={productTemplate} className='features-carousel'
          header={<h2 className={styles.subtitle} style={{ margin: '30px' }}>The benefits of a Customer-centric approach</h2>} />
      </div>
    </>
  );
}

function HomepageBetterData() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div className={styles.betterdatacontainer} style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div>
            <h1 className={styles.title}>Better experiences start with better data.</h1>
            <p className={styles.subtitle}>A true 360 degree view of your customers with customerOS</p>
          </div>
        </div>
        <div>
          <img src={CustomerWindow} className={styles.window} />
        </div>
      </div>
    </>
  );
}

function HomepageIntegrations() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <h1 className={styles.integrationsTitle} style={{fontSize: '3em'}}>100s of apps.</h1>
        <h2 className={styles.integrationsTitle} style={{fontSize: '3em'}}>Unlimited possibilities.</h2>
        <h3 className={styles.integrationsSubtitle} style={{textTransform: 'uppercase', lineHeight: '40px'}}>never miss a conversation</h3>
        <h3 className={styles.integrationsText} style={{fontSize: '18px'}}>Openline supports over one hundred apps out of the box and support for more is added every month</h3>
        <img src={Integrations} alt="Integration Logos" className={styles.integrations} />
      </div>
    </>
  );
}

function HomepageGithub() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <h1 className={styles.title}>Join our Open Source Community</h1>
        <h2 className={styles.subtitle}>Browse on GitHub</h2>
        <div className={styles.centeredtext}>
          <a href="https://github.com/openline-ai" rel="noreferrer" target="_blank">
            <img src={GithubButton} width={101} height={101} alt="Github Logo" />
          </a>
        </div>
      </div>
    </>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Openline makes it easy to get a complete 360-degree view of your customers. We bring together behavioral, demographic, transactional, conversational, and social data to give you the most comprehensive view of your customer relationship.">
      <HomepageHeader />
      <main>
        <HomepageInvestors />
        <HomepageIntimacy />
        <HomepageCarousel />
        <HomepageBetterData />
        <HomepageIntegrations />
        <HomepageGithub />
      </main>
    </Layout>
  );
}
