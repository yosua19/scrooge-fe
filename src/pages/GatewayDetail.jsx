import React, {Component} from 'react'
import '../styles/GatewayDetail.css'
import NavigationBar from "../components/global/NavigationBar";
import BillingCard from "../components/global/BillingCard";
import Button from "../components/common/buttons/Button";
export default class GatewayDetail extends Component {
    render(){
        return(
            <>
                <NavigationBar header="Pembayaran"/>
                <div className="gateway-detail-container">
                    <BillingCard/>
                    <div className="btn-confirm-container">
                        <Button className="margin-horizontal-16 margin-vertical-16" block main large text="Bayar" />
                    </div>
                </div>
            </>
        )
    }
}