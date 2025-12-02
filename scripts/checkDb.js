import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

async function main() {
  try {
    const rows = await prisma.zoo.findMany({ orderBy: { id: "asc" } });
    console.log("rows count:", rows.length);
    console.log(JSON.stringify(rows, null, 2));
  } catch (e) {
    console.error("ERROR", e);
    process.exitCode = 2;
  } finally {
    await prisma.$disconnect();
  }
}

main();
