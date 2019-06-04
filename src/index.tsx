import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Highcharts from 'highcharts';
import solidgauge from 'highcharts/modules/solid-gauge';
import exporting from 'highcharts/modules/exporting';
import offlineExporting from 'highcharts/modules/offline-exporting';
import exportData from "highcharts/modules/export-data";

// @ts-ignore
window.canvg = require('highcharts/lib/canvg');

// @ts-ignore
window.jspdf = require('highcharts/lib/jspdf');

// @ts-ignore
window.svg2pdf = require('highcharts/lib/svg2pdf');

solidgauge(Highcharts);
exporting(Highcharts);
offlineExporting(Highcharts);
exportData(Highcharts);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
