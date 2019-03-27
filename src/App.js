import React, { Component } from 'react';
// import pages
import Landing from "./pages/Landing";
// import page styles
import './styles/Landing.css'
// import component styles
import './styles/Common.css'
import './styles/Card.css'
import './styles/NavigationBar.css'
import './styles/QuickPay.css'
import './styles/RecommendedGatewayList.css'
import './styles/GatewayCard.css'
import './styles/GatewayCardList.css'
import GatewayDetail from "./pages/GatewayDetail";


class App extends Component {
  render() {
    return (
      <div>
        <Landing/>
      </div>
    );
  }
}

export default App;
