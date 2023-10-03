import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";
import Quiz from "@components/Quiz"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NFRA Deep Dive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="sky">
        <div id="albertsons-penguin"></div>
        <div class="iceberg iceberg-left"></div>
        <div class="iceberg iceberg-right"></div>
        <div class="iceberg iceberg-middle"></div>
      </div>

      <div class="ocean">
        <div class="bubble-container">
          <div class="bubble bubble--1"></div>
          <div class="bubble bubble--2"></div>
          <div class="bubble bubble--3"></div>
          <div class="bubble bubble--4"></div>
          <div class="bubble bubble--5"></div>
          <div class="bubble bubble--6"></div>
          <div class="bubble bubble--7"></div>
          <div class="bubble bubble--8"></div>
          <div class="bubble bubble--9"></div>
          <div class="bubble bubble--10"></div>
          <div class="bubble bubble--11"></div>
          <div class="bubble bubble--12"></div>
        </div>
        <div class="penguin-container">
          <div id="nutpods-penguin"></div>
          <div id="miltons-penguin"></div>
          <div id="icelandic-penguin"></div>
          <div id="praegers-penguin"></div>
          <div id="oatly-penguin"></div>
        </div>
          <Quiz />
      </div>
    </div>
  );
}
