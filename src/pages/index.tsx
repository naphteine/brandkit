import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { SetStateAction, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [brandName, setBrandName] = useState("Brandkit");

  const nameChange = (event: { target: { value: SetStateAction<string> } }) => {
    setBrandName(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Brandkit</title>
        <meta name="description" content="Brand Generation Tool" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>Brandkit</h1>
        <em>Brand Generator</em>
      </header>
      <main>
        <h2>Options</h2>
        <section>
          <label htmlFor="brand">Brand Name</label>
          <input
            id="brand"
            name="brand"
            value={brandName}
            onChange={nameChange}
          />

          <br />

          <label htmlFor="spacing">Letter spacing</label>
          <input type="range" id="spacing" name="spacing" />
        </section>

        <h2>Results</h2>
        <section className={styles.resultbox} title="results">
          <article className={styles.gloock}>{brandName}</article>
          <article className={styles.outfit}>{brandName}</article>
          <article className={styles.archivo}>{brandName}</article>
          <article className={styles.vt323}>{brandName}</article>
          <article className={styles.gloock}>{brandName}</article>
          <article className={styles.outfit}>{brandName}</article>
          <article className={styles.archivo}>{brandName}</article>
          <article className={styles.vt323}>{brandName}</article>
          <article className={styles.gloock}>{brandName}</article>
          <article className={styles.outfit}>{brandName}</article>
          <article className={styles.archivo}>{brandName}</article>
          <article className={styles.vt323}>{brandName}</article>
        </section>
      </main>
    </>
  );
};

export default Home;
