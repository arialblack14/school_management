class TeacherGroupListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false}
    this.handleClick = this.handleClick.bind(this);
    if(this.props.activeGroupId == this.props.group.id) {
      this.state = {active: true};
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.activeGroupId == this.props.group.id) {
      this.setState({active: true})
    } else {
      this.setState({active:false})
    }
  }
  handleClick() {
    this.props.getActiveGroup(this.props.group.id);
  }
  render() {
    return (
      <div>
        <li className={`list-group-item highlight-hover ${this.state.active ? "active" : ""}`} 
            key={this.props.group.id}
            onClick={this.handleClick}>
            <div>
              <b>{this.props.group.name}<span className="glyphicon glyphicon-chevron-right"></span></b> 
            </div>
        </li>
      </div>
    )
  }
}