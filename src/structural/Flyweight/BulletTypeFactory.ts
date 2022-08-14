import { IBullet } from "./IBullet";
import { IBulletType } from "./IBulletType";

export class BulletTypeFactory{
    private bulletList : IBulletType[] = []

    getBulletType(bullet : IBullet){
        const name = bullet.bulletType.name

        let i = this.bulletList.findIndex(item => item.name === name)
        if(i === -1){
            this.bulletList.push({name : name , img : `image of ${name}`})
            i = (this.bulletList.length - 1)
        }   

        return this.bulletList[i]
    }

    getLength():number{
        return this.bulletList.length
    }
    
}