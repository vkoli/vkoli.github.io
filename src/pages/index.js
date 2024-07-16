import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ReactMarkdown from 'react-markdown'
import styles from './index.module.css';
import DocusaurusImageUrl from '@site/static/img/profile_pic.jpeg';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className='main'>
        <div className='pic'>
             <img src={DocusaurusImageUrl} alt="Photo" />
        </div>
        <p className="bio">I'm a PhD student in the Department of Data Science at New Jersey Institute of Technology (NJIT). 
          I have a background in software development and data analysis. I graduated summa cum laude with B.S. in Computer Science and a minor in Data Analytics from NJIT.
          <br />
          My research interests broadly relate to how we communicate online—how we affect and are affected by systems of online communication.
          Currently, I'm working on how communicative visualization are used by scientific domain experts. </p>
      </main>
      <br></br>
      <br></br>
    </Layout>
  );
}
