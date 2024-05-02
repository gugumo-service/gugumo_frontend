import * as S from "./BallTag.style";

interface BallTagType {
    gametype? : "ball01" | "ball02" | "ball03" | "ball04" | "ball05" | "ball06"
}

export default function BallTag({gametype} : BallTagType) {

    let imageUrl, text;

    switch(gametype){
        case "ball01" :
            imageUrl = '/asset/balltype/ball01.png';
            text = "배드민턴";
            break;
        case "ball02" :
            imageUrl = '/asset/balltype/ball02.png';
            text = "농구";
            break;
        case "ball03" :
            imageUrl = '/asset/balltype/ball03.png';
            text = "풋살";
            break;
        case "ball04" :
            imageUrl = '/asset/balltype/ball04.png';
            text = "테니스";
            break;
        case "ball05" :
            imageUrl = '/asset/balltype/ball05.png';
            text = "탁구";
            break;
        case "ball06" :
            imageUrl = '/asset/balltype/ball06.png';
            text = "야구";
            break;
    }


  return (
    <S.Button>
        <div>
            {!gametype && "전체"}
            {
                gametype && 
                <>
                    <S.Imgbox>
                        <img src={imageUrl} alt={text} />
                    </S.Imgbox>
                    {text}
                </>
            }
        </div>
    </S.Button>
  )
}