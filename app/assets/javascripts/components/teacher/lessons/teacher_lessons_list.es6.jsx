class TeacherLessonsList extends React.Component {
  render() {
    return (
      <div className="col-md-7 pull-left">
        <div className="panel panel-warning">
          <div className="panel-heading">Lessons</div>
          <div className="panel-body">
            <p>Here you can see lessons you are currently teaching.</p>
          </div>
          <ul className="list-group">
            {this.props.lessons.map(function(element){
              return <TeacherLessonListItem 
                      lesson={element}
                      key={element.id}/>
            }, this)}
          </ul>
        </div>
      </div>
    )
  }
}