import React from "react"
import styled from "styled-components"
import backLeft from "../assets/backLeft.svg"
import backRight from "../assets/backRight.svg"
import { useNavigate } from "react-router-dom"

export default function Index() {
  const navigate = useNavigate()

  const toOverview = () => {
    navigate("/overview")
  }

  return (
    <Container>
      <img src={backLeft} alt="backLeft" className="backLeft" />
      <img src={backRight} alt="backRight" className="backRight" />
      <div className="title">
        <h1>Weather/</h1>
        <h1>Rotation</h1>
      </div>
      <button className="overview" onClick={toOverview}>
        Overview
      </button>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  .backLeft {
    position: absolute;
    width: 35%;
    left: 0;
    animation: slide-in-left 2s ease-out both;
    @keyframes slide-in-left {
      0% {
        -webkit-transform: translateX(-500px);
        transform: translateX(-500px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  .backRight {
    position: absolute;
    width: 35%;
    right: 0;
    animation: slide-in-right 2s ease-out both;
    @keyframes slide-in-right {
      0% {
        -webkit-transform: translateX(500px);
        transform: translateX(500px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  .title {
    font-size: 3rem;
    -webkit-animation: tracking-in-expand 2s cubic-bezier(0.215, 0.61, 0.355, 1)
      both;
    animation: tracking-in-expand 2s cubic-bezier(0.215, 0.61, 0.355, 1) both;

    @-webkit-keyframes tracking-in-expand {
      0% {
        letter-spacing: -0.5em;
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes tracking-in-expand {
      0% {
        letter-spacing: -0.5em;
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        opacity: 1;
      }
    }
  }

  button {
    width: 20rem;
    padding: 1rem 2rem;
    border-radius: 0.4rem;
    border: none;
    font-weight: bold;
    font-size: 1.3rem;
    color: white;
    cursor: pointer;
    background: linear-gradient(to right, #7fc6ea, #73e5be);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
    transition: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover {
      box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35),
        0 12px 20px -12px rgba(0, 0, 0, 0.35);
    }
  }
`
