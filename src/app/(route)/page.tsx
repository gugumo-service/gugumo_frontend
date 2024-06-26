"use client"
import Header from "@components/common/Header";
import { useState } from "react";
import * as S from "@components/page/main/style";
import { useForm } from "react-hook-form";
import { IoChevronDown } from "react-icons/io5";
import { GAMETYPE, LOCATION, MEETINGSTATUS } from "@constant/meeting";
import Location from "@components/common/Button/Location";
import BallTag from "@components/common/Button/BallTag/BallTag";
import { SORT } from "@constant/sort";
import Card from "@components/common/Card/Main/Card";
import Write from "@components/common/Button/Write/Write";
import Paging from "@components/page/main/Paging";
import Recommends from "@components/Recommends/Recommends";
import Banner from "@components/page/main/Banner/Banner";
import { useList } from "../../hooks/useMeeting";
import { useSession } from "next-auth/react";
import SkeletonCard from "@components/common/Card/Main/SkeletonCard";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

    const { data : session ,status } = useSession();
    const router = useRouter();

    const {register,handleSubmit} = useForm();

    const [page,setPage] = useState(1);

    const [sort,setSort] = useState('NEW');
    const [sortOpen,setSortOpen] = useState(false);

    const [meetingstatus,setMeetingstatus] = useState('RECRUIT');
    const meetingstatusClickHandler = (event : string)=>{
        setMeetingstatus(event);
    }

    const [location,setLocation] = useState("");
    const locationClickHandler = (event : string)=>{
        setLocation(event);
    }

    const [gametype,setGametype] = useState("");
    const gametypeClickHandler = (event : string)=>{
        setGametype(event);
    }

    const [q,setQ] = useState('');

    const searchSubmitHanlder = (event : any)=>{
        const {q} = event;
        setQ(q);
    }

    const {data : meeting,isLoading} = useList(status,{page,sort,meetingstatus,location,gametype,q});

    const writeClickHandler = ()=>{
        if(!session) return alert('로그인을 해야합니다.');
        return router.push('/post/write');
    }

    return (
        <>
            <Header/>
            <S.MainStyle>
                <Banner/>
                <S.Wrap> 
                    <Recommends/>
                </S.Wrap>
                <S.Wrap>
                    <S.SearchFlex>
                        <S.RecruitStyle>
                            {
                                MEETINGSTATUS.map((el,index)=>
                                    <S.RecruitButton
                                        key={index}
                                        $active={meetingstatus===el.get} 
                                        onClick={()=>meetingstatusClickHandler(el.get)}
                                    >{el.name}</S.RecruitButton >
                                )
                            }
                        </S.RecruitStyle>

                        <S.Search onSubmit={handleSubmit(searchSubmitHanlder)}>
                            <input type="text" {...register("q")} placeholder="제목, 글 내용을 검색해보세요!"/>
                            <button type="submit">
                                <Image src="/asset/icon/search.svg" alt="검색버튼" width={24} height={24} />
                            </button>
                        </S.Search>
                    </S.SearchFlex>
                    <S.Tag>
                        <S.SmallText>지역</S.SmallText>
                        <S.Flex>
                            <Location
                                onClick={()=>locationClickHandler("")} 
                                active={"" === location ? true : false} 
                                label={"전체"}
                            />
                            {
                            LOCATION.map((e,i)=>
                                <Location 
                                    onClick={()=>locationClickHandler(e.get)} 
                                    key={i} 
                                    active={e.get === location ? true : false} 
                                    label={e.name}
                                />)
                            }
                        </S.Flex>
                    </S.Tag>
                    <S.Tag>
                        <S.SmallText>종목</S.SmallText>
                        <S.Flex>
                            <BallTag
                                onClick={()=>gametypeClickHandler("")}
                                active={gametype === "" ? true : false} 
                            />
                            {
                                GAMETYPE.map((e,index)=>
                                    <BallTag
                                        onClick={()=>gametypeClickHandler(e.get)}
                                        key={index} 
                                        gametype={e.get}
                                        active={gametype === e.get ? true : false} 
                                    />
                                )
                            }
                        </S.Flex>
                    </S.Tag>
                    <S.Layout>

                        <S.Order>
                            <div>
                                <p onClick={()=>setSortOpen(!sortOpen)}>{SORT[sort]} <IoChevronDown/> </p>
                                {
                                    sortOpen &&
                                    <ul>
                                        <li onClick={()=>{setSort('NEW'); setSortOpen(!sortOpen)}}>최신순</li>
                                        <li onClick={()=>{setSort('LIKE'); setSortOpen(!sortOpen)}}>인기순</li>
                                        <li onClick={()=>{setSort('OLD'); setSortOpen(!sortOpen)}}>오래된순</li>
                                    </ul>
                                }
                            </div>
                        </S.Order>
                        <S.Grid>
                            {
                                isLoading?
                                new Array(12).fill(1).map((_,i)=>(<SkeletonCard key={i}/>))
                                :
                                meeting && meeting?.data.content.length > 0 ?
                                meeting.data.content.map(el=>(
                                    <Card
                                        bookmarkStatus={el.bookmarked}
                                        key={el.postId}
                                        postId={el.postId}
                                        status={el.meetingStatus}
                                        gameType={el.gameType}
                                        location={el.location}
                                        title={el.title}
                                        meetingDateTime={el.meetingDateTime as string}
                                        meetingMemberNum={el.meetingMemberNum}
                                        meetingDeadline={el.meetingDeadline}
                                    />
                                ))
                                : <p style={{ padding : "150px 0",gridColumn: "1 / 5",textAlign : "center"}}>게시글이 존재하지 않습니다.</p>
                            }
                        </S.Grid>
                        <S.White>
                            <Write onClick={writeClickHandler}>새글 작성</Write>
                        </S.White>
                        <S.Paging> {meeting && <Paging page={page} setPage={setPage} pageable={meeting.data.pageable}/>} </S.Paging>
                    </S.Layout>
                    
                </S.Wrap>

            </S.MainStyle>
        </>
    );
  
}