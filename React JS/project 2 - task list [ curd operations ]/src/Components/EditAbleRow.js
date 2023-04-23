import {AiOutlineClose, AiOutlineCheck} from 'react-icons/ai';

function EditAbleRow({ editFormData, handleEditFormChange, handleCancelClick}) {
    return (
        <tr>
            <td>
            <input 
                type="text" 
                name="fullName" 
                required="required"
                placeholder="Name" 
                value={editFormData.fullName}
                onChange={handleEditFormChange}
              />
            </td>
            <td>
            <input 
                type="text" 
                name="tasks" 
                required="required"
                placeholder="tasks" 
                value={editFormData.tasks}
                onChange={handleEditFormChange}
              />
            </td>
            <td>
            <input 
                type="date" 
                name="dueDate" 
                required="required"
                value={editFormData.dueDate}
                onChange={handleEditFormChange}
              />    
            </td>
            <td>              
                <select name="status" required="required" value={editFormData.status} onChange={handleEditFormChange}>
                    <option value="">--select--</option>
                    <option value="Not Started">Not Started</option>
                    <option value="In-Process">In-Process</option>
                    <option value="Completed">Completed</option>
                </select>
            </td>
            <td>
                <div className='flx2'>
                    <div><button className='invisble-btn green' type="submit"><AiOutlineCheck /></button></div>
                    <div><button className='invisble-btn red' type="button" onClick={handleCancelClick}><AiOutlineClose /></button></div>
                </div>
            </td>
        </tr>
    );
}

export default EditAbleRow;