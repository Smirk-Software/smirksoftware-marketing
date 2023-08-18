import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        {/* <p style={{ minHeight: 100 }} className="hero__subtitle">
          {siteConfig.tagline}
        </p> */}
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/markdown-page"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Forum&family=Fredericka+the+Great&family=Poiret+One&family=Sansita+Swashed&display=swap"
        rel="stylesheet"
      ></link>
      <Layout
        title={`${siteConfig.title}`}
        description="Delightful technology for teams in the field"
      >
        <HomepageHeader />
        <main>
          <div style={{ textAlign: "center" }}>
            <img src="img/smirklogo.png" />
            {/* <HomepageFeatures /> */}
          </div>
        </main>
      </Layout>
    </>
  );
}
