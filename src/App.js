import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const fullName = "Cristiano Ronaldo dos Santos Aveiro";
  const bio = "Surnommé CR7, né le 5 février 1985 à Funchal";
  const profession = "Footballeur international portugais";
  const alertme = () => alert("My Name Is " + fullName);
  return (
    <div className="App">
      <Profile
        fullName={fullName}
        bio={bio}
        profession={profession}
        alertme={alertme}
        className="card"
      >
        <img
          src="/images/ronaldo.png"
          alt="ronaldo"
          style={{ width: "260px", height: "240px" }}
        />
      </Profile>
    </div>
  );
}

export default App;
