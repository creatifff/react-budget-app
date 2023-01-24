import { useState } from "react";
import Item from "../components/item/item";
import formatMoney from "../components/utils/formatMoney";

const TYPES = {
  INCOME: "income",
  EXPENSE: "expense",
};

const initialItemsState = [
  {
    category: "products",
    total: 2000,
    type: TYPES.EXPENSE,
    id: 1,
    created_at: new Date("2023-01-24"),
  },
  {
    category: "products",
    total: 50000,
    type: TYPES.INCOME,
    id: 2,
    created_at: new Date("2023-01-25"),
  },
];

const HomePage = () => {
  const [items, setItems] = useState(initialItemsState);

  return (
    <section>
      <div className="container">
        <div className="layout">
          <header>
            <h1>Общий баланс: {formatMoney(70000)}</h1>
          </header>

          <div className="form">
            <h2>Добавить операцию</h2>
            <form>
              <input type="text" name="total" placeholder="30 000 rub" />
              <select name="category">
                <option value="salary">Зарплата</option>
              </select>
              <button className="button">Добавить операцию</button>
            </form>
          </div>

          <div className="wrapper">
            <h2>Операции</h2>
            <div className="filter">
              <button className="filter__btn">Все операции</button>
              <button className="filter__btn">Все доходы</button>
              <button className="filter__btn">Все расходы</button>
            </div>

            <div className="items">
              <div className="items">
                {items.map((item) => (
                  <Item key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div className="pagination">
              <button className="pagination__btn">
                <span>1</span>
              </button>
              <button className="pagination__btn">
                <span>2</span>
              </button>
              <button className="pagination__btn">
                <span>3</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
