import { useState } from "react";
import { nanoid } from 'nanoid';
import { useDispatch } from "react-redux";
import { addUser } from "redux/users/userSlice";

console.log(addUser)

export const AddUsersPage = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const dispatch = useDispatch();

    const handelChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'age':
                setAge(+value);
                break;
            default:
                return console.log('error');
        }
    }
    
    const handelSubmit = (event) => {
        event.preventDefault();
  
        const newUser = {
          name: name,
          age: age,
          id: nanoid(),
        };
        dispatch(addUser(newUser));

        setName('');
        setAge('');
    }

    return (
      <div>
        <form onSubmit={handelSubmit}>
          <label>
            Name
            <input
              name="name"
              value={name}
              type="text"
              placeholder="name"
              onChange={handelChange}
            />
          </label>
          <label>
            Age
            <input
              name="age"
              type="number"
              placeholder="...age"
              onChange={handelChange}
              value={age}
            />
          </label>
          <button type="submit"> Add user </button>
        </form>
      </div>
    );
}