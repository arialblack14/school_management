class TeacherMessageLessonListItem extends React.Component {
  constructor(props) {
    super(props)
    if(this.props.disabledLessons.has(this.props.lessonId)) {
      this.state = {disabled: true};
    } else {
      this.state = {disabled: false};
    };
  }
  componentWillReceiveProps() {
    if(this.props.disabledLessons.has(this.props.lessonId)) {
      this.setState({disabled: true});
    };
  }
  render() {
    return(
      <li className={this.state.disabled ? "disabled" : "nav-links"}
        role="presentation"
        onClick={this.props.getItem}
        id={this.props.lessonId}
        type="lesson">
        <a>{this.props.name} <span className="glyphicon glyphicon-plus"/></a>
      </li>
    )
  }
}