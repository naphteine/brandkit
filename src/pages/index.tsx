import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { SetStateAction, useEffect, useState } from "react";
import randomColor from "randomcolor";
import { RiAiGenerate } from "react-icons/ri";

import adjectives from "../json/adjectives.json";
import names from "../json/names.json";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [brandName, setBrandName] = useState("Brandkit");
  const [spacing, setSpacing] = useState(0.1);

  const [itemsData, setItemsData] = useState([
    { bg: "#ffffff", font: "Gloock" },
  ]);

  const allFonts = [
    "Amatic SC",
    "Archivo",
    "Bebas Neue",
    "Black Ops One",
    "Cherry Bomb One",
    "Dancing Script",
    "Foldit",
    "Gloock",
    "Great Vibes",
    "Josefin Sans",
    "Kaushan Script",
    "Lilita One",
    "Mali",
    "Moirai One",
    "Outfit",
    "Rubik Dirt",
    "Rubik Mono One",
    "Sacramento",
    "Special Elite",
    "Staatliches",
    "Tektur",
    "Tilt Neon",
    "Tsukimi Rounded",
    "VT323",
    "Zeyada",
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

  const randomName = () => {
    const selectFrom = [
      `${names[Math.floor(Math.random() * names.length)]}`,
      `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${
        names[Math.floor(Math.random() * names.length)]
      }`,
    ];

    setBrandName(selectFrom[Math.floor(Math.random() * selectFrom.length)]);
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

            <RiAiGenerate onClick={randomName} size={16} />

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
              title="Click to copy the color"
              key={index}
              className={styles.item}
              onClick={() => {
                navigator.clipboard.writeText(item.bg);
              }}
              style={{
                backgroundColor: item.bg,
                fontFamily: item.font,
              }}
            >
              <div style={{ letterSpacing: spacing | 0.1 }}>{brandName}</div>

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
