import React from 'react';

const GatewayCard = ({gatewayImage, gatewayName, gatewayDescription, gatewayExtraInformation}) =>  {
    return (
        <div className="gateway-card-container">
            <div className="gateway-card-content-container">
                <img className="gateway-card-gateway-image" src="https://ecs7.tokopedia.net/img/toppay/saldo-green.svg" />
                <div className="gateway-card-name-container">
                    <div>
                        Saldo
                    </div>
                    <div className="gateway-card-description">
                        Dana di tokopedia
                    </div>
                </div>
            </div>
            <div className="gateway-card-content-container">
                <div className="gateway-card-extra-info">
                    Rp 11.689
                </div>
                <div className="gateway-card-chevron">

                    <img className="chevron-right" src={require('../assets/chevron-right.png')}/>
                </div>
            </div>



        </div>
    )
}
export default GatewayCard