import React, { Component } from 'react';
// import components
import QuickPay from "../components/landing/QuickPay";
import GatewayCard from "../components/GatewayCard";
import NavigationBar from "../components/global/NavigationBar";
import RecommendedGatewayList from "../components/RecommendedGatewayList";
import Button from "../components/common/buttons/Button";
import Modal from "../components/common/modals/Modal";
import GatewayList from "./GatewayList";


class Landing extends Component {
    constructor(props){
        super(props)
        this.state = {
            gatewayListModalVisible : true
        }
    }
    toggleGatewayListModal = (visible) => {
        this.setState({gatewayListModalVisible: visible})
    }
    render(){
        return (
            <>
                {this.state.gatewayListModalVisible !== true &&
                    <div>
                        {/*this is the nav bar*/}
                        <NavigationBar header="Pembayaran"/>
                        {/*this is the landing page*/}
                        <div className="landing-container">
                            {/*this is the quick pay section*/}
                            <div className="padding-horizontal-16 font-bold">
                                QuickPay
                            </div>
                            <QuickPay/>
                            {/*this is the dana di tokopedia list*/}
                            <div className="padding-horizontal-16 margin-vertical-8 font-bold">
                                Dana di Tokopedia
                            </div>
                            <div className="padding-horizontal-16 padding-vertical-16">
                                <GatewayCard />
                            </div>
                            {/*this is the recommended gateway list*/}
                            <div className="margin-horizontal-16 margin-vertical-16 font-bold">
                                Rekomendasi lainnya
                            </div>
                            <RecommendedGatewayList/>

                            <Button  onClick={_ => this.toggleGatewayListModal(true)}className="margin-horizontal-16" block secondary large text="Pilih Metode Pembayaran Lainnya"/>

                        </div>
                    </div>
                }
                {/*this is the payment gateway list*/}
                <Modal visible={this.state.gatewayListModalVisible}>
                  <GatewayList onClose={_ => this.toggleGatewayListModal(false)}/>
                </Modal>
            </>
        )
    }
}
export default Landing