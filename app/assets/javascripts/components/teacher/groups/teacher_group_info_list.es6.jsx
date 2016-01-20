class TeacherGroupInfoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {groupReceived: false, activeTab: "lessonDates"}
    this.changeActiveTab = this.changeActiveTab.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.groupLoaded) {
      this.setState({group: nextProps.group, groupReceived: true})
    } else {
      this.setState({groupReceived: false})
    }
  }
  changeActiveTab(e) {
    let newTab = e.target.id;
    this.setState({activeTab: newTab})
  }
  render() {
    return(
      <div>
        <div className="panel panel-info">
          <div className="panel-heading">Group Info {this.state.groupReceived ? "" : <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"/>}</div>
          <div className="panel-body">
            <p>Information:</p>
          </div>
          {this.state.groupReceived ?
          <table className="table">
            <thead>
              <tr><th>Group name: {this.state.group.name}</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button onClick={this.changeActiveTab} 
                      className="btn btn-warning"
                      id="lessonDates">Dates:
                  </button>
                 <button onClick={this.changeActiveTab}
                         className="btn btn-success"
                         id="studentList">Students:
                  </button>
                </td>
              </tr>
              {this.state.group.lessons.map(function(element) {
                return <tr key={element.id}>
                         <td>
                           <b>{element.name}</b><br/>
                           <TeacherLessonDatesList 
                                                   activeTab={this.state.activeTab}
                                                   lessonDates={element.lesson_dates}/>
                           <TeacherStudentsList    
                                                   activeTab={this.state.activeTab}
                                                   students={element.students}/>
                          </td>
                        </tr>
              }, this)}
            </tbody>
          </table> :
          <p>Loading...</p>
          }
        </div>
      </div>
    )
  }
}