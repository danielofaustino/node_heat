import prismaClient from '../prisma';

class GetLast3MessageService {
  async execute() {
    const messages = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: 'desc',
      },
      include: {
        user: true,
      },
    });

    // SELECT * FROM MESSAGES LIMIT 3 ORDER BY CREATE_AT DESC
    return messages;
  }
}

export { GetLast3MessageService };
