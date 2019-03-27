import React, { Component } from 'react';

class GatewayCardList extends Component {
    constructor(props){
        super(props)
        this.state = {
            gateways: this.props.gateways
        }
        console.log(this.props.gateways)
    }
    renderGatewaySection = () => {
        if (this.state.gateways){
            return (
                this.state.gateways.map(data => {
                    return (
                        <div className="recommended-gateway-section">
                            <div className="gateway-card-content-container">
                                <img className="gateway-card-gateway-image" src={data.gateway_image}/>
                                <div className="gateway-card-name-container">
                                    <div>
                                        {data.gateway_name}
                                    </div>
                                    <div className="gateway-card-description">
                                        {data.desc}
                                    </div>
                                </div>
                            </div>
                            <div className="recommended-gateway-chevron">
                                <img className="chevron-right" src={require('../assets/chevron-right.png')}/>
                            </div>
                        </div>
                    )
                })
            )
        }
        return null
    }
    render(){
        return (
            <>
                <div className="recommended-gateway-container">
                    <div className="recommended-gateway-card">
                        {this.renderGatewaySection()}
                    </div>
                </div>
            </>
        )
    }
}
export default GatewayCardList