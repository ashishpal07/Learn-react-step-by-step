import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query']});

async function main() {
  await prisma.post.create({
    data: {
      title: "post 1 title",
      content: "post 1 content",
      author: {
        connect: {
          id: 1
        }
      },
    }
  })
}

main()
.then(async () => {
  console.log("Query works");
  await prisma.$disconnect();
})
.catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});