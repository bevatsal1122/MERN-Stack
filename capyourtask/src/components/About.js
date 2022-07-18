import React from 'react'

export const About = () => {
  let aboutStyle = {
    userSelect: "none",
    marginBottom: "49.2vh"
  }
  return (
    <div className="mt-3" style={aboutStyle}>
      <h2 className="container"><b>Hello There :) Hope you'all are doing well!!</b></h2>
      <p className="container"><b><big>I'm Vatsal Sanchala, Computer Engg. Student at KJSCE, Mumbai.<br />
      <a href="https://www.github.com/bevatsal1122">GitHub</a><br />
      <a href="https://www.linkedin.com/in/bevatsal1122/">Linkedin</a>
      </big></b></p><br />
      <h4 className="container"><b>Happy Coding 🖤</b></h4>
    </div>
  )
}
