import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { SetStateAction, useEffect, useState } from "react";
import randomColor from "randomcolor";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [brandName, setBrandName] = useState("Brandkit");
  const [spacing, setSpacing] = useState(0.1);

  const [itemsData, setItemsData] = useState([
    { bg: "#ffffff", font: "Gloock" },
  ]);

  const allFonts = [
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
    return allFonts[Math.floor(Math.random() * allFonts.length)];
  };

  const regenerate = () => {
    const generated = [];

    for (let i = 0; i < 32; i++) {
      generated.push({
        bg: randomColor(),
        font: randomFont(),
      });
    }

    setItemsData(generated);
  };

  useEffect(() => {
    regenerate();
  }, []);

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
        <em>Brand Generation Tool</em>
      </header>
      <main>
        <div className={styles.options}>
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

          <button onClick={regenerate}>Regenerate</button>
        </div>

        <h2>Results</h2>
        <section className={styles.resultbox} title="results">
          {itemsData.map((item, index) => (
            <article
              key={index}
              className={styles.item}
              style={{
                backgroundColor: item.bg,
                fontFamily: item.font,
              }}
            >
              <div style={{ letterSpacing: spacing | "normal" }}>
                {brandName}
              </div>

              <div className={styles.details}>
                <p>{item.font}</p>
                <p>{item.bg}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
