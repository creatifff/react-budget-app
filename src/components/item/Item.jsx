const Item = ({ item }) => {
  const { id, category, type, total } = item;

  return (
    <div className="item">
      <div className="item__left">


        <div className={`circle ${type}`}>
          {
            type === 'income' ? <i class="fa-solid fa-credit-card"></i> : <i class="fa-solid fa-basket-shopping"></i>
          }
          
        </div>

        <p className="category">Категория: {category}</p>
      </div>
      <div className="item__right">
        <p className="total">{total} rub</p>
        <button className="item__btn">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Item;
