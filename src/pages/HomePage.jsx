const HomePage = () => {
  return (
    <section>
      <div className="container">
        <div className="layout">
        <header>
          <h1>Общий баланс: 30000 руб.</h1>
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
            <div className="item">
                <div className="item__left">
                    <div className="circle expense">
                        {/* expense */}
                        <i class="fa-solid fa-basket-shopping"></i>
                    </div>

                    <p className="category">
                        Категория: продукты
                    </p>
                </div>
                <div className="item__right">
                    <p className="total">
                        2500 rub
                    </p>
                    <button className="item__btn">
                        Remove
                    </button>
                </div>
            </div>
            <div className="item">
                <div className="item__left">
                    <div className="circle income">
                        
                        {/* income */}
                        <i class="fa-solid fa-credit-card"></i>
                    </div>

                    <p className="category">
                        Категория: продукты
                    </p>
                </div>
                <div className="item__right">
                    <p className="total">
                        2500 rub
                    </p>
                    <button className="item__btn">
                        Remove
                    </button>
                </div>
            </div>
        </div>

        <div className="pagination">
            <button className="pagination__btn">
                <span>1</span>
            </button>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
