import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  //* inline css style:
  // return <h1 style={{color:"red", fontSize:"48px", textTransform:"uppercase"}}>Fast React Pizza Co.</h1>;

  //* external css style
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}
function Footer() {
  //* some JS logic
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(hour);
  console.log(isOpen);
  // console.log(
  //   isOpen ? alert("We're currently open!") : alert("Sorry! We're closed!"),
  // );

  //*JSX way of returning component:
  return (
    <footer className="footer">{new Date().toLocaleTimeString()}. We're currently open!</footer>
  );

  //*Pure React way of returning component:
  // const time = new Date().toLocaleTimeString()
  // return React.createElement("footer",null,`${time}. We're currently open!`)
}
function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="pizza spinaci" />
      <h3>Pizza Spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
