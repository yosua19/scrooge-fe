import React, { Component } from 'react';

class RecommendedGatewayList extends Component {
    render(){
        return (
            <>
                <div className="recommended-gateway-container">
                    <div className="recommended-gateway-card">
                        <div className="recommended-gateway-section">
                            <div className="gateway-card-content-container">
                                <img className="gateway-card-gateway-image" src="https://ecs7.tokopedia.net/img/toppay/sprites/bca.png" />
                                <div className="gateway-card-name-container">
                                    <div>
                                        BCA Virtual Account
                                    </div>
                                    <div className="gateway-card-description">
                                        BCA
                                    </div>
                                </div>
                            </div>
                            <div className="recommended-gateway-chevron">
                                <img className="chevron-right" src={require('../assets/chevron-right.png')}/>
                            </div>
                        </div>
                        <div className="recommended-gateway-section">
                            <div className="gateway-card-content-container">
                                <img className="gateway-card-gateway-image" src="https://ecs7.tokopedia.net/img/toppay/sprites/briva.png" />
                                <div className="gateway-card-name-container">
                                    <div>
                                        BRI Virtual Account
                                    </div>
                                    <div className="gateway-card-description">
                                        BRI
                                    </div>
                                </div>
                            </div>
                            <div className="recommended-gateway-chevron">
                                <img className="chevron-right" src={require('../assets/chevron-right.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default RecommendedGatewayList