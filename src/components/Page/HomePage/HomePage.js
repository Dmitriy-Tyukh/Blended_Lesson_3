import { useSelector } from "react-redux";
import { getUser } from "redux/users/userSelector";
import { useState } from "react";
import { Modal } from "components/modal/modal";

export const HomePage = () => {
    const users = useSelector(getUser)
    const [userId, setUserId] = useState('');

    const openModal = (id) => {
       setUserId(id)
    }
    const closeModal = () => {
       setUserId('')
    }
    
    return (
      <>
        {userId && <Modal onClose={closeModal} id={userId} />}
        <div>
          <table>
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Age</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => {
                return (
                  <tr key={user.id}>
                    <td>{idx + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>
                      <button type="button" onClick={() => openModal(user.id)}>
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
}