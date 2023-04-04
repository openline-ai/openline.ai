// Note this is the homepage and is here because of limitations of fetching blog posts in the homepage
// https://kgajera.com/blog/display-recent-blog-posts-on-home-page-with-docusaurus/

import React, { useState } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SignUpFormReact from '../components/Signup';
import { Carousel } from 'primereact/carousel';
import Head from '@docusaurus/Head';
import { TypeAnimation } from '../components/TypeAnimation';

import DataPipeline from '@site/static/img/home/DataPipeline.png';
import DataSprawl from '@site/static/img/home/DataSprawl2.png';
import OpenlineInterface from '@site/static/img/home/OpenlineInterface.png';
import Hero from '@site/static/img/home/hero.png';
import GithubButton from '@site/static/img/home/GithubButton.png';
import InvestorLogos from '@site/static/img/home/InvestorLogos.svg';
import CustomerWindow from '@site/static/img/home/CustomerWindow.png';
import Integrations from '@site/static/img/home/IntegrationLogos.png';

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
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <header className={clsx('hero hero--primary')}>
        <div className="container">
          <div className="github-stars"><a className="github-button" href="https://github.com/openline-ai/openline-customer-os" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="small" data-show-count="true" aria-label="Star openline-ai/openline-customer-os on GitHub">Star</a></div>
          <p className="hero__tagline">Built for customer-centric organisations</p>
          <h1 className="hero__title"><span style={{ color: '#8C8C8C', textDecoration: 'line-through' }}>Fight your data.</span><br></br> Love your customers.</h1>
          <p className="hero__subtitle">Openline brings all your customer data under one roof, allowing you to focus on what's really important - building deeper relationships with your customers and supercharging the productivity of your customer-facing teams.</p>
          <SignUpFormReact waitlistName='Waitlist-Homepage' />
        </div>
        <div className="hero__overlay">
          <img src={Hero} className="hero__image" />
        </div>
      </header>
      <div className="hero__features">
        <div className="hero__feature_item">
          <h2>
            End Data Sprawl
          </h2>
          <p>
            All data can be mapped to Openline's customer graph in a couple of clicks - allowing you to not worry about data pipelines or data warehouses or ETL or ELT or... you get the idea.
          </p>
        </div>
        <div className="hero__feature_item">
          <h2>
            Any Data Source
          </h2>
          <p>
            Openline supports over 100 integrations to make sure that whether it's billing info, marketing emails or support tickets, it's all visible in one customer timeline.
          </p>
        </div>
        <div className="hero__feature_item">
          <h2>
            One Workspace
          </h2>
          <p>
            A single place to manage your customer relationships. No more hurriedly jumping from tab to tab every time you pick up the phone with summarised data the moment they ring.
          </p>
        </div>
      </div>
    </>
  );
}

function HomepageInvestors() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div className={styles.investorcontainer}>
        <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem', maxWidth: '1100px' }}>
          <div className={styles.titlepill}>
            Backed by leading investors
          </div>
          <div style={{ paddingTop: '2rem' }}>
            <InvestorLogos className={styles.features} />
          </div>
          <hr className="solid"></hr>
          <div className="hero__quote">
            <q className="quote">
              With Openline, our customer-facing teams were able to understand our customers current status <mark>in seconds</mark> rather than minutes.
            </q>
            <br></br>
            <cite className="quote-citation"><b>Ana Smith</b>, Head of Customer Success, Big Impressive Tech Company</cite>
          </div>
        </div>
      </div>
    </>
  );
}

const WORDS_TO_ANIMATE = ['how to get it', 'how to transform it', 'how to load it', 'how to keep it up to date', 'how to keep it secure', 'how to keep it performant', 'how to keep it consistent', 'how to keep it accurate', 'how to keep it relevant', 'how to keep it accessible', 'how to keep it auditable', 'how to keep it compliant']

function HomepageProblem() {
  const { siteConfig } = useDocusaurusContext();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <div className="container" style={{ paddingTop: '5rem' }}>
        <div className={styles.titlepillalt}>The problem</div>
        <h1 className={styles.title}>How do you bring your data together to drive business outcomes?</h1>
        <div className={styles.problem__items}>
          <div className={styles.problem__item}>
            <p className={styles.problem__subtitle}>Maybe with an in-house Data team...</p>
            <img src={DataPipeline} style={{ padding: '1rem' }} />
            <p className={styles.paragraph}>Prepare to make a lot of new hires - or worse, require everyone in the company to become data engineers.
              After you identify what data you need and where it's stored, you'll need to work out...</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}><b>how to <TypeAnimation /></b></div>
            <p className={styles.paragraph}>... you get the idea.
            </p>
          </div>
          <div className={styles.problem__item}>
            <p className={styles.problem__subtitle}>...or try to keep doing what you're doing</p>
            <img src={DataSprawl} />
            <p className={styles.paragraph}>I mean, you can try?</p>
          </div>
        </div>
        <div className={styles.titlepillalt}>The solution</div>
        <h1 className={styles.title}>But there's another option...</h1>
        <div className={styles.solution__items}>
          <div className={styles.solution__item}>
            <p className={styles.problem__subtitle}>Openline brings your customer data together</p>
            <img src={OpenlineInterface} className={styles.home__image} />
            <p className={styles.paragraph}>With all your customer data updated in real-time, where your team works, you don't need to worry about having stale data when analysing what is really going on with your customers.</p>
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
      "text": "The customer lifecycle begins the very first time they land on your website.  From the first visit, customerOS catalogs user engagement across your website, webapps, mobile, and email so you have better insight into what’s resonating and how to personalize the customer journey.",
      "subtextTitle": "First-Party Event Tracking",
      "subtextContent": "Automatically track every event on your website, app, or email in a manner that’s compliant with GDPR, HIPAA, CCPA, and all other 4-letter Regulations. As our event trackers are always first-party by design, they are not impacted by add trackers or third-party cookie deprecation."
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
      "text": "customerOS is designed from the ground up to be a true development platform.  It’s fast, secure, and easy to use.  By bringing all your customer data together in a transactional system, you can finally build the personalized experiences you’ve always wanted.",
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
      "subtextContent": "A real-time, high performance, transactional database that is the customer system of record for all your applications. Any because we’re open source, you can self-host, giving you complete control of your data."
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
        <h1 className={styles.integrationsTitle} style={{ fontSize: '3em' }}>100s of apps.</h1>
        <h2 className={styles.integrationsTitle} style={{ fontSize: '3em' }}>Unlimited possibilities.</h2>
        <h3 className={styles.integrationsSubtitle} style={{ textTransform: 'uppercase', lineHeight: '40px' }}>never miss a conversation</h3>
        <h3 className={styles.integrationsText} style={{ fontSize: '18px' }}>Openline supports over one hundred apps out of the box and support for more is added every month</h3>
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

function BlogCard({name, image, url, description}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className='card'>
        <div className={styles.card__image}>
          <Link to={url}>
            <img src={image} alt={`${name}'s image`}/>
          </Link>
        </div>
        <div className="card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div style={{textAlign: 'center'}}>
            <b>
              <Link className="button button--secondary" to={url}>Read it here</Link>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home({recentPosts}): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
    console.log(recentPosts)
  return (
    <Layout
      title={`Home`}
      description="Openline makes it easy to get a complete 360-degree view of your customers. We bring together behavioral, demographic, transactional, conversational, and social data to give you the most comprehensive view of your customer relationship.">
      <Head>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Head>
      <Head>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageInvestors />
        <HomepageProblem />
        {/* <HomepageIntimacy /> */}
        <HomepageCarousel />
        <HomepageBetterData />
        <HomepageIntegrations />
        <div className="row margin-horiz--xs">
        {recentPosts.map(({ content }) => (
            <BlogCard key={content.metadata.permalink} name={content.frontMatter.title} image={content.assets.image} url={content.metadata.permalink} description={content.metadata.description} />
        ))}
        </div>
        <HomepageGithub />
      </main>
    </Layout>
  );
}
