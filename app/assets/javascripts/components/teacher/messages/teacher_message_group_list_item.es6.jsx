class TeacherMessageGroupListItem extends React.Component {
  constructor(props) {
    super(props)
    if(this.props.disabledGroups.has(this.props.groupId)) {
      this.state = {disabled: true};
    } else {
      this.state = {disabled: false};
    };
  }
  componentWillReceiveProps() {
    if(this.props.disabledGroups.has(this.props.groupId)) {
      this.setState({disabled: true});
    };
  }
  render() {
    return(
      <li className={this.state.disabled ? "disabled" : "nav-links"} 
        role="presentation"
        onClick={this.props.getItem}
        id={this.props.groupId}
        type="group">
        <a>{this.props.name} <span className="glyphicon glyphicon-plus"/></a>
      </li>
    )
  }
}