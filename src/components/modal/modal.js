import { useDispatch } from "react-redux"
import { deleteUser } from "redux/users/userSlice";

export const Modal = ({ onClose, id }) => {
    const dispatch = useDispatch();

    return (
      <div>
        <div>
          <p> are you shure ? </p>
          {/* <button type="button" onClick={() => dispatch(deleteUser(id))}>
            Yes
          </button> */}
          <button type="button" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    );
}