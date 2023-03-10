import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { SetStateAction, useState } from "react";
import randomColor from "randomcolor";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [brandName, setBrandName] = useState("Brandkit");
  const [spacing, setSpacing] = useState(0.1);

  const fonts = [
    "Gloock",
    "Outfit",
    "Archivo",
    "VT323",
    "Tilt Neon",
    "Bebas Neue",
    "Josefin Sans",
  ];

  const nameChange = (event: { target: { value: SetStateAction<string> } }) => {
    setBrandName(event.target.value);
  };

  const spacingChange = (event: any) => {
    setSpacing(event.target.value);
  };

  const randomFont = () => {
    return fonts[Math.floor(Math.random() * fonts.length)];
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
          <input
            type="range"
            id="spacing"
            name="spacing"
            min={-20}
            max={20}
            value={spacing}
            onChange={spacingChange}
          />
        </section>

        <h2>Results</h2>
        <section className={styles.resultbox} title="results">
          {}
          <article
            style={{
              backgroundColor: randomColor(),
              letterSpacing: spacing + "px",
              fontFamily: randomFont(),
            }}
          >
            {brandName}
          </article>
          <article
            style={{
              backgroundColor: randomColor(),
              letterSpacing: spacing + "px",
              fontFamily: randomFont(),
            }}
          >
            {brandName}
          </article>
          <article
            style={{
              backgroundColor: randomColor(),
              letterSpacing: spacing + "px",
              fontFamily: randomFont(),
            }}
          >
            {brandName}
          </article>
          <article
            style={{
              backgroundColor: randomColor(),
              letterSpacing: spacing + "px",
              fontFamily: randomFont(),
            }}
          >
            {brandName}
          </article>
          <article
            style={{
              backgroundColor: randomColor(),
              letterSpacing: spacing + "px",
              fontFamily: randomFont(),
            }}
          >
            {brandName}
          </article>
          <article
            style={{
              backgroundColor: randomColor(),
              letterSpacing: spacing + "px",
              fontFamily: randomFont(),
            }}
          >
            {brandName}
          </article>
          <article
            style={{
              backgroundColor: randomColor(),
              letterSpacing: spacing + "px",
              fontFamily: randomFont(),
            }}
          >
            {brandName}
          </article>
          <article
            style={{
              backgroundColor: randomColor(),
              letterSpacing: spacing + "px",
              fontFamily: randomFont(),
            }}
          >
            {brandName}
          </article>
          <article
            style={{
              backgroundColor: randomColor(),
              letterSpacing: spacing + "px",
              fontFamily: randomFont(),
            }}
          >
            {brandName}
          </article>
          <article
            style={{
              backgroundColor: randomColor(),
              letterSpacing: spacing + "px",
              fontFamily: randomFont(),
            }}
          >
            {brandName}
          </article>
          <article
            style={{
              backgroundColor: randomColor(),
              letterSpacing: spacing + "px",
              fontFamily: randomFont(),
            }}
          >
            {brandName}
          </article>
          <article
            style={{
              backgroundColor: randomColor(),
              letterSpacing: spacing + "px",
              fontFamily: randomFont(),
            }}
          >
            {brandName}
          </article>
        </section>
      </main>
    </>
  );
};

export default Home;
