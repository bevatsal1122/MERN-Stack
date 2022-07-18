import React from 'react'

export const Footer = () => {
  let footerStyle = {
    width: "100%",
    marginTop: "10vh",
    userSelect: "none"
  }

  return (
    <footer className="bg-dark text-light pt-3 pb-2" style={footerStyle}>
      <p className="text-center">
        <b>CapYourTask &copy; 2022</b><br />
        Developed with ❤️ by Vatsal Sanchala
      </p>
    </footer>
  )
}
