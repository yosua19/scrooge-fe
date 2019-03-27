import React, { Component } from 'react';
import Button from "../common/buttons/Button";

class QuickPay extends Component {
    render(){
        return (
            <>
                <div className="quick-pay-container">
                    <div className="quick-pay-card">
                        <div className="quick-pay-ovo-section">
                            <img className="quick-pay-gateway-image" src="https://ecs7.tokopedia.net/img/toppay/sprites/ovo.png"/>
                            <div className="quick-pay-ovo-section-details">
                                <div>
                                    <strong>OVO Cash</strong>
                                    <strong>Rp 107.182</strong>
                                </div>
                                <div>
                                    <div>
                                        OVO Points
                                    </div>
                                    <div>
                                        49.400
                                    </div>
                                </div>
                            </div>
                            <div className="sprite-kebab quick-pay-sprite-kebab"/>
                        </div>
                        <div className="quick-pay-ovo-ticker">
                            <div className="quick-pay-ovo-ticker-details">
                                <div>
                                    <div>OVO Cash terpakai</div>
                                    <strong>Rp 107.182</strong>
                                </div>
                                <div>
                                    <div>
                                        OVO Points terpakai
                                    </div>
                                    <strong>
                                        49.400
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className="quick-pay-billing-section">
                            <div className="quick-pay-billing-details-container">
                                <div className="quick-pay-billing-details-text">Total Tagihan</div>
                                <div className="quick-pay-billing-details-price">Rp 33800</div>
                            </div>
                            <Button onClick={_=>{alert("heyy")}}className="quick-pay-btn-confirm-container" block main small text="Bayar"/>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
export default QuickPay