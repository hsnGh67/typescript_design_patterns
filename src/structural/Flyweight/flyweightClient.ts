import { BulletTypeFactory } from "./BulletTypeFactory"
import { IBullet } from "./IBullet"

export const flyweightClient = ()=>{
    const bulletData : IBullet[] = getBulletData()
    const BF = new BulletTypeFactory()

    const bullets = bulletData.map(item =>{ return{...item , bulletType : BF.getBulletType(item)}})
    console.log("BulletTypeFactory length => " , BF.getLength())
    bullets.map((item)=>console.log(item.bulletType.img))
    
}

const getBulletData=():IBullet[]=>{
    return [
        {
            x : 10,
            y : 20,
            bulletType : {
                name : "ak47",
                img : "dataOFAK47Img"
            }
        },
        {
            x : 12,
            y : 47,
            bulletType : {
                name : "Uzi",
                img : "dataOFUziImg"
            }
        },
        {
            x : 68,
            y : 40,
            bulletType : {
                name : "Uzi",
                img : "dataOFUziImg"
            }
        },
        {
            x : 92,
            y : 20,
            bulletType : {
                name : "M5",
                img : "dataOFM5Img"
            }
        },
        {
            x : 8,
            y : 58,
            bulletType : {
                name : "ak47",
                img : "dataOFAK47Img"
            }
        },
        {
            x : 10,
            y : 34,
            bulletType : {
                name : "Uzi",
                img : "dataOFUziImg"
            }
        },
        {
            x : 25,
            y : 98,
            bulletType : {
                name : "M5",
                img : "dataOFM5Img"
            }
        },
        {
            x : 12,
            y : 43,
            bulletType : {
                name : "M5",
                img : "dataOFM5Img"
            }
        },
        {
            x : 85,
            y : 46,
            bulletType : {
                name : "ak47",
                img : "dataOFAK47Img"
            }
        },
        {
            x : 44,
            y : 93,
            bulletType : {
                name : "M5",
                img : "dataOFM5Img"
            }
        },
    ]
}