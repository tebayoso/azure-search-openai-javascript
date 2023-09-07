import { FastifyPluginAsync, FastifyRequest } from 'fastify';

export type ChatRequest = FastifyRequest<{
  Body: {
    approach: string;
    overrides: Record<string, any>;
  };
}>;

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return { root: true };
  });

  // fastify.post('/chat', {
  //   schema: {
  //     body: {
  //       type: 'object',
  //       properties: {
  //         approach: {
  //           type: 'string',
  //         },
  //       },
  //     },
  //   },
  //   handler: async function (request: ChatRequest, reply) {
  //     const { approach } = request.body;
  //     const chatApproach = fastify.approaches.chat[approach];
  //     if (!chatApproach) {
  //       reply.code(400);
  //       return {
  //         error: `Chat approach "${approach}" is unknown or not implemented.`,
  //       };
  //     }

  //     const { history, overrides } = request.body;
  //     try {
  //       return await chatApproach.run(history, overrides);
  //     } catch (_error: unknown) {
  //       const error = _error as Error;
  //       fastify.log.error(error);
  //       reply.code(500);
  //       return { error: `Unknown server error: ${error.message}` };
  //     }
  //   },
  // });
};

export default root;