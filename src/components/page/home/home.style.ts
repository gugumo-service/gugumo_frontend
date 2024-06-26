import styled, { css } from "styled-components";

export const Wrap = styled.div`
    max-width: 1024px;
    width: 95%;
    margin: 0 auto;
`;

export const HomeVisualTrack = styled.div`
    height: 856px;
    background: url('/asset/image/home/track.jpg') no-repeat center/cover;
    position: relative;

    @media screen and (max-width:1280px) {
        height: 756px;
    }

    @media screen and (max-width:820px) {
        height: 556px;
    }

`;

export const HomeVisualBack = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: url('/asset/image/home/visual.png') no-repeat center/cover;
    width: 100%;
    height: 100%;
    z-index: 3;
`;

export const HomeVisualDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    /* background: url('/asset/image/home/visual.png') no-repeat center/cover;
    width: 100%;
    height: 100%; */
    z-index: 2;
    text-align: center;
    width: 80%;

    h4 {
        font-family: 'KNUTRUTHTTF';
        font-size: 32px;
        color: #fff;
        word-break: keep-all;
        line-height: 1.4;
        opacity: 0;
    }

    svg {
        margin-top: 25px;
        vertical-align: top;
        max-width: 720px;
        opacity: 0;
    }

    @media screen and (max-width:820px) {
        h4 {
            font-size: 24px;
        }
    }

    @media screen and (max-width:820px) {
        h4 {
            font-size: 18px;
        }
    }

`;


// HomeWave

export const HomeWave = styled.div`
    overflow: hidden;
    background: #0085FF;
    padding: 22px 0;
    display: flex;

    div {
        flex: 0 0 auto;
        padding: 0 ${55/2}px;
        animation: wave 2s infinite linear;
    }

    @keyframes wave {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    @media screen and (max-width:820px) {
        
        padding: 18px 0;

        div {
            padding: 0 ${25/2}px;
            img {
                width: 90px;
            }
        }

    }

`;


// HomeKeyword

export const HomeKeyword = styled.div`
    padding: 182px 0 243px;
    position: relative;
    overflow: hidden;

    ${Wrap}{
        width: 80%;
    }

    @media screen and (max-width:820px) {
        padding: 122px 0 183px;
    }

`;

export const HomeKeywordImage = styled.div<{$type : "one" | "two" | "three"}>`
    position: absolute;
    ${({$type})=>{
        let style;
        switch($type){
            case "one" :
                style = css`
                    width: ${163*100/1920}vw;
                    left: ${91/1920*100}%;
                    bottom: ${21/634*100}%;
                `;
                break;
            case "two" :
                style = css`
                    width: ${114*100/1920}vw;
                    left: ${333/1920*100}%;
                    bottom: ${20/634*100}%;
                `;
                break;
            case "three" :
                style = css`
                    width: ${146*100/1920}vw;
                    right: ${55.46/1920*100}%;
                    bottom: ${19.74/634*100}%;
                `;
                break;
        }
        return style;
    }}

    @media screen and (max-width:820px) {
        
        ${({$type})=>{
            let style;
            switch($type){
                case "one" :
                    style = css`
                        width: ${163*100/1280}vw;
                        left: ${91/1280*100}%;
                    `;
                    break;
                case "two" :
                    style = css`
                        width: ${114*100/1280}vw;
                        left: ${420/1280*100}%;
                    `;
                    break;
                case "three" :
                    style = css`
                        width: ${146*100/1280}vw;
                        right: ${55.46/1280*100}%;
                    `;
                    break;
            }
            return style;
        }}

    }

`;

export const HomeKeywordMegaphoneBase = styled.div<{$right? : Boolean}>`
    position: relative;
    opacity: 0;
    & + & {
        margin-top: 85px;
    }
    ${({$right})=> $right ? css` text-align : right; ` : ""}

    @media screen and (max-width:820px) {
        & + & {
            margin-top: 65px;
        }   
    }

`;

export const HomeKeywordMegaphoneText = styled.div`
    padding: calc(22.5/22*1em) calc(45/22*1em);
    border-radius: 1000px;
    border: 1px solid #4FAAFF;
    font-family: "Pretendard";
    font-size: 22px;
    color: #4FAAFF;
    display: inline-block;
    word-break: keep-all;
    line-height: 1.3;

    span {
        font-weight: bold;
    }

    @media screen and (max-width:1280px) {
        font-size: 16px;
    }

    @media screen and (max-width:820px) {
        font-size: 14px;
    }

`;

export const HomeKeywordMegaphone = styled.div<{$right? : Boolean}>`
    position: absolute;
    
    img { 
        width: calc(158*100/1920*1vw); 
        max-width: 158px;
    }

    ${({$right})=>{
        if($right){
            return  css`
                right: 0;
                top: 50%;
                transform: translate(75%,-50%) scaleX(-1);
            `;
        }else{
            return  css`
                left: 0;
                top: 50%;
                transform: translate(-75%,-50%);
            `;
        }
    }}

    @media screen and (max-width:820px) {
        img { width : 68px; }
        ${({$right})=>{
            if($right){
                return  css`
                    right: 0;
                    top: 0;
                    transform: translate(50%,-50%) scaleX(-1);
                `;
            }else{
                return  css`
                    left: 0;
                    top: 0;
                    transform: translate(-50%,-50%);
                `;
            }
        }}

    }

`;


// HomeService

export const HomeService = styled.div`
    padding: 149px 0 230px;
    background: #0F7FFF;

    @media screen and (max-width:820px) {
        padding: 139px 0 180px;
    }

`;

export const HomeServiceDot = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    div {
        width: 13px;
        height: 13px;
        background: #fff;
        border-radius: 1000px;
    }

    @media screen and (max-width:820px) {
        div {
            width: 8px;
            height: 8px;
        }
    }

`;

export const HomeServiceTitle = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'KNUTRUTHTTF';
    font-size: 39px;
    margin-top: 35px;
    opacity: 0;

    @media screen and (max-width:1280px) {
        font-size: 24px;
        img {
            width: 186px;
        }
    }

    @media screen and (max-width:820px) {
        font-size: 18px;
        img {
            width: 136px;
        }
    }

`;

export const HomeServiceCardBase = styled.div`
    display: grid;
    align-items: flex-start;
    grid-template-columns: repeat(2,1fr);
    margin-top: 138px;
    gap: 30px;

    @media screen and (max-width:820px) {
        grid-template-columns: repeat(1,1fr);
        margin-top: 88px;
        gap: 50px;
    }    

`;

export const HomeServiceCardNum = styled.div`
    position: relative;
    background: url('/asset/image/home/Ellipse.png') no-repeat center;
    background-size: 75% 75%;
    width: 128.65px;
    height: 118.53px;
    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 52px;
        font-family: 'Black Han Sans';
        color: #fff;
    }

    @media screen and (max-width:1280px) {
        width: 98.65px;
        height: 88.53px;
        span {
            font-size: 32px;
        }
    }

    @media screen and (max-width:820px) {
        width: 78.65px;
        height: 68.53px;
        span {
            font-size: 24px;
        }
    }

`;

export const HomeServiceCard = styled.div`
    background: #fff;
    padding: 55px 31px;
    border-radius: 27px;
    position: relative;

    &::before,
    &::after {
        position: absolute;
        width: 12px;
        height: 12px;
        background: #4FAAFF;
        content: '';
        border-radius: 1000px;
    }

    &::before {
        top: 31.54px;
        left: 27.36px;
    }

    &::after {
        top: 31.54px;
        right: 27.36px;
    }

    p {
        margin-top: 14px;
        line-height: ${53/29};
        font-size: 29px;
        color: #53ACFF;
        padding-left: 37px;
        box-sizing: border-box;
        span {
            color: #0F7FFF;
            font-weight: bold;
        }
    }

    &:nth-of-type(2) {
        margin-top: 180px;
    }

    &:nth-of-type(3) {
        margin-top: -80px;
    }

    &:nth-of-type(4) {
        margin-top: 90px;
    }

    &:nth-of-type(even){
        ${HomeServiceCardNum} {
            margin-left: auto;
        }
    }

    @media screen and (max-width:1280px) {
        p {
            margin-top: 10px;
            font-size: 22px;
            padding-left: 20px;
        }
    }

    @media screen and (max-width:820px) {
        padding: 65px 11px 45px;
        p {
            margin-top: 10px;
            font-size: 18px;
            padding-left: 15px;
        }

        margin-top: 0 !important;

    }

`;

export const LinkBase = styled.div`
    margin-top: 213px;
    text-align: center;
    dl {
        dt {
            font-size: 39px;
            font-family: 'KNUTRUTHTTF';
            color: #fff;
            word-break: keep-all;
        }
        dd {
            margin-top: 15px;
        }
    }
    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        margin-top: 50px;
        width: calc(324/32*1em);
        height: calc(102/32*1em);
        border-radius: calc(22/32*1em);
        font-size: 32px;
        font-weight: 900;
        color: #4FAAFF;
    }

    @media screen and (max-width:1280px) {
        dl {
            dt {
                font-size: 28px;
            }
            dd {
                width: 226px;
                margin: 15px auto 0;
            }
        }
        a {
            font-size: 24px;
        }
    }

    @media screen and (max-width:820px) {
        
        margin-top: 151px;

        dl {
            dt {
                font-size: 22px;
            }
            dd {
                width: 146px;
                margin: 15px auto 0;
            }
        }
        a {
            font-size: 16px;
            margin-top: 30px;
        }

    }

`;