import { z } from "zod";

const book = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    author: z.string()
})

export type book = z.infer<typeof book>;


const formBook = z.object({
    title: z.string(),
    description: z.string(),
    author: z.string()
})

export type formBook = z.infer<typeof formBook>;

let fromIndex = {
    title: '',
    description: '',
    author: ''
}
export const formBookIndex = formBook.parse(fromIndex);