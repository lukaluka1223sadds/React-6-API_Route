"use client";

import styles from "./cardInfo.module.css";
import API_GET from "./api-Call";
import { useState, useEffect } from "react";
import Loading from "./loading";

interface Message {
  status: string;
  code: number;
  locale: string;
  seed: null;
  total: number;
  data: [
    {
      type: string;
      number: number;
      expiration: number;
      owner: string;
    }
  ];
}

export const CardInfo = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<null | Message>(null);

  async function apiCall() {
    const response = await API_GET();
    return response;
  }

  useEffect(() => {
    async function fetchData() {
      const messag = await apiCall();
      setTimeout(() => {
        setMessage(messag);
        setLoading(false);
      }, 4000);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.div1}>
      {loading ? <Loading /> :
      <>
      <p>
        message status : {message?.status}<br/><br/>
        type : {message?.data[0].type}<br/><br/>
        number : {message?.data[0].number}<br/><br/>
        expiration : {message?.data[0].expiration}<br/><br/>
        owner : {message?.data[0].owner}<br/><br/>
      </p>
      <hr /><br/><br/>
      <p>
        ho creato 3 componenti 2 tsx e 1 ts quando chiamo da tsx_1 il tsx_2 questo chiama con funzione asincrona
        il ts_3 e da qui che chiama il fetch ma con revalidate ogni 15 secondi 
      </p>
       </>}

    </div>
  );
};