import NavBar from "../components/NavBar";
import UserCard from "../components/UserCard";

function Home() {
  const user = { name: "Branice Simaloi" };

  return (
    <main>
      <NavBar /> 
      <h1>Welcome Home</h1>
      <UserCard user={user} /> 
    </main>
  );
}

export default Home;
