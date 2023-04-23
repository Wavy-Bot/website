import React from "react";
import Head from "next/head";

export default function MainLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  title = `${title && `${title} — `}Wavy`;
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <meta
          name="description"
          content="Excuse Our Mess - Big Things Are Coming!"
        />
        <meta name="keywords" content="Wavy, Discord, Bot, Discord Bot" />
        <meta name="author" content="Wavy" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Excuse Our Mess - Big Things Are Coming!"
        />
        <meta
          property="og:image"
          content="https://wavybot.com/images/pv.webp"
        />
        <meta name="theme-color" content="#D22E61" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Excuse Our Mess - Big Things Are Coming!"
        />
        <meta
          name="twitter:image"
          content="https://wavybot.com/images/pv.webp"
        />
      </Head>
      <>{children}</>
    </>
  );
}
