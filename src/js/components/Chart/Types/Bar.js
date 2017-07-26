import React, { Component } from "react"
import ReactDOM from "react-dom"

import Rect from '../Shapes/Rectangle'
import Text from '../Shapes/Text'

class Bar extends Component {

    constructor() {
        super();
    }

    render() {
        const { rowData, columnData, selectedColumns } = this.props;

        const labels = rowData
            .map( (row, i) => {
                const text = selectedColumns.nameColumn ? row[selectedColumns.nameColumn] : '';
                return (<Text key={ row.key } x="0" y={ i * 30 } fill="black" text={ text } />);
            }
        );

        const bars = this.getBars(selectedColumns.quantityColumn);

        return (
            <g className="g-barchart">
                { bars }
                { labels }
            </g>
        );
    }

    getBars(quantityColumn) {
        const { rowData } = this.props;

        return rowData
            .map( (row, i) => {
                    const width = quantityColumn && !isNaN(row[quantityColumn]) ? (row[quantityColumn] * 10) : 0;
                    return (
                        <Rect
                            key={ row.key }
                            x="0" y={ i * 30 }
                            fill="mediumaquamarine"
                            height="20" width={ width } />
                    );
                }
            );
    }

}

export default Bar;
