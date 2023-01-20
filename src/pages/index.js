import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import {
  Header,
  SwipeSlider,
  WhoAreWe,
  Concepts,
  Publication,
} from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Slizzer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-[#e7e7e7] uppercase">
        <Header />
        <SwipeSlider />
        <WhoAreWe />
        <Concepts />
        <Publication />
      </div>
    </>
  );
}
