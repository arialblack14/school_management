class TeacherMessageReplyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleReplyForm = this.handleReplyForm.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.state = {activeForm: false, body: ""};
  }
  handleReplyForm(event) {
    let toggled = !this.state.activeForm;
    this.setState({activeForm: toggled});
    event.preventDefault();
  }
  handleSubmit(e) {
    e.preventDefault();
    $.post("/send_message", function(data){
      console.log(data);
    });
  }
  handleBodyChange(e) {
    this.setState({body: e.target.value});
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
            onChange={this.handleBodyChange}></textarea>
            <button className="btn btn-success" onClick={this.handleSubmit}>Send</button>
            <button className="btn btn-danger" onClick={this.handleReplyForm}>Cancel</button>
          </form>
        </div>
      </div>
      )
  }
}