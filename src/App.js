import React, {useEffect} from 'react';
import './App.css';
import Home from './components/home/home';
import AppDetail from './components/app_details/app_detail';
import {useDispatch} from 'react-redux';
import {getAllApps} from './store/actions/fetchapps';
import {Route, BrowserRouter as Router} from 'react-router-dom';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("in app")
    dispatch(getAllApps());
  })

  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}/>
        <Route path="/app-details" component={AppDetail}/>
      </div>
    </Router>
  );
}

export default App;
