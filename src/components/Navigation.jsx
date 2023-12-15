'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../imgs/My-logo-proto.png";

export default function Navigation() {
    const [windowHeight, setWindowHeight] = useState("");

    const [changeBG, setchangeBG] = useState(0);
    const [padding, setPadding] = useState(30);
    const [boxShadow, setBoxShadow] = useState(0);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    });
  
    const handleScroll = () => {
        setWindowHeight(window.scrollY);
    };
  
    useEffect(() => {
      let bgColorChange = windowHeight / 700;
  
      if (bgColorChange < 1) {
        let paddingChange = 30 - bgColorChange * 20;
        let boxShadowChange = bgColorChange * 0.1;
        setchangeBG(bgColorChange);
        setPadding(paddingChange);
        setBoxShadow(boxShadowChange);
      }
    }, [windowHeight]);

    return (
    <nav className="navbar navbar-expand-lg fixed-top top-navigation"
    style={{
        background: `rgba(240, 248, 255, ${changeBG})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
        <div className="container-fluid hold-nav-links" id="holdNavLinks">
            <Link className="navbar-brand" href="/"><Image className="logo" src={logo} width={128} height={43}/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className="nav-link navEnlace" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link navEnlace" href="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link navEnlace" href="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link navEnlace" href="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link navEnlace" href="https://tonitalkstech.com/" target="_blank">ToniTalksTech</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>

    )
  }
  