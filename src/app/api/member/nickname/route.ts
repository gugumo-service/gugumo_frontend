import axios from "axios";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req : NextRequest)=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    const searchParams = req.nextUrl.searchParams;
    const nickname = searchParams.get('nickname');
    
    try{
        const response = await axios.get(`${process.env.API_URL}/api/v1/member/checkDuplicateNickname`,{
            params : {
                nickname
            }
        });
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(e : any){
        const {response} = e;
        return new NextResponse(JSON.stringify(response.data));
    }

}

export const PATCH = async (req : NextRequest)=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');
    
    const headersList = headers();
    const token = headersList.get('authorization');
    const body = await req.json();

    try{
        const response = await axios.patch(`${process.env.API_URL}/api/v1/member/updateNickname`,body,{
            headers : {
                Authorization : token
            }
        });
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(e : any){
        const {response} = e;
        return new NextResponse(JSON.stringify(response.data));
    }

}