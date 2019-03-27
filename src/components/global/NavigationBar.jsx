import React from 'react';

const NavigationBar = ({header}) =>  {
    return (
        <div className="navigation-bar-container">
            <div className="navigation-bar-back-button">
                <img src="https://ecs7.tokopedia.net/img/toppay/icon_arrow_back.png" className="back-button"/>
            </div>
            <div className="navigation-bar-header">
                {header}
            </div>
        </div>
    )
}
export default NavigationBar