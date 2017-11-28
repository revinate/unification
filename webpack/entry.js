/**
 * Created by jeffmcfarland on 2/10/17.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import ReactDateRangePicker from './components/reactDatepicker';
import MySelect from './components/reactMultiSelectTypeahead';






ReactDOM.render(<ReactDateRangePicker />, document.getElementById('reactDatePicker'));
ReactDOM.render(<MySelect multi={true}/>, document.getElementById('reactSelectExample'));
ReactDOM.render(<MySelect multi={true}/>, document.getElementById('reactSelectExample2'));

