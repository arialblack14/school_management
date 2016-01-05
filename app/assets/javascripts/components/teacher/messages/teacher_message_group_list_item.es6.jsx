class TeacherMessageGroupListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <li className="nav-links" 
        role="presentation">
        <a>{this.props.name} <span className="glyphicon glyphicon-plus"/></a>
      </li>
    )
  }
}