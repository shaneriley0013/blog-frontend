import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Content />   
      <Footer />   
    </div>
  );
}

export default App;

// make web request to get data from rails
// select the part of the response that we want

// make a variable with the data
// show that data on HTML page