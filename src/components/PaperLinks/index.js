import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function FileIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

// "Paper" opens the PDF in a new tab (where it can be viewed or downloaded);
// "DOI" goes to the publisher's DOI page. Either can be omitted.
export default function PaperLinks({pdf, doi}) {
  const localPdf = useBaseUrl(pdf || '/');
  const pdfHref = pdf && /^https?:/.test(pdf) ? pdf : localPdf;
  return (
    <div className={styles.links}>
      {pdf && (
        <a className={`${styles.button} ${styles.primary}`} href={pdfHref} target="_blank" rel="noopener noreferrer">
          <FileIcon /> Paper
        </a>
      )}
      {doi && (
        <a className={`${styles.button} ${styles.secondary}`} href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer">
          <LinkIcon /> DOI
        </a>
      )}
    </div>
  );
}
