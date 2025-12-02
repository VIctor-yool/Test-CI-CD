import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllDogs = async (req, res, next) => {
  try {
    const list = await prisma.zoo.findMany({ orderBy: { id: "asc" } });
    res.json(list);
  } catch (err) {
    next(err);
  }
};

export const getDogById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const dog = await prisma.zoo.findUnique({ where: { id } });
    if (!dog) return res.status(404).json({ error: "Dog not found" });
    res.json(dog);
  } catch (err) {
    next(err);
  }
};

export const createDog = async (req, res, next) => {
  try {
    const { name, breed, age } = req.validatedBody || req.body;
    const created = await prisma.zoo.create({ data: { name, breed, age } });
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

export const updateDog = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { name, breed, age } = req.validatedBody || req.body;
    // check existence
    const existing = await prisma.zoo.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: "Dog not found" });
    const updated = await prisma.zoo.update({ where: { id }, data: { name, breed, age } });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteDog = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const existing = await prisma.zoo.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: "Dog not found" });
    await prisma.zoo.delete({ where: { id } });
    res.json({ deleted: true });
  } catch (err) {
    next(err);
  }
};

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
