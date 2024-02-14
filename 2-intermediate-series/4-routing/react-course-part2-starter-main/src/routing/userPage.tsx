import { useSearchParams } from "react-router-dom";

const UserPage = () => {

    //get user from route
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const userName = searchParams.get('name');


  return (
    <>
    <h2> User Details:</h2>
    <h3> {id}</h3>
    <h3> {userName}</h3>
    </>
  );
};

export default UserPage;
