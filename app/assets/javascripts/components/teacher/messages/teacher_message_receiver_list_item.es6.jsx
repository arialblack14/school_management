class TeacherMessageReceiverListItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = {disabled: this.props.disabled || false};
  }
  render() {
    return(
      <li className={this.props.disabled ? "disabled" : "nav-links"} 
        role="presentation"
        onClick={this.props.getItem}
        id={this.props.id}
        type={this.props.type}>
        <a>{this.props.name} <span className="glyphicon glyphicon-plus"/></a>
      </li>
    )
  }
}