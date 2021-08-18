import "./Main.css";

function Main({ children }) {
  return (
    <div>
      <div className="main__nav">
        <ul>
          <li>
            <a href="#omelet">Omelet</a>
          </li>
          <li>
            <a href="#cakes">Cake</a>
          </li>
          <li>
            <a href="#comfort-food">Comfort Food</a>
          </li>
          <li>
            <a href="#noodles">Noodles</a>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Main;
