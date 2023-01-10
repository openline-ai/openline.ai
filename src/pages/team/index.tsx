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
import Antoine from '@site/static/img/team/antoine.png';
import Alex from '@site/static/img/team/alex.png';
import Gabi from '@site/static/img/team/gabi.png';
import Torrey from '@site/static/img/team/torrey.png';
import Kasia from '@site/static/img/team/kasia.png';
import Outline from '@site/static/img/team/outline.png';

function TeamHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('team__hero hero--primary')}>
      <div className="container">
        <h1 className="team__title">Meet the Openline CX Crusaders</h1>
        <p className="team__subtitle">The team making sure every communication experience you and your customers have is perfect.</p>
        <div style={{ paddingLeft: '30px' }}>
          <div className='border-button team-book-demo'><a href="mailto:careers@openline.ai" style={{ color: 'var(--ifm-hero-text-color)' }}>Become a CX Crusader</a></div>
        </div>
      </div>
      <div className="team__image">
        <TeamHeroImage />
      </div>
    </header>
  );
}

function Team() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className="section" style={{ paddingTop: '100px', paddingBottom: '50px', maxWidth: '1100px', margin: 'auto' }}>
      <div className="container">
        <div className='row' style={{ justifyContent: 'center' }}>
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px', flex: 'inherit' }}>
            <div className='team-profile'>
              <div className='profile-photos'>
                <img className='profile-photo' src={Matt}></img>
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
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px', flex: 'inherit' }}>
            <div className='team-profile'>
              <div className='profile-photos'>
                <img className='profile-photo' src={Jonty}></img>
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
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px', flex: 'inherit' }}>
            <div className='team-profile'>
              <div className='profile-photos'>
                <img className='profile-photo' src={Vasi}></img>
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
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px', flex: 'inherit' }}>
            <div className='team-profile'>
              <div className='profile-photos'>
                <img className='profile-photo' src={Edi}></img>
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
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px', flex: 'inherit' }}>
            <div className='team-profile'>
              <div className='profile-photos'>
                <img className='profile-photo' src={Antoine}></img>
              </div>
              <div className='row'>
                <div className='col'>
                  <h3 className='team-profile-titles' >Antoine<br></br>Valot</h3>
                </div>
                <div className='col'>
                  <div style={{ textAlign: 'right', paddingRight: '2rem', paddingTop: '0.5rem' }}>
                    <a className='social-media-logo' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/avalot/'>
                      <LinkedInIcon />
                    </a>
                    <a className='social-media-logo' target='_blank' rel='noreferrer' href='https://twitter.com/avalot/'>
                      <TwitterIcon />
                    </a>
                  </div>
                </div>
              </div>
              <h4 className='team-profile-titles' >UX Lead</h4>
            </div>
          </div >
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px', flex: 'inherit' }}>
            <div className='team-profile'>
              <div className='profile-photos'>
                <img className='profile-photo' src={Alex}></img>
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
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px', flex: 'inherit' }}>
            <div className='team-profile'>
              <div className='profile-photos'>
                <img className='profile-photo' src={Gabi}></img>
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
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px', flex: 'inherit' }}>
            <div className='team-profile'>
              <div className='profile-photos'>
                <img className='profile-photo' src={Torrey}></img>
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
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px', flex: 'inherit' }}>
            <div className='team-profile'>
              <div className='profile-photos'>
                <img className='profile-photo' src={Kasia}></img>
              </div>
              <div className='row'>
                <div className='col'>
                  <h3 className='team-profile-titles' >Kasia<br></br>Marciniszyn</h3>
                </div>
                <div className='col'>
                  <div style={{ textAlign: 'right', paddingRight: '2rem', paddingTop: '0.5rem' }}>
                    <a className='social-media-logo' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/k-marciniszyn/'>
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
              <h4 className='team-profile-titles' >Senior Engineer</h4>
            </div>
          </div>
          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px', flex: 'inherit' }}>
            <div className='team-profile'>
              <div className='profile-photos'>
                <img className='profile-photo' src={Outline}></img>
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
        <Team />
      </main>
    </Layout>
  );
}