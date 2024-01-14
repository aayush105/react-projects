import "./App.css";
import ContactFrom from "./components/ContactFrom/ContactFrom";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Nav from "./components/Navigation/Nav";
function App() {
  return (
    <div>
      <Nav />
      <main className="main_container">
        <ContactHeader />
        <ContactFrom />
      </main>
    </div>
    
  )
}

export default App
