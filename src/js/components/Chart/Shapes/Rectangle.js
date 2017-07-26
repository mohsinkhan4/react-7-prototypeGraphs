import React, { Component } from "react"
import ReactDOM from "react-dom"

import * as d3 from 'd3'

class Rectangle extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        const n = ReactDOM.findDOMNode(this.refs.rect);
        this.drawRectangle(n);
    }

    componentDidUpdate() {
        const n = ReactDOM.findDOMNode(this.refs.rect);
        this.redrawRectangle(n);
    }

    render() {
        return (
            <rect ref="rect" className="g-rectangle" />
        );
    }

    drawRectangle(n) {
        const { x, y, fill, height, width } = this.props;

        d3.select(n)
            .attr("x", x)
            .style('y', y)
            .attr('fill', fill)
            .attr('height', height)
            .attr('width', 0)
            .transition()
            .duration(3000)
            .attr('width', width)
    }

    redrawRectangle(n) {
        const { width } = this.props;

        d3.select(n)
            .transition()
            .duration(3000)
            .attr('width', width)
    }

}

export default Rectangle;
