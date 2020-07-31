import { v4 as uuid } from "uuid";
import Quote from "../models/Quote";
// Provide resolver functions for your schema fields
const quotes: any = {};
const addQuote = (quote: any) => {
    // let response  = null;
    const id = uuid();
    return Quote.create({ id, phrase: "mango", quotee: "apple" });
};
export const resolvers = {
    Mutation: {
        addQuote: async (parent: any, quote: any) => {
            return addQuote(quote).;
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
        quotes: () => Object.values(quotes)
    }
};
