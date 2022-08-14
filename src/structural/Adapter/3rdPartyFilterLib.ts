export class TwilightFilter{
    img : string | null = null

    init(img :string){
        this.img = img
    }

    doFilter(){
        try{
            if(this.img){
                this.img = `${this.img} [Twilight Filter]`
                console.log(this.img)
                return this.img  
            }
            throw new Error("Please init filter")
        }catch(e){
            console.log(e)
        }
    }
}