import React, { Component } from 'react'
// scc StyleSheet
import './style.css'
import styleModule from './StyleComponent.module.css'

export default class StyleComponent extends Component {
    render() {
        let styleInline = {
            backgroundColor: "lightblue",
            color: "red"
        }
        return (
            <div className="container">
                <p style={{
                    backgroundColor: "greenyellow",
                    color: "black"
                }} className="text">Style Component</p>
                <p style={styleInline} className="text">Style Inline</p>
                <p className={styleModule.fontText}>Style Module</p>
                <p className={styleModule["bg-color"]}>Style Module</p>
                <p className={`${styleModule["bg-color"]} ${styleModule["container__p"]}`}>Style Module</p>
            </div>
        )
    }
}
