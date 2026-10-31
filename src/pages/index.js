import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ReactMarkdown from 'react-markdown'
import styles from './index.module.css';
import DocusaurusImageUrl from '@site/static/img/profile_pic.jpeg';
import Ic2s2Photo from '@site/static/img/gallery/ic2s2-2024-poster.jpg';
import TulipsPhoto from '@site/static/img/gallery/tulips.jpg';
import CeiePhoto from '@site/static/img/gallery/ceie-learning-in-action-2025.jpg';
import GhcPhoto from '@site/static/img/gallery/grace-hopper-2023.jpg';
import AiDayPhoto from '@site/static/img/gallery/ai-exploration-day-2026.jpg';

// Mosaic of photos below the bio. `size` picks the tile shape (big, tall or wide);
// `position` sets the crop focus; the caption, if any, shows on hover.
const galleryPhotos = [
  {
    src: AiDayPhoto,
    alt: "Vrushali Koli presenting at NJIT's AI Exploration Day",
    caption: "Presenting at NJIT's AI Exploration Day · Mar 2026",
    size: 'big',
    position: '30% center',
  },
  {
    src: Ic2s2Photo,
    alt: 'Vrushali Koli presenting a poster at IC2S2 2024',
    caption: 'Poster at IC2S2, Philadelphia · July 2024',
    size: 'tall',
    position: '75% center',
  },
  {
    src: TulipsPhoto,
    alt: 'Vrushali Koli in a tulip field',
    size: 'tall',
  },
  {
    src: CeiePhoto,
    alt: 'Vrushali Koli with colleagues at the CEIE Learning in Action conference at NJIT',
    caption: 'Learning in Action conference, NJIT · Aug 2025',
    size: 'wide',
    position: 'center 35%',
  },
  {
    src: GhcPhoto,
    alt: 'Vrushali Koli with colleagues at the 2023 Grace Hopper Celebration',
    caption: 'Grace Hopper Celebration · Sept 2023',
    size: 'wide',
    position: 'center 62%',
  },
];

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
          <img src={DocusaurusImageUrl} alt="Vrushali Koli" />
        </div>
        <div className="bio">
          <p>I'm a PhD student in the Department of Data Science at New Jersey Institute of Technology (NJIT),
          where I'm a research assistant in the <Link href="https://niiv.njitvis.com/">Intelligible Information Visualization (NiiV) Lab</Link>, advised by Dr. Aritra Dasgupta.
          I have a background in software development and data analysis. I graduated summa cum laude with B.S. in Computer Science and a minor in Data Analytics from NJIT.</p>
          <p>My research interests broadly relate to how we communicate online—how we affect and are affected by systems of online communication.
          Currently, I'm working on how communicative visualization are used by scientific domain experts.</p>
          <p>See my <Link to="/research">research &amp; publications</Link> or
          my <Link href="https://scholar.google.com/citations?user=XAv86csAAAAJ&amp;hl=en">Google Scholar</Link> profile.</p>
        </div>
        <div className='collage'>
          {galleryPhotos.map(({src, alt, caption, size, position}) => (
            <figure className={clsx('collage__item', `collage__item--${size}`)} key={src} tabIndex={caption ? 0 : undefined}>
              <img src={src} alt={alt} loading="lazy" style={position ? {objectPosition: position} : undefined} />
              {caption && <figcaption>{caption}</figcaption>}
            </figure>
          ))}
        </div>
      </main>
      <br></br>
      <br></br>
    </Layout>
  );
}
