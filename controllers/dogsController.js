let nextId = 1;
let dogs = [
  { id: nextId++, name: "뽀삐", breed: "시츄", age: 3 },
  { id: nextId++, name: "콩이", breed: "말티즈", age: 2 },
  { id: nextId++, name: "루비", breed: "골든리트리버", age: 1 },
];

export const getAllDogs = (req, res) => {
  res.json(dogs);
};

export const getDogById = (req, res) => {
  const id = Number(req.params.id);
  const dog = dogs.find((d) => d.id === id);
  if (!dog) return res.status(404).json({ error: "Dog not found" });
  res.json(dog);
};

export const createDog = (req, res) => {
  const { name, breed, age } = req.validatedBody || req.body;
  const newDog = { id: nextId++, name, breed, age };
  dogs.push(newDog);
  res.status(201).json(newDog);
};

export const updateDog = (req, res) => {
  const id = Number(req.params.id);
  const dogIndex = dogs.findIndex((d) => d.id === id);
  if (dogIndex === -1) return res.status(404).json({ error: "Dog not found" });
  const { name, breed, age } = req.validatedBody || req.body;
  dogs[dogIndex] = { ...dogs[dogIndex], name, breed, age };
  res.json(dogs[dogIndex]);
};

export const deleteDog = (req, res) => {
  const id = Number(req.params.id);
  const dogIndex = dogs.findIndex((d) => d.id === id);
  if (dogIndex === -1) return res.status(404).json({ error: "Dog not found" });
  const deleted = dogs.splice(dogIndex, 1)[0];
  res.json({ deleted });
};
