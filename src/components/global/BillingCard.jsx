import React, {Component} from 'react'
import '../../styles/BillingCard.css'
export default class BillingCard extends Component {
    render(){
        return(
            <>
               <div className="billing-card-container">
                    <div className="billing-card-amount">Rp22.014</div>
                    <div className="billing-card-detail-btn">Detail Tagihan</div>
               </div>
            </>
        )
    }
}