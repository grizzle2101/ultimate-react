import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams(); 
  console.log('params - ', params);

  const [searchParams, setSearchParams] = useSearchParams()
  console.log('searchParams - ', searchParams.toString());

  const location = useLocation();
  console.log('location - ', location);


  console.log('name - ', searchParams.get('name'));

  return <p>User</p>;
};

export default UserDetailPage;
