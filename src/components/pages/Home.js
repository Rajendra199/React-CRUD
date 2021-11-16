import React, {useState , useEffect} from "react"
import axios from "axios"
import { Link } from "react-router-dom";

const Home = () => {
    const [users , setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    },[])

    const loadUsers = async () => {
        const {data} = await axios.get("http://localhost:3003/users");
        console.log(data);
        setUsers(data)
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
      };
    return (
        <div className = "container">
            <div className = "py-4">
                <h1>Home</h1>
                <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-primary mr-2">
                    <Link style={{color: "white", textDecoration: "none", fontWeight: "bold"}} to={`/users/${user.id}`}>View</Link>
                  </button>
                  <button className="btn btn-primary mr-2">
                    <Link style={{color: "white", textDecoration: "none", fontWeight: "bold"}} to={`/users/edit/${user.id}`}>Edit</Link>
                  </button>
                  <button className="btn btn-primary mr-2" onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                  {/* <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>
        </div>
            
    )
}

export default Home
