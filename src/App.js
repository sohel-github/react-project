import { Route, Switch } from 'react-router-dom'

import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import TourList from './Components/TourList/TourList'
import Accordion from './Components/Accordion/Accordion'
import Food from './Components/Food/Food'
import Tabs from './Components/Tabs/Tabs'
import Lorem from './Components/Lorem/Lorem'
import Grocery from './Components/Grocery/Grocery'
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tour" component={TourList} />
        <Route path="/accordion" component={Accordion} />
        <Route path="/food" component={Food} />
        <Route path="/tabs" component={Tabs} />
        <Route path="/lorem" component={Lorem} />
        <Route path="/grocery" component={Grocery} />
        <Route path="/nav" component={Nav} />
        
      </Switch>
    </>
  );
}

export default App;