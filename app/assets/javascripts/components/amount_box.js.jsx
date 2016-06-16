var AmountBox = React.createClass({
    displayName: 'AmountBox',
    render() {
        return (
	        <div className="input-field col s4">
	          <label className="active">{this.props.title}</label>
	          <input readonly type="text" value={amountFormat(this.props.amount)} />
	        </div>
        );
    }
});

