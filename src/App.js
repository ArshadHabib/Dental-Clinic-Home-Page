import logo from "./images/logo.png";
import image from "./images/main.jpg";
import "./App.css";
import Header from "./MyComponents/Header";
import Body from "./MyComponents/Body";
function App() {
  const phoneNumbers = [
    { number: "123-456-7890", city: "Lahore" },
    { number: "987-654-3210", city: "Islamabad" },
    { number: "555-555-5555", city: "Karachi" },
  ];
  return (
    <>
      <Header logo={logo} phoneNumbers={phoneNumbers} />
      <Body image={image} />
    </>
  );
}

export default App;
