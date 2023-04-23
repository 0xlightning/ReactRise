import React , {Fragment, useState} from "react";
import { nanoid } from "nanoid";
import data from './mock-data.json';
import ReadOnlyRow from "./Components/ReadOnlyRow";
import EditAbleRow from "./Components/EditAbleRow";

function App() {
  const [displayContent, setDisplayContent] = useState(0);

  function displayForm(){
    setDisplayContent(1);
  }

  function displayNone(){
    setDisplayContent(0);
  }

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    tasks: "",
    dueDate: "",
    status: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    tasks: "",
    dueDate: "",
    status: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      tasks: addFormData.tasks,
      dueDate: addFormData.dueDate,
      status: addFormData.status,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    setDisplayContent(0);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      tasks: editFormData.tasks,
      dueDate: editFormData.dueDate,
      status: editFormData.status,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      tasks: contact.tasks,
      dueDate: contact.dueDate,
      status: contact.status,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div> 
      { displayContent ?  
        (
      <form className="addFormSubmit form-popup" onSubmit={handleAddFormSubmit}>
        <div className="form-title">
          <h2>Task Form</h2>
        </div>
        <div>
            <label for="fullName">Name :</label>
            <input 
              type="text" 
              name="fullName" 
              required="required"
              placeholder="Name" 
              onChange={handleAddFormChange}
            />
        </div>
        <div>
            <label for="tasks">Tasks :</label>
            <input 
              type="text" 
              name="tasks" 
              required="required"
              placeholder="Tasks" 
              onChange={handleAddFormChange}
            />
        </div>
        <div>
            <label for="duedate">Due date :</label>
            <div>
              <input 
                type="date" 
                name="dueDate" 
                required="required"
                onChange={handleAddFormChange}
              />
            </div>
        </div>
        <div>
            <label for="status">Status :</label>
            <div>
            <select name="status" required="required" onChange={handleAddFormChange}>
                <option value="">--select--</option>
                <option value="Not Started">Not Started</option>
                <option value="In-Process">In-Process</option>
                <option value="Completed">Completed</option>
            </select>
            </div>
        </div>
        <div className="flx2">
          <div><button className="bb-green">submit</button></div>
          <div><button onClick={displayNone} className="bb-red">close</button></div>
        </div>
      </form>
      ) : (
        null
      )
      }
      <div className="head flx">
        <div>
          <h1>Task list</h1>
        </div>
        <div>
          <button className="add" onClick={displayForm}>
            Add
          </button>
        </div>
      </div>
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <th className="w10">Name</th>
          <th className="w60">Tasks</th>
          <th className="w10">Due Date</th>
          <th className="w10">Status</th>
          <th className="w10">Action</th>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Fragment>
              { editContactId === contact.id ? 
                (<EditAbleRow 
                  editFormData={editFormData} 
                  handleEditFormChange={handleEditFormChange} 
                  handleCancelClick={handleCancelClick}
                />) 
                : 
                (<ReadOnlyRow
                 contact={contact}
                 handleEditClick={handleEditClick}
                 handleDeleteClick={handleDeleteClick}
                />) } 
            </Fragment>
          ))}
        </tbody>
      </table>
      </form>
    </div>
  );
}

export default App;