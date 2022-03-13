import Prismic from "@prismicio/client";
import { DefaultClient } from "@prismicio/client/types/client";

export function getPlismicClient(req ?: unknown): DefaultClient{
    const prismic = Prismic.client(
        process.env.PRISMIC_API_ENDPOINT!,
        {
            req: req,
            accessToken: process.env.PRISMIC_TOKEN 

        }
    )
  
    return prismic;


}


