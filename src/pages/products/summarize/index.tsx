import React, { useState } from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

function MeetingSummarization() {

  const { siteConfig } = useDocusaurusContext();
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [email, setEmail] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      // Code to upload file and show progress
      console.log("File uploaded!");
      setShowEmailInput(true);
    }
  };

  const handleUploadProgress = (event) => {
    const progress = Math.round((event.loaded * 100) / event.total);
    setUploadProgress(progress);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGetSummary = () => {
    // Code to process the uploaded file and send summary to email
    console.log(`Sending summary to ${email}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to our meeting transcription service</h1>
      <p className={styles.subheading}>Upload your meeting recording and get a diarized transcription</p>
      {!showEmailInput && (
        <form onSubmit={handleSubmit}>
          <label className={styles.uploadLabel}>
            <input type="file" onChange={handleFileChange} />
          </label>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.uploadButton}>
              Upload
            </button>
          </div>
          {uploadProgress > 0 && (
            <div className={styles.progressContainer}>
              <div className={styles.progressBar} style={{ width: `${uploadProgress}%` }}></div>
            </div>
          )}
        </form>
      )}
      {showEmailInput && (
        <form onSubmit={handleGetSummary}>
          <label className={styles.emailLabel}>
            Enter your email to receive your summary:
            <input type="email" value={email} onChange={handleEmailChange} className={styles.emailInput} />
          </label>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.summaryButton}>
              Get my summary now!
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Summarize your meetings`}
      description="Openline makes it easy to get a complete 360-degree view of your customers. We bring together behavioral, demographic, transactional, conversational, and social data to give you the most comprehensive view of your customer relationship.">
      <main>
        <MeetingSummarization />
      </main>
    </Layout>
  );
}