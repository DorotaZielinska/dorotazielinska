import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { TopBar } from "../TopBar";
import { Switch, Route } from "react-router-dom";
import { Home } from "../../features/Home/home";
import { About } from "../../features/About/about";
import { Portfolio } from "../../features/Portfolio/portfolio";
import { Contact } from "../../features/Contact/contact";
import { Footer } from "../../common/Footer/footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
       
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
