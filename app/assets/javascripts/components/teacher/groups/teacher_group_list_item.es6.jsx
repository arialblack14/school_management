class TeacherGroupListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li className="list-group-item" key={this.props.group.id}>{this.props.group.name}</li>
    )
  }
}