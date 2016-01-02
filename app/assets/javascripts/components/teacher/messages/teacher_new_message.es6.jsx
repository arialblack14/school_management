class TeacherNewMessage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReceiver = this.handleReceiver.bind(this);

    // form initial state
    this.state = {subject: "", body: "", receiver: ""};
  }
  handleSubject(event) {
    let subject = event.target.value;
    this.setState({subject: subject});
  }
  handleBody(event) {
    let body = event.target.value;
    this.setState({body: body});
  }
  handleReceiver(e) {
    let receiver = e.target.value;
    this.setState({receiver: receiver})
  }
  handleSubmit(e) {
    e.preventDefault();
    $.post( "/send_new_message", { conversation: {sender_id: this.props.currentUserId,
                                                  receiver_id: this.state.receiver,
                                                  subject: this.state.subject,
                                                  body: this.state.body}})
      .done(function( data ) {
        console.log(data);
      });
    this.setState({subject: "", body: "", receiver: ""});
  }
  render() {
    return (
      <div>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Subject</label>
            <input className="form-control" placeholder="subject..." 
            onChange={this.handleSubject} value={this.state.subject}/>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="form-control" placeholder="Type message..." 
            onChange={this.handleBody} value={this.state.body}></textarea>
          </div>
          <div className="checkbox">
          <label className="radio-inline">
            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            Single receiver
          </label>
          <label className="radio-inline">
            <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            Multiple receivers
          </label>
          </div>
          <div className="col-md-6">
            <select className="form-control" onChange={this.handleReceiver}>
              <option value="">Select receiver</option>
              {this.props.users.map(function(element){
                return (<option key={element.id} value={element.id}>{element.email}</option>)
              }, this)}
            </select>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}