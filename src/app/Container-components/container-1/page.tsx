"use client";
import { useState } from "react";
import API_GET from "./api-Call";
import Image from "next/image";
import img1 from "../../../../public/img.jpg";
import { Col, Row } from "antd";
import imgBoom from "../../../../public/Boom-Icon-Transparent-Images.png"

interface User {
  status: string;
  code: string;
  locale: string;
  seed: null;
  total: number;
  data: [
    {
      id: number;
      uuid: string;
      firstname: string;
      lastname: string;
      username: string;
      password: string;
      email: string;
      ip: string;
      macAddress: string;
      website: string;
      image: string;
    }
  ];
}

export default function Container() {
  const [boll, setBoll] = useState<boolean>(false);
  const [message, setMessage] = useState<User | null>(null);
  async function GetAPI() {
    const API = await API_GET(
      "https://fakerapi.it/api/v2/users?_quantity=1&_gender=male"
    );
    setTimeout(() => {
      setMessage(API);
    }, 4000); 
  }
  return (
    <>
      <Row style={{ height: "0px" }}>
        <Col>
          <button
            style={{ height: "60px", width: "200px",padding: "0.5rem 1rem",  
              display: "inline-flex",  
              alignItems: "center",    
              justifyContent: "center",
              cursor: "pointer",        
              border: "1px solid transparent" }}
            onClick={() => {
              setBoll((prevState) => !prevState), GetAPI();
            }}
          >
            Click for call API
          </button>
        </Col>
      </Row>
      <Row
        style={{
          position: "relative",
          left: "300px",
          height: "0px",
          top: "50px",
        }}
      >
        <Col>
          <Image src={img1} height={200} width={200} alt=""></Image>
        </Col>
        <Col style={{ height: "0px", width: "389px" }}>
          {boll && (
            <div
              style={{
                height: "360px",
                width: "380px",
                backgroundColor: "blue",
                position: "relative",
                top: "-80px",
                left: "80px",
                padding: "10px 0 0 10px",
              }}
            >
              {message !== null && (
                <>
                  <p>
                    firstname : {message?.data[0].firstname}
                    <br />
                    <br />
                    lastlast : {message?.data[0].lastname}
                    <br />
                    <br />
                    email : {message?.data[0].email}
                    <br />
                    <br />
                    ip : {message?.data[0].ip}
                    <br />
                    <br />
                    macAddress : {message?.data[0].macAddress}
                    <br />
                    <br />
                    name : {message?.data[0].firstname}
                    <br />
                    <br />
                    webSite : {message?.data[0].website}
                    <br />
                    <br />
                    status : {message?.status}
                    <br />
                  </p>
                  <hr style={{ transform: "translate(-6px , 10px)" }} />
                  <br />
                  <p style={{ marginTop: "20px", paddingRight:"20px"}}>
                    ho creato 2 componenti 1 tsx e 1 ts da tsx chiamo il ts e da qui ts che chiama con fetch e quando arriva da tsx seleziono le info da prendere
                  </p>
                </>
              )}
              
              {message == null && <h1>Aspetta un secondo .... </h1> }
            </div>
          )}
          {boll == false && <Image style={{transform:"translate(30px , -84px)"}} src={imgBoom} alt=""></Image>}
        </Col>
      </Row>
    </>
  );
}
