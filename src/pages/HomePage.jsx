import { useEffect, useState } from "react";
import Item from "../components/item/item";
import calculateBalance from "../components/utils/calculateBalance";
import formatMoney from "../components/utils/formatMoney";
import getType from "../components/utils/getType";
import { CATEGORIES } from "../data/category";

const initialItemsState = [];

const initialFormState = {
  value: 0,
  category: "none",
};

const initialBalanceState = 0;

const HomePage = () => {
  const [balance, setBalance] = useState(initialBalanceState);
  const [items, setItems] = useState(initialItemsState);
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    setBalance(calculateBalance(items));
  }, [items]);

  const onChangeCategoryHandle = (e) => {
    setForm((prevState) => {
      prevState = { ...prevState };

      prevState.category = e.target.value;

      return prevState;
    });
  };

  const onChangeInputHandle = (event) => {
    setForm((prevState) => {
      prevState = { ...prevState };

      const value = parseInt(event.target.value) || 0;

      if (!isNaN(value)) {
        prevState.value = value;
      }

      return prevState;
    });
  };

  const createItemHandle = () => {
    setItems((prevState) => {
      prevState = [...prevState];

      prevState.push({
        category: form.category,
        total: form.value,
        type: getType(form.category),
        id: Date.now(),
        created_at: new Date(),
      });

      return prevState;
    });

    setForm(initialFormState);
  };

  const SelectOptions = Object.keys(CATEGORIES).map((category) => {
    return (
      <option key={category} value={category}>
        {CATEGORIES[category]}
      </option>
    );
  });

  return (
    <section>
      <div className="container">
        <div className="layout">
          <header>
            <h1>Общий баланс: {formatMoney(balance)}</h1>
          </header>

          <div className="form">
            <h2>Добавить операцию</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="total"
                placeholder="Введите сумму..."
                onChange={(e) => onChangeInputHandle(e)}
                value={form.value}
              />
              <select
                onChange={(e) => onChangeCategoryHandle(e)}
                name="category"
              >
                <option value="none">Выберите категорию</option>
                {SelectOptions}
              </select>
              <button onClick={createItemHandle} className="button">
                Добавить операцию
              </button>
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
                {items.length === 0 
                ? (
                  <h3>Операций пока нет</h3>
                ) : (
                  items.map((item) => <Item key={item.id} item={item} />)
                )}
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
