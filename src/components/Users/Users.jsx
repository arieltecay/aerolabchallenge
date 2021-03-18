import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { apiUrl } from "../../api/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = useCallback(async (dispatch) => {
    try {
      const result = await axios.get(`${apiUrl}/user/me`);
      setUsers(result.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  });
  return (
    <div>
      {loading ? (
        <div>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          id: {users._id} - Name: {users.name} - Puntos: {users.points}
        </div>
      )}
    </div>
  );
};

export default Users;
