"use client"
import React from "react";
import axios from "axios";

const styles = {
  card: {
    background: "#212121",
    color: "#FF5722",
    borderRadius: "8px",
    boxShadow: "0 4px 24px rgba(33,33,33,0.2)",
    padding: "2rem",
    maxWidth: "800px",
    margin: "2rem auto",
    border: "2px solid #757575",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    fontFamily: "'Roboto Mono', 'Open Sans Condensed', monospace",
    position: "relative",
    overflow: "hidden",
  },
  diagonal: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "repeating-linear-gradient(135deg, #757575 0 2px, transparent 2px 20px)",
    opacity: 0.08,
    pointerEvents: "none",
    zIndex: 0,
  },
  header: {
    fontFamily: "'Oswald', 'Montserrat', sans-serif",
    fontSize: "2rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#FF5722",
    margin: 0,
    zIndex: 1,
  },
  subheader: {
    fontFamily: "'Roboto Mono', 'Open Sans Condensed', monospace",
    color: "#757575",
    fontSize: "1rem",
    margin: 0,
    zIndex: 1,
  },
  body: {
    color: "#fff",
    fontFamily: "'Roboto Mono', 'Open Sans Condensed', monospace",
    fontSize: "1.1rem",
    zIndex: 1,
  },
  button: {
    background: "#FF5722",
    color: "#fff",
    border: "none",
    borderRadius: "0",
    padding: "0.75rem 1.5rem",
    fontFamily: "'Oswald', 'Montserrat', sans-serif",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(33,33,33,0.15)",
    zIndex: 1,
    alignSelf: "flex-start",
  },
  icon: {
    width: "40px",
    height: "40px",
    fill: "#FF5722",
    marginBottom: "0.5rem",
    zIndex: 1,
  },
};

export default function CrowbarCard() {
    const startStripeCheckout=()=>{
        console.log('hey');

        axios .get('/api/stripe-checkout')
        .then((response) =>{
            console.log(response?.data?.message?.url);
            window.location.href=response?.data?.message?.url;
        })
        .catch((error) => 
            console.error( error));
           
        

    }

  return (
    <div style={styles.card}>
      <div style={styles.diagonal}></div>
     
      <svg style={styles.icon} viewBox="0 0 48 48">
        <rect x="20" y="4" width="8" height="32" rx="4" />
        <rect
          x="16"
          y="36"
          width="24"
          height="8"
          rx="4"
          transform="rotate(-20 24 40)"
        />
      </svg>
      <center><h1 style={styles.header}>CrowbarLtd.com</h1></center>
      <center><h2 style={styles.subheader}>One-Liner Overview</h2></center>
      <p style={styles.body}>
        CrowbarLtd.com is a digital-ops shell powering micro-services and raffle
        infrastructure—standing for reliability, efficiency, and industrial
        strength.
      </p>
      <center><button  onClick={startStripeCheckout} style={styles.button}>$1 Service Trial </button></center>
    </div>
  );
}