export class SingleQueue {
    private static instance : SingleQueue | null = null
    queue : string[]

    static getInstance():SingleQueue{
        if(this.instance === null){
            this.instance = new SingleQueue()
        }

        return this.instance
    }

    private constructor(){
        this.queue = []
    }

    addToQueue(query : string){
        this.queue.push(query)
    }
}