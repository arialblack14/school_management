class TeacherReceiversBox extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps() {
    console.log(this.props);
  }
  render() {
    return(
      <div className="well well-lg">
        <table className="table table-condensed">
          <thead>
            <tr>
              <th>Receivers:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Groups:</th>
              <th>Lessons:</th>
              <th>Users:</th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}