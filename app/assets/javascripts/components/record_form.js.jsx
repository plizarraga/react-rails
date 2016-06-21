var RecordForm = React.createClass({
    displayName: 'RecordForm',
    getInitialState: function() {
        return {
            date: "",
            title: "",
            amount: ""
        };
    },
    handleChange: function(e) {
        var target_name = e.target.name;
        var target_value = e.target.value;
        var obj = {};
        obj[target_name] = target_value;
        this.setState(obj);
    },
    valid: function() {
        return (this.state.title && this.state.date && this.state.amount) ? "" : "disabled" 
  	},
  	handleSubmit: function(e){
  		e.preventDefault();
        $.ajax({
          method: 'POST',
          url: '/records/',
          data: { record: this.state },
          dataType: 'JSON',
          success: function(data) {
            this.props.handleNewRecord(data);
            this.setState(this.getInitialState());
            Materialize.toast('Record added.', 5000, 'rounded');
          }.bind(this)
        });
  	},
    componentDidMount: function(){
      console.log("despues de ser montado")
      console.log(this.props.setRecord())
    },
    componentWillMount: function(){
      console.log("antes de ser montado")
      console.log(this.props.setRecord())
    },
    componentWillReceiveProps: function(){
      console.log("recibiendo nuevas props")
      console.log(this.props.setRecord())
    },
    render: function() {
        return (
            <div className="row">
					    <form className="col s12 " onSubmit={this.handleSubmit}>
					      <div className="row">
					        <div className="input-field col s3">
					        	<input type="date" name="date" className="datepicker" value={this.state.date} onChange={this.handleChange}/>
					        </div>
					        <div className="input-field col s3">
					        	<input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
					          <label>Title</label>
					        </div>
					        <div className="input-field col s3">
					        	<input type="text" name="amount" value={this.state.amount} onChange={this.handleChange}/>
					          <label>Amount</label>
					        </div>
					        <div className="input-field col s3">
					        	<button type="submit" className="btn btn-inline" disabled={this.valid()}>Create Record</button>
					        </div>
					      </div>
					    </form>
						</div>
        );
    }
});

