const catalog = [
  {
    _id: 1,
    title: "Height adjustable desk",
    price: 349.99,
    category: "Desks",
    image: "product1.jpg",
  },
  {
    _id: 2,
    title: "Ergonomic office chair",
    price: 269.99,
    category: "TEST",
    image: "product2.webp",
  },
  {
    _id: 3,
    title: "Logitech ergonomic keyboard",
    price: 12.33,
    category: "TEST",
    image: "test1.jpg",
  },
  {
    _id: 4,
    title: "Logitech ergonomic mouse",
    price: 12.33,
    category: "TEST",
    image: "test1.jpg",
  },
  {
    _id: 5,
    title: "Ergonomic mouse assist",
    price: 12.33,
    category: "TEST",
    image: "test1.jpg",
  },
  {
    _id: 6,
    title: "",
    price: 12.33,
    category: "TEST",
    image: "test1.jpg",
  },
];

class Dataservice {
  getCatalog() {
    return catalog;
  }
}

export default Dataservice;
