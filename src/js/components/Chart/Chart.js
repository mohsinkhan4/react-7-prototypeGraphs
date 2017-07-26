import React, { Component } from "react"
import ReactDOM from "react-dom"

import Bar from './Types/Bar'

class Chart extends Component {

    constructor() {
        super();
    }

    render() {
        const { rowData, columnData, selectedColumns } = this.props;

        return (
            <svg style={{ 'height': rowData.length ? rowData.length * 50 : 0 }}>
                <Bar
                    columnData={ columnData }
                    rowData={ rowData }
                    selectedColumns={ selectedColumns }
                />
            </svg>
        );
    }

}

export default Chart;
