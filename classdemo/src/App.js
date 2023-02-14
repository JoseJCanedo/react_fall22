import CardsSection from "./components/CardsSection";
import Header from "./components/Header";
import Nav  from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Header 
        linkText="Learn React"
        linkUrl="https://reactjs.org"
      />
      <CardsSection />
    </div>
  );
}

export default App;


// props -> passed down from parent to child. A child should not change the props

// state -> is owned by component
  // setState() -> component lifecycle methods
  // hooks -> useeffects