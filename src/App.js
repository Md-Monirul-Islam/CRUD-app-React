import { Edit, PlusCircle, Trash2 } from 'react-feather';
import './App.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';


function App() {

  const blankUser = {
    'name':'',
    'email':'',
    'role':'',
    'address':'',
  }

  const [open, setOpen] = useState(false);

  const [user, setUser] = useState(blankUser);

  const [userData, setUserData] = useState([])

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const addUser = () => {
    setUserData([...userData,user])
    setUser(blankUser)
    onCloseModal();
  }

  return (
    <div className="container">
      <div className='d-flex'>
        <h1>CRUD APP</h1>
      </div>
      <div className="toolbar">
        <div className="btn" onClick={onOpenModal}>
          <PlusCircle size={16}></PlusCircle>
          <span>Add</span>
        </div>
      </div><hr />

      <p>{ JSON.stringify(userData) }</p>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Munna</td>
            <td>munna@gmail.com</td>
            <td>CEO</td>
            <td>SMR</td>
            <td>
              <button className='btn ml2'>
                <Edit size={16}></Edit>
                <span>Edit</span>
              </button>
              <button className='btn ml2'>
                <Trash2 size={16}></Trash2>
                <span>Delete</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <Modal open={open} onClose={onCloseModal} center>
        <h2>Add User</h2>
        <p>{ JSON.stringify(user) }</p>
        <div className="form">
            <label htmlFor="name">Name</label>
            <input type="text" onChange={(e)=> setUser({...user,'name':e.target.value})} />

            <label htmlFor="email">Email</label>
            <input type="text" onChange={(e)=> setUser({...user,'email':e.target.value})} />

            <label htmlFor="role">Role</label>
            <input type="text" onChange={(e)=> setUser({...user,'role':e.target.value})} />

            <label htmlFor="address">Address</label>
            <textarea name="address" id="" cols="30" rows="10"  onChange={(e)=> setUser({...user,'address':e.target.value})}></textarea>
            <button className='btn' onClick={()=>addUser()}>Submit</button>
        </div>
      </Modal>

    </div>
  );
}

export default App;
