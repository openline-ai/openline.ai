import React, { useState } from 'react';
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

  const [team] = useState([
    {
      "id": "001",
      "image": "Matt",
      "firstName": "Matt",
      "lastName": "Brown",
      "title": "Founder & CEO",
      "linkedin": "https://www.linkedin.com/in/mateocafe/",
      "twitter": "https://twitter.com/mateocafe_",
    },
    {
      "id": "002",
      "image": "Jonty",
      "firstName": "Jonty",
      "lastName": "Knox",
      "title": "Founder & CPO",
      "linkedin": "https://www.linkedin.com/in/jontyknox/",
      "twitter": "https://twitter.com/jontyk",
    },
    {
      "id": "003",
      "image": "Vasi",
      "firstName": "Vasi",
      "lastName": "Coscotin",
      "title": "Founder & CTO",
      "linkedin": "https://www.linkedin.com/in/vasilica-coscotin-2755b153/",
    },
    {
      "id": "004",
      "image": "Edi",
      "firstName": "Edi",
      "lastName": "Firut",
      "title": "Founding Engineer",
      "linkedin": "https://www.linkedin.com/in/eduard-firut-0bbb9469/",
    },
    {
      "id": "005",
      "image": "Antoine",
      "firstName": "Antoine",
      "lastName": "Valot",
      "title": "UX Lead",
      "linkedin": "https://www.linkedin.com/in/avalot/",
      "twitter": "https://twitter.com/avalot",
    },
    {
      "id": "006",
      "image": "Alex",
      "firstName": "Alex",
      "lastName": "Basarab",
      "title": "Founding Engineer",
      "linkedin": "https://www.linkedin.com/in/alexandrubasarab/",
    },
    {
      "id": "007",
      "image": "Gabi",
      "firstName": "Gabi",
      "lastName": "Gontariu",
      "title": "Founding Engineer",
      "linkedin": "https://www.linkedin.com/in/gabrielgontariu/",
    },
    {
      "id": "008",
      "image": "Torrey",
      "firstName": "Torrey",
      "lastName": "Searle",
      "title": "Senior Engineer",
      "linkedin": "https://www.linkedin.com/in/torrey-searle-1725a11/",
      "twitter": "https://twitter.com/tsearle",
    },
    {
      "id": "009",
      "image": "Kasia",
      "firstName": "Kasia",
      "lastName": "Marciniszyn",
      "title": "Senior Engineer",
      "linkedin": "https://www.linkedin.com/in/k-marciniszyn/",
    },
  ]);

  return (
    <section className="section" style={{ paddingTop: '100px', paddingBottom: '50px', maxWidth: '1100px', margin: 'auto' }}>
      <div className="container">
        <div className='row' style={{ justifyContent: 'center' }}>

          {team.map((member) => {
            return (
              <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px', flex: 'inherit' }}>
                <div className='team-profile'>
                  <div className='profile-photos'>
                    {/* TODO: Hacky way below, update to just pass the component */}
                    {member.image === "Matt" && <img className='profile-photo' src={Matt}></img>}
                    {member.image === "Jonty" && <img className='profile-photo' src={Jonty}></img>}
                    {member.image === "Vasi" && <img className='profile-photo' src={Vasi}></img>}
                    {member.image === "Edi" && <img className='profile-photo' src={Edi}></img>}
                    {member.image === "Antoine" && <img className='profile-photo' src={Antoine}></img>}
                    {member.image === "Alex" && <img className='profile-photo' src={Alex}></img>}
                    {member.image === "Gabi" && <img className='profile-photo' src={Gabi}></img>}
                    {member.image === "Torrey" && <img className='profile-photo' src={Torrey}></img>}
                    {member.image === "Kasia" && <img className='profile-photo' src={Kasia}></img>}
                  </div>
                  <div className='row' style={{ paddingTop: '1rem' }}>
                    <div className='col'>
                      <h3 className='team-profile-titles'>{member.firstName}<br></br>{member.lastName}</h3>
                    </div>
                    <div className='col'>
                      <div style={{ textAlign: 'right', paddingRight: '1rem' }}>
                        {member.linkedin &&
                          <a className='social-media-logo' target='_blank' rel='noreferrer' href={member.linkedin}>
                            <LinkedInIcon />
                          </a>
                        }
                        {member.twitter &&
                          <a className='social-media-logo' target='_blank' rel='noreferrer' href={member.twitter}>
                            <TwitterIcon />
                          </a>
                        }
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <p className='team-profile-titles' style={{ fontSize: '1.2rem', fontWeight: '400', color: '#000000' }}>{member.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className='col' style={{ paddingBottom: '30px', maxWidth: '350px', flex: 'inherit' }}>
            <div className='team-profile'>
              <div className='profile-photos'>
                <img className='profile-photo' src={Outline}></img>
              </div>
              <div className='row' style={{ paddingTop: '1rem' }}>
                <div className='col'>
                  <h3 className='team-profile-titles' >Want to<br></br>be here?</h3>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <p><a href="mailto:careers@openline.ai" className='team-profile-titles' style={{ fontSize: '1.2rem', fontWeight: '400', color: '#A16AFF' }}>Send us a message!</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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