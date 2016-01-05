class TeacherSingleReceiver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {receiver: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReceiver = this.handleReceiver.bind(this);
  }
  handleReceiver(e) {
    let receiver = e.target.value;
    this.setState({receiver: receiver})
  }
  handleSubmit(e) {
    e.preventDefault();
    $.post( "/send_new_message", { conversation: {sender_id: this.props.currentUserId,
                                                  receiver_id: this.state.receiver,
                                                  subject: this.props.subject,
                                                  body: this.props.body}})
      .done(function( data ) {
        console.log(data);
      });
  }
  render() {
    return(
      <div>
        <div className="col-md-6">
          <select className="form-control" onChange={this.handleReceiver}>
            <option value="">Select receiver</option>
            {this.props.users.map(function(element){
              return (<option key={element.id} value={element.id}>{element.email}</option>)
            }, this)}
          </select>
        </div>
        <button onClick={this.handleSubmit} type="submit" className="btn btn-default">Submit</button>
      </div>
    )
  }
}