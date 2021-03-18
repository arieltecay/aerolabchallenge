import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { apiUrl } from "../../api/api";
import coin from "../../assets/icons/coin.svg";
import logo from "../../assets/aerolab-logo.svg";

import "./users.css";

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
        <div className="container-user">
          <img src={logo} alt="logo no disponible" />
          <div>
            {users.name}</div>
          <div className="container-points">
            {users.points}
            <img src={coin} alt="img no disponible" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
