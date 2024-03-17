import "./App.css";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <HomePage />
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
