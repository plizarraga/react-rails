var Records = React.createClass({
	displayName: 'Records',
	getInitialState: function() {
		return {
			records: this.props.data
		};
	},
	getDefaultProps: function() {
		return {
			records: []  
		};
	},
	createRecord: function(record){
		return (
				<Record key={record.id} record={record} handleDeleteRecord={this.deleteRecord} setRecord={this.setRecord}/>
				);
	},
	setRecord: function(record){
		return record;
	},
  addRecord: function(record) {
    allRecords = React.addons.update(this.state.records, { $push: [record] })
		this.setState({ records: allRecords });
  },
  deleteRecord: function(record) {
    var index = this.state.records.indexOf(record);
    var records = React.addons.update(this.state.records, { $splice: [[index, 1]] });
    this.replaceState({ records: records});
  },
  credits: function() {
    var credits;
    credits = this.state.records.filter(function(val) {
      return val.amount >= 0;
    });
    return credits.reduce((function(prev, curr) {
      return prev + parseFloat(curr.amount);
    }), 0);
  },
  debits: function() {
    var debits;
    debits = this.state.records.filter(function(val) {
      return val.amount < 0;
    });
    return debits.reduce((function(prev, curr) {
      return prev + parseFloat(curr.amount);
    }), 0);
  },
  balance: function() {
    return this.debits() + this.credits();
  },
	render: function() {
		return (
			<div>
				<h2>Records</h2>
				<div className="row">
					<AmountBox title="Credit" amount={this.credits()}/>
					<AmountBox title="Debit" amount={this.debits()}/>
					<AmountBox title="Balance" amount={this.balance()}/>
				</div>
				<RecordForm handleNewRecord={this.addRecord} setRecord={this.setRecord}/>
				<table className="bordered">
					<thead>
						<tr>
							<th>Date</th>
							<th>Title</th>
							<th>Amount</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{this.state.records.map(this.createRecord)}		
					</tbody>
				</table>
			</div>     
			);
	}
});