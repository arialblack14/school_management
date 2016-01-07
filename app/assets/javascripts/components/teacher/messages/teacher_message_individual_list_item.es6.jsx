class TeacherMessageIndividualListItem extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.disabledUsers.has(this.props.userId)) {
      this.state = {disabled: true};
    } else {
      this.state = {disabled: false};
    };
  }
  componentWillReceiveProps() {
    if(this.props.disabledUsers.has(this.props.userId)) {
      this.setState({disabled: true});
    };
  }
  render() {
    return(
      <li className={this.state.disabled ? "disabled" : "nav-links"}
        role="presentation"
        onClick={this.props.getItem}
        id={this.props.userId}
        type="user">
        <a>{this.props.name} <span className="glyphicon glyphicon-plus"/></a>
      </li>
    )
  }
}