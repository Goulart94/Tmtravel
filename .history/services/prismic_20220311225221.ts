import Prismic from "@prismicio/client"

export function getPlismicClient(req ?: unknown){
    const prismic = Prismic.client(
        process.env.PRISMIC_TOKEN,
        {
            req: req,
            accessToken:  process.env.PRISMIC_TOKEN
        }  
    )
  
    return prismic;


}


