import * as S from "../style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import Input from "@components/common/Mypage/Input/Input";
import Change from "@components/common/Mypage/Change/Change";
import White from "@components/common/Button/White/White";
import { MypageSkeleton } from "@components/skeleton/skeleton.styled";
import { useAppDispatch } from "@store/hook";
import { open } from "@store/features/modal/modal";
import Error from "@components/common/Alert/Error/Error";
import Success from "@components/common/Alert/Success/Success";

interface propsType {
  isLoading : boolean;
  setNickname: Dispatch<SetStateAction<string>>;
}

export default function Nickname({isLoading,setNickname} : propsType) {

  const {register,handleSubmit,setValue,getValues} = useForm();
  const [ischeck,setIscheck] = useState(true);
  const dispatch = useAppDispatch();

  // 중복확인버튼
  const confirmHanlder = ()=>{
    
    const {nickname} = getValues();

    if(nickname === ""){
      return dispatch(open({Component : Error,props : {errorMessage : '닉네임을 입력해주세요.'}}));
    }
    
    axios.get('/api/member/nickname',{
      params : {
        nickname
      }
    })
    .then((res)=>{
      const {status,message,data} = res.data;
      if(status === "success"){
        if(data){
          dispatch(open({Component : Error,props : {errorMessage : "중복된 닉네임이 있습니다."}}));
          setValue('nickname','');
          return setIscheck(true);
        }else{
          dispatch(open({Component : Success,props : {successMessage : "사용하실수 있는 닉네임 입니다."}}));
          return setIscheck(false);
        }
      }else if(status === "fail"){
        alert(message);
      }
    });

  }

  // 개인정보 수정 버튼
  const submitHanlder = (event : any)=>{

    if(ischeck){
      return dispatch(open({Component : Error,props : {errorMessage : '닉네임 중복 체크를 해주세요.'}}));
    }

    const {nickname} = event;
    axios.patch('/api/member/nickname',{
      nickname
    })
    .then(res=>{
      const {status,message} = res.data;
      if(status === "success"){
        dispatch(open({Component : Success,props : {successMessage : '닉네임 변경이 완료되었습니다.'}}));
        setNickname(nickname);
        setValue('nickname','');
        setIscheck(true); // 중복확인 초기화
      }else if(status === "fail"){
        alert(message);
        setValue('nickname','');
      }
    });

  }

  return (
    <S.NicknameBox>
      {
        isLoading ? <MypageSkeleton/>
        :
        <form onSubmit={handleSubmit(submitHanlder)}>
          <S.Layout>
            <h4>개인정보 변경</h4>
            <S.InputLayout>
              <S.Label htmlFor="nickname">닉네임</S.Label>
              <S.Flex>
                <Input>
                  <input type="text" id="nickname" placeholder="닉네임을 입력하세요." {...register('nickname')}/>
                </Input>
                <Change onClick={confirmHanlder}>중복확인</Change>
              </S.Flex>
            </S.InputLayout>
          </S.Layout>
          <S.Btn> <White type={"submit"}>개인정보 수정</White> </S.Btn>
        </form>
      }
    </S.NicknameBox>
  )

}