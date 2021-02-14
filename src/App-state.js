import propTypes from "prop-types"

function Coffee({fav, picture, rating}) {
  return (
    <div>
      <h2>{fav}는 맛있다!</h2>
      <h4>내 점수는 {rating}점</h4>
      <img src={picture} alt={fav} />
    </div>
  );
}

Coffee.propTypes = {
  fav: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.string.isRequired,
}

const CoffeeList = [
  {
    id:1,
    name : "Latte",
    image : "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110569]_20150813221315652.jpg",
    rating: 5
  },
  {
    id:2,
    name : "Americano",
    image : "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100303.jpg",
    rating: 4.2
  },
  {
    id:3,
    name : "Cappuccino",
    image : "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110601]_20150803101742023.jpg",
    rating: 3
  },
  {
    id:4,
    name : "Caffe Mocha",
    image : "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[46]_20150803105115048.jpg",
    rating: 4.7
  },
  {
    id:5,
    name : "Espresso",
    image : "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[20]_20150813221922951.jpg",
    rating: 1
  }
]

function App() {
  return (
    <div class="App">
      {CoffeeList.map(menu => <Coffee key={menu.id} fav={menu.name} picture={menu.image} rating={menu.rating}/>)}
    </div>
  );
}

export default App;