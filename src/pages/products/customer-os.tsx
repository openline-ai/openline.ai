import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`customerOS`}
        description="Openline makes it easy to get a complete 360-degree view of your customers. We bring together behavioral, demographic, transactional, conversational, and social data to give you the most comprehensive view of your customer relationship.">
        <main>
          <p>Hello</p>
        </main>
      </Layout>
    );
  }