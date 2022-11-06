import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from '@theme/Layout';
import clsx from 'clsx';
import SignUpFormReact from '@site/src/components/Signup';

import TeamHeroImage from '@site/static/img/TeamHero.svg';
import LinkedInIcon from "@site/static/img/icons/linkedin.svg";
import TwitterIcon from "@site/static/img/icons/twitter.svg";
import Matt from '@site/static/img/team/matt.png';
import Jonty from '@site/static/img/team/jonty.png';
import Vasi from '@site/static/img/team/vasi.png';
import Edi from '@site/static/img/team/edi.png';
import Fabio from '@site/static/img/team/fabio.png';
import Alex from '@site/static/img/team/alex.png';
import Gabi from '@site/static/img/team/gabi.png';
import Torrey from '@site/static/img/team/torrey.png';
import Outline from '@site/static/img/team/outline.png';

function TeamHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <h1 className="hero__title">Meet the Openline CX Crusaders</h1>
        <p className="hero__subtitle">The team making sure every communication experience you and your customers have is perfect.</p>
        <div className='border-button team-book-demo'><a href="mailto:careers@openline.ai" style={{ color: '#100024' }}>Become a CX Crusader</a></div>
        <SignUpFormReact />
      </div>
      <div className="">
        <TeamHeroImage />
      </div>
    </header>
  );
}

function TeamTitle() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div className='container'>
        <div className="div className='row' justify-content-center">
          <div className='col col--4'>
            <div className="title text-center">
              <h3 className="gradient-text mission-control">Meet the Openline CX Crusaders</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Team() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className="section" style={{ paddingTop: '0px', paddingBottom: '50px' }}>
      <div className='container'>
        <div className='row'>
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px' }}>
            <div className='team-profile'>
              <div className='container profile-photos'>
                <a className='profile-photo'>
                  <img src={Matt} width='284px' height='251px' ></img>
                </a>
              </div>
              <div className='row'>
                <div className='col'>
                  <h3 className='team-profile-titles' >Matt<br></br>Brown</h3>
                </div>
                <div className='col'>
                  <div style={{ textAlign: 'right', paddingRight: '2rem', paddingTop: '0.5rem' }}>
                    <a className='social-media-logo' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/mateocafe/'>
                      <LinkedInIcon />
                    </a>
                    <a className='social-media-logo' target='_blank' rel='noreferrer' href='https://twitter.com/mateocafe_'>
                      <TwitterIcon />
                    </a>
                  </div>
                </div>
              </div>
              <h4 className='team-profile-titles' >Founder & CEO</h4>
            </div>
          </div>
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px' }}>
            <div className='team-profile'>
              <div className='container profile-photos'>
                <a className='profile-photo'>
                  <img src={Jonty} width='284px' height='251px' ></img>
                </a>
              </div>
              <div className='row'>
                <div className='col'>
                  <h3 className='team-profile-titles' >Jonty<br></br>Knox</h3>
                </div>
                <div className='col'>
                  <div style={{ textAlign: 'right', paddingRight: '2rem', paddingTop: '0.5rem' }}>
                    <a className='social-media-logo' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jontyknox/'>
                      <LinkedInIcon />
                    </a>
                    <a className='social-media-logo' target='_blank' rel='noreferrer' href='https://twitter.com/jontyk'>
                      <TwitterIcon />
                    </a>
                  </div>
                </div>
              </div>
              <h4 className='team-profile-titles' >Founder & CPO</h4>
            </div>
          </div>
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px' }}>
            <div className='team-profile'>
              <div className='container profile-photos'>
                <a className='profile-photo'>
                  <img src={Vasi} width='284px' height='251px' ></img>
                </a>
              </div>
              <div className='row'>
                <div className='col'>
                  <h3 className='team-profile-titles' >Vasi<br></br>Coscotin</h3>
                </div>
                <div className='col'>
                  <div style={{ textAlign: 'right', paddingRight: '2rem', paddingTop: '0.5rem' }}>
                    <a className='social-media-logo' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/vasilica-coscotin-2755b153/'>
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
              <h4 className='team-profile-titles' >Founder & CTO</h4>
            </div>
          </div>
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px' }}>
            <div className='team-profile'>
              <div className='container profile-photos'>
                <a className='profile-photo'>
                  <img src={Edi} width='284px' height='251px' ></img>
                </a>
              </div>
              <div className='row'>
                <div className='col'>
                  <h3 className='team-profile-titles' >Edi<br></br>Firut</h3>
                </div>
                <div className='col'>
                  <div style={{ textAlign: 'right', paddingRight: '2rem', paddingTop: '0.5rem' }}>
                    <a className='social-media-logo' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/eduard-firut-0bbb9469/'>
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
              <h4 className='team-profile-titles' >Founding Engineer</h4>
            </div>
          </div>
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px' }}>
            <div className='team-profile'>
              <div className='container profile-photos'>
                <a className='profile-photo'>
                  <img src={Fabio} width='284px' height='251px' ></img>
                </a>
              </div>
              <div className='row'>
                <div className='col'>
                  <h3 className='team-profile-titles' >Fabio<br></br>Basile</h3>
                </div>
                <div className='col'>
                  <div style={{ textAlign: 'right', paddingRight: '2rem', paddingTop: '0.5rem' }}>
                    <a className='social-media-logo' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/fffabs/'>
                      <LinkedInIcon />
                    </a>
                    <a className='social-media-logo' target='_blank' rel='noreferrer' href='https://twitter.com/fffabs'>
                      <TwitterIcon />
                    </a>
                  </div>
                </div>
              </div>
              <h4 className='team-profile-titles' >Design Master</h4>
            </div>
          </div >
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px' }}>
            <div className='team-profile'>
              <div className='container profile-photos'>
                <a className='profile-photo'>
                  <img src={Alex} width='284px' height='251px' ></img>
                </a>
              </div>
              <div className='row'>
                <div className='col'>
                  <h3 className='team-profile-titles' >Alex<br></br>Basarab</h3>
                </div>
                <div className='col'>
                  <div style={{ textAlign: 'right', paddingRight: '2rem', paddingTop: '0.5rem' }}>
                    <a className='social-media-logo' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/alexandrubasarab/'>
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
              <h4 className='team-profile-titles' >Founding Engineer</h4>
            </div>
          </div>
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px' }}>
            <div className='team-profile'>
              <div className='container profile-photos'>
                <a className='profile-photo'>
                  <img src={Gabi} width='284px' height='251px' ></img>
                </a>
              </div>
              <div className='row'>
                <div className='col'>
                  <h3 className='team-profile-titles' >Gabi<br></br>Gontariu</h3>
                </div>
                <div className='col'>
                  <div style={{ textAlign: 'right', paddingRight: '2rem', paddingTop: '0.5rem' }}>
                    <a className='social-media-logo' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/gabrielgontariu/'>
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
              <h4 className='team-profile-titles' >Founding Engineer</h4>
            </div>
          </div >
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px' }}>
            <div className='team-profile'>
              <div className='container profile-photos'>
                <a className='profile-photo'>
                  <img src={Torrey} width='284px' height='251px' ></img>
                </a>
              </div>
              <div className='row'>
                <div className='col'>
                  <h3 className='team-profile-titles' >Torrey<br></br>Searle</h3>
                </div>
                <div className='col'>
                  <div style={{ textAlign: 'right', paddingRight: '2rem', paddingTop: '0.5rem' }}>
                    <a className='social-media-logo' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/torrey-searle-1725a11/'>
                      <LinkedInIcon />
                    </a>
                    <a className='social-media-logo' target='_blank' rel='noreferrer' href='https://twitter.com/tsearle'>
                      <TwitterIcon />
                    </a>
                  </div>
                </div>
              </div>
              <h4 className='team-profile-titles' >Senior Engineer</h4>
            </div>
          </div >
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px' }}>
            <div className='team-profile'>
              <div className='container profile-photos'>
                <a className='profile-photo'>
                  <img src={Outline} width='284px' height='251px' ></img>
                </a>
              </div>
              <div className='row'>
                <div className='col'>
                  <h3 className='team-profile-titles' >Want to<br></br>be here?</h3>
                </div>
              </div>
              <a href="mailto:careers@openline.ai" className='team-profile-titles' style={{ color: '#A16AFF' }}>Send us a message!</a>
            </div>
          </div>
        </div >
      </div >
    </section >
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Team`}
      description="Openline makes it easy to get a complete 360-degree view of your customers. We bring together behavioral, demographic, transactional, conversational, and social data to give you the most comprehensive view of your customer relationship.">
      <main>
        <TeamHero />
        <TeamTitle />
        <Team />
      </main>
    </Layout>
  );
}