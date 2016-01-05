class TeacherMessageLessonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lessons: ""};
  }
  componentDidMount() {
    $.get("/get_lessons", function(data){
      this.setState({lessons: data.teacher_dashboard});
    }.bind(this));
  }
  render() {
    let lessonListItems = [];
    if(this.state.lessons.length > 0) {
      this.state.lessons.map(function(element){
        lessonListItems.push(<TeacherMessageLessonListItem key={element.id} name={element.name}/>);
      });
    } else {
      lessonListItems = <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>;
    }
    return(
      <div className="col-md-6">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title"><b>Lesson listing</b></h3>
          </div>
          <div className="panel-body">
            <p>Every student/teacher which is assigned to the lesson will receive message.</p>
            <ul className="nav nav-pills">
              {lessonListItems}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}