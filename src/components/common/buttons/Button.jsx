import React, {Component} from 'react'
import './Button.css'
// reusable general purpose button
export default class Button extends Component {
    constructor(props){
        super(props)
        // extract button requirement from props
        const {
            small,
            medium,
            large,
            main,
            secondary,
            block,
            text,
            className,
            onClick,
        } = this.props
        // map the props to the state
        this.state = {
            small,
            medium,
            large,
            main,
            secondary,
            block,
            text,
            className,
            onClick,
        }
    }
    getButtonSize = () => {
        const {
            small,
            medium,
            large,
        } = this.state
        if (small){
            return " btn-small"
        }else if (medium){
            return " btn-medium"
        }else if (large){
            return " btn-large"
        }else{
            return " btn-small"
        }
    }
    getButtonColour = () => {
        const {
            main,
            secondary
        } = this.props
        if (main){
            return " btn-main"
        }else if (secondary) {
            return " btn-secondary"
        }else{
            return " btn-main"
        }
    }
    getBlock = () => {
        if (this.state.block){
            return " btn-block"
        }
        return " "
    }
    getText = () => {
        if (this.state.text){
            return this.state.text
        }
        return " "
    }
    getCustomClassName = () => {
        if (this.state.className){
            console.log(this.state.className)
            return " " + this.state.className
        }
        return " "
    }
    getOnClick = () => {
        if (this.state.onClick){
            return this.state.onClick
        }
        return _ => {}
    }
    // will render according to state
    render(){
        return (
            <div className={this.getCustomClassName()}>
                <button className={"btn " + this.getButtonSize() + this.getButtonColour() + this.getBlock() } onClick={this.getOnClick()} type="button">{this.getText()}</button>
            </div>
        )
    }
}