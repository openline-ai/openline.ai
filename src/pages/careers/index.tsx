import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css'
import Link from '@docusaurus/Link';


function CareersHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <div className={styles.careersBackground}>
        <div className={styles.careersHeader}>
          <h1 className={styles.careersTitle}>Careers</h1>
        </div>
      </div>
    </header>
  );
}

function Careers() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <section style={{ marginTop: '-30px', paddingBottom: '30px' }}>
      <div className={styles.careersContainer}>
        <div className={styles.careersIntro}>
          <h2>Working at Openline</h2>
          <p>Openline makes it easy for our clients get a complete 360-degree view of their customers. We help our customers bring together behavioral, demographic, transactional, conversational, and social data to give them the most comprehensive view of your customer relationship.</p>
          <p>Openline is a fast-growing startup headquartered in London, UK - but spread across 8 countries and 2 continents. We are a team of engineers, designers, and product managers who are passionate about building the next generation of customer engagement tools. We are backed by top-tier investors including Y Combinator, Seedcamp, Crane Venture Partners and Cocoa VC.</p>
        </div>
        <h2 style={{textAlign: 'center'}}>Current Openings</h2>
          <div className={styles.careersRow}>
            <div className={styles.careersTable}>
              <h3>Front-End Engineer</h3>
              <p><i>Remote, World</i></p>
              <p>Openline is looking for a front-end engineer to join our team. You will be responsible for building the next generation of customer engagement tools. You will work closely with our product and design teams to build a product that our customers love.</p>
              <Link className="button button--secondary" to="/careers/front-end-engineer/">Read it here</Link>
            </div>
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
      title={`Careers`}
      description="Openline makes it easy to get a complete 360-degree view of your customers. We bring together behavioral, demographic, transactional, conversational, and social data to give you the most comprehensive view of your customer relationship.">
      <main>
        <CareersHero />
        <Careers />
      </main>
    </Layout>
  );
}