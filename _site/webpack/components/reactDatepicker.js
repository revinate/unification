/**
 * Created by jeffmcfarland on 2/10/17.
 */
var React = require('react');
var moment = require('moment');
var BS = require('react-bootstrap');
var DateRangePicker = require('react-bootstrap-daterangepicker');


var ReactDateRangePicker = React.createClass({
    getInitialState: function() {
        return {
            /*ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },*/
            startDate: moment().subtract(29, 'days'),
            endDate: moment()
        };
    },

    handleEvent: function (event, picker) {
        this.setState({
            startDate: picker.startDate,
            endDate: picker.endDate
        });
    },

    render: function() {
        var start = this.state.startDate.format('MM/DD/YYYY');
        var end = this.state.endDate.format('MM/DD/YYYY');
        var label = start + ' - ' + end;
        if (start === end) {
            label = start;
        }
        return (
            <DateRangePicker startDate={this.state.startDate} endDate={this.state.endDate} ranges={this.state.ranges} onEvent={this.handleEvent}>
                <BS.FormControl type="text" style={{width:'100%'}} value={label} onChange={this.handleEvent}>
                </BS.FormControl>
            </DateRangePicker>
    )
    }
});
export default ReactDateRangePicker;