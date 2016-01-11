class TeacherNewMessage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.changeReceiver = this.changeReceiver.bind(this);
    // form initial state
    this.state = {subject: "", body: "", receiver: "", multiReceivers: false};
  }
  handleSubject(event) {
    let subject = event.target.value;
    this.setState({subject: subject});
  }
  handleBody(event) {
    let body = event.target.value;
    this.setState({body: body});
  }
  changeReceiver(e) {
    if(e.target.value == "single") {
      this.setState({multiReceivers: false});
    } else {
      this.setState({multiReceivers: true});
    }
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
            <input type="radio" checked={!this.state.multiReceivers} onChange={this.changeReceiver} name="inlineRadioOptions" id="inlineRadio1" value="single"/>
            Single receiver
          </label>
          <label className="radio-inline">
            <input type="radio" onChange={this.changeReceiver} name="inlineRadioOptions" id="inlineRadio2" value="multi"/>
            Multiple receivers
          </label>
          </div>
          {!this.state.multiReceivers ? 
          (<TeacherSingleReceiver users={this.props.users} 
                                 currentUserId={this.props.currentUserId}
                                 subject={this.state.subject}
                                 body={this.state.body}/>) :
           <TeacherMultiReceiver currentUserId={this.props.currentUserId}
                                 subject={this.state.subject}
                                 body={this.state.body}/>
          }
        </form>
      </div>
    )
  }
}