import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function main() {
  const name = process.argv[2] || "테스트견";
  const breed = process.argv[3] || "믹스";
  const age = Number(process.argv[4] || 1);
  try {
    const created = await prisma.zoo.create({ data: { name, breed, age } });
    console.log("created:", created);
  } catch (e) {
    console.error("CREATE ERROR", e);
    process.exitCode = 2;
  } finally {
    await prisma.$disconnect();
  }
}

main();
