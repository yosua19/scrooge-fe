import React, {Component} from 'react'
import '../styles/GatewayList.css'
import GatewayCardList from "../components/GatewayCardList";
// reusable general purpose modal
export default class GatewayList extends Component {
    render(){
        return(
            <div className="gateway-list-container">
                {/*header section*/}
                <div className="gateway-list-header">
                    <div onClick={_ => this.props.onClose()} className="sprite-close"/>
                    <div className="gateway-list-header-text">Pilih Metode Pembayaran</div>
                </div>
                {/*manual transfer section*/}
                <div className="padding-horizontal-16 margin-vertical-8 font-bold font-size-16">
                    Transfer Bank (Verifikasi Manual)
                </div>
                <GatewayCardList
                    gateways={
                        [
                            {
                                gateway_name: 'Bank BCA',
                                gateway_code: 'BCA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/bca.png',
                                desc: 'Diverifikasi setelah 07:00 WIB',
                                extra_info: 'Rp100.00',
                            },
                            {
                                gateway_name: 'Bank MANDIRI',
                                gateway_code: 'MANDIRI',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/mandiri.png',
                                desc: 'Diverifikasi setelah 07:00 WIB',
                                extra_info: null,
                            },
                            {
                                gateway_name: 'Bank BNI',
                                gateway_code: 'BNI',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/bni.png',
                                desc: 'Diverifikasi setelah 07:00 WIB',
                                extra_info: null,
                            },
                            {
                                gateway_name: 'Bank BRI',
                                gateway_code: 'BRI',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/bri.png',
                                desc: 'Diverifikasi setelah 07:00 WIB',
                                extra_info: null,
                            },
                            {
                                gateway_name: 'Bank CIMB',
                                gateway_code: 'CIMB',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/cimb.png',
                                desc: 'Diverifikasi setelah 07:00 WIB',
                                extra_info: null,
                            },
                        ]
                    }
                />
                {/*virtual account section*/}
                <div className="padding-horizontal-16 margin-vertical-8 font-bold font-size-16">
                    Transfer Virtual Account (Verifikasi Otomatis)
                </div>
                <GatewayCardList
                    gateways={
                        [
                            {
                                gateway_name: 'BCA Virtual Account',
                                gateway_code: 'BCAVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/bca.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'Mandiri Virtual Account',
                                gateway_code: 'BRIVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/mandiri.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'BRIVA',
                                gateway_code: 'BRIVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/briva.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'BNI Virtual Account',
                                gateway_code: 'BNIVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/bni.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'Danamon Virtual Account',
                                gateway_code: 'BRIVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/danamon.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'CIMB Virtual Account',
                                gateway_code: 'CIMBVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/cimb.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'Virtual Account Lainnya',
                                gateway_code: 'OTHERVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/rintis.png',
                                desc: null,
                                extra_info: null,
                            },
                        ]
                    }
                />
                {/*instant payment section*/}
                <div className="padding-horizontal-16 margin-vertical-8 font-bold font-size-16">
                    Pembayaran Instan
                </div>
                <GatewayCardList
                    gateways={
                        [
                            {
                                gateway_name: 'KlikBCA',
                                gateway_code: 'BCAVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/klikbca.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'BCA KlikPay',
                                gateway_code: 'BRIVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/bca-klikpay.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'Mandiri e-cash',
                                gateway_code: 'BRIVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/mandiri-ecash.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'BRI e-Pay',
                                gateway_code: 'BRIVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/bri-epay.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'JakOne Mobile Bank DKI',
                                gateway_code: 'BNIVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/jakonemobile.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'BNI SMS Payment',
                                gateway_code: 'BRIVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/bni-sms-banking.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'CIMB Clicks',
                                gateway_code: 'CIMBVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/cimb-clicks.png',
                                desc: null,
                                extra_info: null,
                            },

                        ]
                    }
                />
                {/*non credit card section*/}
                <div className="padding-horizontal-16 margin-vertical-8 font-bold font-size-16">
                    Cicilan Tanpa Kartu Kredit
                </div>
                <GatewayCardList
                    gateways={
                        [
                            {
                                gateway_name: 'Kredivo',
                                gateway_code: 'BCAVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/kredivo.png',
                                desc: null,
                                extra_info: null,
                            },
                        ]
                    }
                />
                {/*credit card section*/}
                <div className="padding-horizontal-16 margin-vertical-8 font-bold font-size-16">
                    Kartu Kredit / Debit / Cicilan
                </div>
                <GatewayCardList
                    gateways={
                        [
                            {
                                gateway_name: 'Kartu Kredit / Debit / Cicilan',
                                gateway_code: 'BCAVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/cc-icon.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'Mandiri Kartu Kredit',
                                gateway_code: 'BCAVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/mandiri-vcc.png',
                                desc: null,
                                extra_info: null,
                            },
                        ]
                    }
                />
                {/*retail section*/}
                <div className="padding-horizontal-16 margin-vertical-8 font-bold font-size-16">
                    Tunai di Gerai Retail
                </div>
                <GatewayCardList
                    gateways={
                        [
                            {
                                gateway_name: 'Tokopedia O2O',
                                gateway_code: 'BCAVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/tokopediacenter.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'Indomaret / Ceriamart',
                                gateway_code: 'BRIVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/indomaret.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'Alfamart / Alfamidi / Lawson',
                                gateway_code: 'BRIVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/alfamart.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'Kantor Pos',
                                gateway_code: 'BNIVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/pos-indonesia.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'Kioson',
                                gateway_code: 'BRIVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/kioson.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'JNE',
                                gateway_code: 'CIMBVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/jne.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'Circle K',
                                gateway_code: 'OTHERVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/circle-k.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'LoketNet1',
                                gateway_code: 'OTHERVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/loketnet1.png',
                                desc: null,
                                extra_info: null,
                            },
                            {
                                gateway_name: 'FamilyMart',
                                gateway_code: 'OTHERVA',
                                gateway_image: 'https://ecs7.tokopedia.net/img/toppay/sprites/familymart.png',
                                desc: null,
                                extra_info: null,
                            },
                        ]
                    }
                />
            </div>
        )
    }
}