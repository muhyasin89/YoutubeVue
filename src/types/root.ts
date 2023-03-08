
import { z } from "zod";


const formLogin = z.object({
    username: z.string(),
    password: z.string()
})

export type formLogin = z.infer<typeof formLogin>;


let formInit = {
    username: '',
    password: '',
}
export const formLoginInit = formLogin.parse(formInit);

