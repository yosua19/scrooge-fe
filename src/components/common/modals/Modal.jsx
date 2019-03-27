import React, {Component} from 'react'
import './Modal.css'
// reusable general purpose modal
export default class Modal extends Component {
    getZIndex = () => {
        if (this.props.zIndex){
            return {zIndex: this.props.zIndex}
        }
        return {zIndex: 100}
    }
    render(){
        return(
            <>
                {
                    this.props.visible ?
                    <div className="modal"  style={this.getZIndex()}>
                        {this.props.children}
                    </div>
                        :
                        null
                }
            </>
        )
    }
}