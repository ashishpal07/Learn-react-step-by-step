import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  let user = await prisma.user.findUnique({
    where: {
      id: 1
    },
    include: {
      posts: true
    }
  })

  console.log(user);
}

main()
  .then(async () => {
    console.log("get user query works");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })