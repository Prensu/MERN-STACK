import Student from "./Student.jsx";
import './Student.css';
function App() {
  return(
    <>
    <Student name="Spongebob" age={34} isStudent={false} />
      <Student name="Sandy" age={35} isStudent={true} />
      <Student name="Spongebob" age={12} isStudent={true} />
      <Student />

    </>
  );
}

export default App;