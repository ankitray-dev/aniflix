import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV == 'production') global.prismadb = client; //This code is for Next JS hot reloading so that it will not create new Prisma instances every time it loads. In this code the Prisma client are save in the global file which is not affected by the hot reloading. 

export default client;