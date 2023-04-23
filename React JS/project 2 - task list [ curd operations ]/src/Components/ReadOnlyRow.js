import {FaTrash, FaRegEdit} from 'react-icons/fa';

function ReadOnlyRow({contact , handleEditClick, handleDeleteClick}) {
    return (
        <tr>
            <td>{contact.fullName}</td>
            <td>{contact.tasks}</td>
            <td>{contact.dueDate}</td>
            <td><button className='bor'>{contact.status}</button></td>
            <td>
                <div className='flx2'>
                    <div><button className='invisble-btn blue' type="button" onClick={(event) => handleEditClick(event, contact)}><FaRegEdit /></button></div>
                    <div><button className='invisble-btn red' type="button" onClick={() => handleDeleteClick(contact.id)}><FaTrash /></button></div>
                </div>
            </td>
        </tr>
    );
}

export default ReadOnlyRow;

// <button className='bor green'>{contact.status}</button>