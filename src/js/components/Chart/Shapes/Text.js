import React, { Component } from "react"
import ReactDOM from "react-dom"

import * as d3 from 'd3'

class Text extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        const n = ReactDOM.findDOMNode(this.refs.text);
        this.drawText(n);
    }

    componentDidUpdate() {
        const n = ReactDOM.findDOMNode(this.refs.text);
        this.redrawText(n);
    }

    render() {
        return (
            <text ref="text" className="g-text"></text>
        );
    }

    drawText(n) {
        const { x, y, fill, text } = this.props;

        d3.select(n)
            .attr("x", x + 5)
            .attr('y', y + 15)
            .attr('fill', fill)
            .text(text)
    }

    redrawText(n) {
        const { x, y, fill, text } = this.props;

        d3.select(n)
            .text(text)
    }

}

export default Text;
