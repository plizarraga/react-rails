var Record = React.createClass({
    displayName: 'Record',
    handleDelete: function(e) {
        $.ajax({
          method: 'DELETE',
          url: '/records/' + this.props.record.id,
          dataType: 'JSON',
          success: function() {
            this.props.handleDeleteRecord(this.props.record)
            Materialize.toast('Record deleted.', 5000, 'rounded');
          }.bind(this)
        });
    },
    handleSetRecord: function(){
      // this.props.setRecord(this.props.record)
      alert("@todo: id:" +this.props.record.id)
    },
    render: function() {
        return (
            <tr>
		        <td>{this.props.record.title}</td>
		        <td>{this.props.record.date}</td>
            <td>{amountFormat(this.props.record.amount)}</td>
		        <td>
              <a href="#" onClick={this.handleSetRecord}>Edit</a>&nbsp;|&nbsp;
              <a href="#" onClick={this.handleDelete}>Delete</a>  
            </td>
		      </tr>
        );
    }
});