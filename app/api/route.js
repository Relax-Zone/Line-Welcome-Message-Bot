import { NextResponse , NextRequest } from "next/server";
import { config } from "dotenv";
import axios from "axios";
config()

export async function POST(req){
    const data = await req.json()
    if(data.events.length === 0){
        console.log("verify test");
        return NextResponse.json({"message":"success"})
    }
    const group = data.events[0].source.groupId
    if(data.events[0].type === "memberJoined"){
        await axios.post("https://api.line.me/v2/bot/message/push",
        {
            "to": group,
            "messages":[
                {
                    "type":"text",
                    "text":"ยินดีต้อนรับสมาชิกใหม่ค้าบบค้าบ อย่าลืมรายงานตัวในโน้ตด้วยน้า!"
                }
            ]
        },
        { headers : {
            Authorization : `Bearer ${process.env.MSG_TOKEN}`
        } }    
    )
}
return NextResponse.json({"message":"success"})
}

export async function GET(){
    return NextResponse.json({"message" : "just linebot"})
}