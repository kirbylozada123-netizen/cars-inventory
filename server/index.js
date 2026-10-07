const express = require("express");
const app = express();
const port = 3005;

const car = [
  {
    id: 1,
    maker: "Toyota",
    model: "carry",
    year: 2023,
    color: "silver",
    quantity: 15,
    dealer: "toyota of glendale",
  },
  {
    id: 2,
    maker: "honda",
    model: "civic",
    year: 2023,
    color: "black",
    quantity: 20,
    dealer: "honda downtown",
  },
  {
    id: 3,
    maker: "ford",
    model: "f-150",
    year: 2023,
    color: "white",
    quantity: 10,
    dealer: "ford of north hollywood",
  },
  {
    id: 4,
    maker: "chevrolet",
    model: "tahoe",
    year: 2023,
    color: "red",
    quantity: 8,
    dealer: "chevy malibu",
  },
  {
    id: 5,
    maker: "nissan",
    model: "rogue",
    year: 2023,
    color: "blue",
    quantity: 12,
    dealer: "nissan of burbank",
  },
  {
    id: 6,
    maker: "bmw",
    model: "x5",
    year: 2023,
    color: "gray",
    quantity: 5,
    dealer: "bmw of encio",
  },
  {
    id: 7,
    maker: "mercedes-benz",
    model: "c-class",
    year: 2023,
    color: "black",
    quantity: 7,
    dealer: "mb of bev hills",
  },
  {
    id: 8,
    maker: "hyudai",
    model: "elantra",
    year: 2023,
    color: "white",
    quantity: 18,
    dealer: "hyudai of a",
  },
  {
    id: 9,
    maker: "Toyota",
    model: "rav4",
    year: 2023,
    color: "black",
    quantity: 14,
    dealer: "toyota of pasadena",
  },
  {
    id: 10,
    maker: "Toyota",
    model: "corolla",
    year: 2023,
    color: "white",
    quantity: 22,
    dealer: "toyota of glendale",
  },
  {
    id: 11,
    maker: "bmw",
    model: "3 series",
    year: 2023,
    color: "black",
    quantity: 9,
    dealer: "bmw of bevrly hills",
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// 1.
app.get("/api/developer", (req, res) => {
  res.send("kirby lozada");
});
// 2.
app.get("/api/cars", (req, res) => {
  res.json(car);
});
// 3.
app.get("/api/cars/:maker", (req, res) => {
  const maker = String(req.params.maker);
  const cars = Data.cars.find((s) => s.maker === maker);

  if (!cars) {
    return res.status(404).json({ message: "error cars not found:" });
  }
  res.json(cars);
});

// 4.
app.get("/api/cars/:id", (req, res) => {
  const id = number(req.params.id);

  const car = data.car.find((s) => s.id === id);

  if (!car) {
    return res.status(404).json({ message: "cars not found" });
  }
  res.status(car);
});

// 5.

app.post("/api/cars", (req, res) => {
  const newcars = req.body;

  data.car.push(newcars);
  res.status(201).json({ message: "cars added" });
});

// 6.

// 7.

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
