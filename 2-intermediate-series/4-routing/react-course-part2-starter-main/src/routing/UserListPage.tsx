import { useSearchParams } from "react-router-dom";

const UserListPage = () => {
  const users = [
    { id: 1, name: 'Mosh' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Alice' },
  ];
  //Place data in URL
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item" key={user.id} onClick={() => {
          setSearchParams({id: user.id.toString(), name: user.name})
        }}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserListPage;
