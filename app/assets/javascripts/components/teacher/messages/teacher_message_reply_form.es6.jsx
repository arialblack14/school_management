class TeacherMessageReplyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleReplyForm = this.handleReplyForm.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.state = {activeForm: false, body: "", disabled: true};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleReplyForm(event) {
    let toggled = !this.state.activeForm;
    this.setState({activeForm: toggled, body: ""});
    $("#message-input").val("");
    (event == undefined) ? false : event.preventDefault();
  }
  handleSubmit(e) {
    e.preventDefault();
    $.post( "/send_message", { conversation: {body: this.state.body, conversation_id: this.props.conversationId}})
      .done(function( data ) {
        this.props.getMessages();
      }.bind(this));
    this.handleReplyForm();
  }
  handleBodyChange(e) {
    let targetValue = e.target.value;
    this.setState({body: targetValue});
    if (targetValue.length > 0) {
      this.setState({disabled: false});
    } else {
      this.setState({disabled: true});
    };
  }
  render() {
    return (
      <div> 
        <a className="nav-links" onClick={this.handleReplyForm}>
          <p>Quick reply <span className="glyphicon glyphicon-share-alt"/></p>
        </a>
        <div className={this.state.activeForm ? "" : "hidden"}>
          <form>
            <textarea className="form-control" 
            rows="3" placeholder="Type your message..."
            onChange={this.handleBodyChange} id="message-input"></textarea>
            <button disabled={this.state.disabled} className="btn btn-success" onClick={this.handleSubmit}>Send</button>
            <button className="btn btn-danger" onClick={this.handleReplyForm}>Cancel</button>
          </form>
        </div>
      </div>
      )
  }
}