class TeacherGroupListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let visibility = !this.state.visible;
    this.setState({visible: visibility});
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <li className="list-group-item highlight-hover" 
            key={this.props.group.id}>
            <b>{this.props.group.name}</b>
          <div className={this.state.visible ? "" : "hidden" }>
            <hr />
            <p>
              <b>Next lesson:</b>
            </p>
            <p>
              <b>Number of students:</b>
            </p>
          </div>
        </li>
      </div>
    )
  }
}