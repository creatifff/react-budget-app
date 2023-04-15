import { useEffect, useState } from "react";
import CreateItemForm from "../components/CreateItemForm/CreateItemForm";
import Item from "../components/item/item";
import { TYPES } from "../components/types/operations";
import formatMoney from "../components/utils/formatMoney";
import calculateBalance from "../components/utils/calculateBalance";
import Storage from "../services/StorageService";
import Filter from "../components/Filter/Filter";

const initialItemsState = [];

const initialBalanceState = 0;

const HomePage = () => {
  const [balance, setBalance] = useState(initialBalanceState);
  const [items, setItems] = useState(initialItemsState);
  
  const [filteredItems, setFilteredItems] = useState(initialItemsState);

  useEffect(()=> {
    if (Storage.isNull('items')) {
      Storage.set('items', []);
    } else {
      setItems(Storage.get('items'));
    }

  }, [])

  useEffect(() => {
    setBalance(calculateBalance(items));
    setFilteredItems(items);
  }, [items]);


  

  const onClickFilterIncomeItems = ()=> {
    setFilteredItems((prevState)=> {
      prevState = [...prevState];

      prevState = items.filter((item)=> {
        return item.type === TYPES.INCOME;
      });

      return prevState;
    });

  };

  const onClickFilterExpenseItems = () => {
    setFilteredItems((prevState)=> {
      prevState = [...prevState];

      prevState = items.filter((item)=> {
        return item.type === TYPES.EXPENSE;
      });

      return prevState;
    });
  };

  const onClickFilterAllItems = () => {
    setFilteredItems(items);
  }

  return (
    <section>
      <div className="container">
        <div className="layout">
          <header>
            <h1>Общий баланс: {formatMoney(balance)}</h1>
          </header>

          <CreateItemForm setItems={setItems}/>

          <div className="wrapper">
            <h2>Операции</h2>
            <Filter items={items} setFilteredItems={setFilteredItems}/>

            <div className="items">
              <div className="items">
                {filteredItems.length === 0 
                ? (
                  <h3>Операций пока нет</h3>
                ) : (
                  filteredItems.map((item) => <Item key={item.id} item={item} />)
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
