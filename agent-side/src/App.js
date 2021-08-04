
import './App.css';
import {BrowserRouter as Router, Route,Switch,Redirect,useParams} from 'react-router-dom'
import OverView from './container/Overview';
import Trade from './container/Trade';
import Wallet from './container/Wallet';
import Transactations from './container/Transactions';
import Statistics from './container/Statistics';
import Settings from './container/Settings';
import Referral from './container/Referral';
import Logout from './container/Logout';
import Users from './container/Users';

import { pagePaths } from './Utils/Constant';

function App() {
  





 
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path='/' component={OverView}/>
        <Route exact path={pagePaths.trade}  component={Trade}/> 
        <Route exact path={pagePaths.wallet}  component={Wallet}/> 
        <Route exact  path={pagePaths.transactions}  component={Transactations}/> 
        <Route  path={pagePaths.statistics}  component={Statistics}/> 
        <Route  path={pagePaths.settings}  component={Settings}/> 
        <Route  path={pagePaths.refrral}  component={Referral}/> 
        <Route  path={pagePaths.logout}  component={Logout}/>
        <Route  path={pagePaths.user}  component={Users }/> 
       
      </Switch>
    </Router>
    </div>
  );
}

export default App;
