import logo from "./images/logo.jpg";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
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
      <Body images={[image1, image2, image3, image4]} />
    </>
  );
}

export default App;
