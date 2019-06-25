import React from "react";
import EditForm from "./EditForm.jsx";

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      edit: ""
    };
    this.editEntry = this.editEntry.bind(this);
  }

  editEntry() {
    this.setState({
      show: true
    });
  }

  render() {
    const { show } = this.state;
    const { id } = this.props;
    if (show) {
      return (
        <div>
          <EditForm />
          <input type="submit" value="Submit Changes" />
        </div>
      );
    }
    return (
      <div>
        <input
          type="submit"
          value="Edit"
          onClick={e => this.editEntry(e)}
          id={id}
        />
      </div>
    );
  }
}

export default Edit;
