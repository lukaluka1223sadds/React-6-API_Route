"use client";

import imgCredit from "../../../../public/credit-card.png";
import Image from "next/image";
import { useState } from "react";
import {CardInfo} from "./card_Info"

export default function Container1() {
  const [boll, setBoll] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={()=>{setBoll(prevState => !prevState)}}
        style={{
          height: "60px",
          width: "200px",
          transform: "translate(0 , -353px ) ",
          padding: "0.5rem 1rem", 
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          border: "1px solid transparent",
        }}
      >
        click for call api
      </button>
      <Image
        src={imgCredit}
        height={400}
        style={{ transform: "translate( -60px , 0px)" }}
        width={400}
        alt=""
      ></Image>
      {boll && (
        <CardInfo></CardInfo>
      )}
    </>
  );
}
