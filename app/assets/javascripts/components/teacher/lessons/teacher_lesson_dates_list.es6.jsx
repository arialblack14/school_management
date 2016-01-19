class TeacherLessonDatesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {visible: true}
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.activeTab == "lessonDates") {
      this.setState({visible: true})
    } else {
      this.setState({visible: false})
    }
  }
  render() {
    let lessonDates = [];
    if(this.props.lessonDates.length > 0) {
      this.props.lessonDates.map(function(element) {
        lessonDates.push(<TeacherLessonDatesListItem lessonDate={element}/>)
      }, this)
    } else {
      lessonDates.push(<li className="list-group-item">No dates</li>)
    }
    return(
      <div className={this.state.visible ? "" : "hidden"}>
        <ul className="list-group">
          {lessonDates}
        </ul>
      </div>
    )
  }
}