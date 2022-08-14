import { Compress } from "./Compress"
import { Encrypt } from "./Encrypt"
import { Save } from "./Save"

export const decoratorClient = ()=>{
    const job = new Encrypt(new Compress(new Save(null)))

    job.execute("abcdefghijklmnopqrstuvwxyz")
}