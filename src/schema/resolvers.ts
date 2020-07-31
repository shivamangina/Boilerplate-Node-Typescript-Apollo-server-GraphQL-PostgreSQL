import { v4 as uuid } from "uuid";
import Quote from "../models/Quote";
// Provide resolver functions for your schema fields
const quotes: any = {};

export const resolvers = {
    Mutation: {
        addQuote: async (parent: any, ctx: any) => {
            const id = uuid();
            const q = await Quote.create({ id, phrase: ctx.phrase, quotee: ctx.quotee });
            return { id: q.getDataValue("id"), phrase: q.getDataValue("phrase"), quotee: q.getDataValue("quotee") };
        },
        editQuote: async (parent: any, { id, ...quote }: any) => {
            if (!quotes[id]) {
                throw new Error("Quote doesn't exist");
            }

            quotes[id] = {
                ...quotes[id],
                ...quote
            };

            return quotes[id];
        },
        deleteQuote: async (parent: any, { id }: any) => {
            const ok = Boolean(quotes[id]);
            delete quotes[id];

            return { ok };
        }
    },
    Query: {
        quotes: async () => await Quote.findAll({})
    }
};
