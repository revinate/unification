/**
 * Created by jeffmcfarland on 2/10/17.
 */
var React = require('react');
var Select = require('react-select');

var options = [
    { value: 0, label: 'One' },
    { value: 1, label: 'Two' },
    { value: 2, label: 'Three', disabled: true },
    { value: 3, label: 'Four' },
    { value: 4, label: 'Five' },
    { value: 5, label: 'Six' },
    { value: 6, label: 'Seven' },
    { value: 7, label: 'Eight' },
    { value: 8, label: 'Nine' },
    { value: 9, label: 'Ten' },
    { value: 10, label: 'Eleven' },
    { value: 11, label: 'Twelve' },
    { value: 12, label: 'Thirteen' },
    { value: 13, label: 'Fourteen' },
    { value: 14, label: 'Fifteen' },
];



var MySelect = React.createClass({
    logChange: function(val) {
        console.log("Selected: " + val);
    },
    getInitialState: function getInitialState() {
        return {
        value: null
        }
    },
    onChange: function onChange(value) {
        this.setState({
            value: value
        });
    },
    render: function(){
        return (
            <Select
                className=""
                name="form-field-name"
                options={options}
                value={this.state.value}
                onChange={this.onChange}
                multi={true}
            />
        )
    }
});

export default MySelect;






