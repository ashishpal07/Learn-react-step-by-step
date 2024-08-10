
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  let updatedUser = await prisma.user.update({
    where: {
      id: 1
    },
    data: {
      name: "Priyanka Pal"
    }
  });

  console.log(updatedUser);
}

main()
  .then(async () => {
    console.log("update query works");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })