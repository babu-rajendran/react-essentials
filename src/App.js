import './App.css';
import restaurant from "./restaurant.jpg"

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>Welcome to my {props.adjective} kitchen!</p>
      <img 
        src={restaurant} 
        alt="tables at a restaurant" 
        height={200} />
      <ul style = {{ textAlign: "left"}}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}. All rights reserved.</p>
    </footer>
  );
}

const dishes = [
  "Idli",
  "Dosa",
  "Upma",
  "Pongal",
  "Poori",
  "Chappathi",
  "Parotta",
  "Masala Dosa",
  "Uthappam"
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish}))

function App() {
  return (
    <div className="App">
      <Header name="Babu" />
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
