'use client'

import Link from "next/link";
import Card from "../components/main/Card";
import Paging from "../components/main/Paging";
import { Button, Flex, Grid, Layout, Order, RecruitStyle, Search, SearchFlex, SmallText, Tag, Wrap, WriteLink } from "../components/main/style";
import styled from "styled-components";

export default function Home() {
  return (
    <main>
      <Wrap>

        <SearchFlex>

          <RecruitStyle>
            <button className="active">모집중</button>
            <button>모집완료</button>
            <button>전체</button>
          </RecruitStyle>

          <Search>
            <input type="text" />
            <button>
              <img src="/asset/icon/search.svg" alt="검색버튼" />
            </button>
          </Search>
        </SearchFlex>

        <Tag style={{marginTop : 51}}>
          <SmallText>지역</SmallText>
          <Flex>
            {
              ["전체","서울","경기","인천","대구","부산","경남","경북","강원","전남","전북","그 외"]
              .map((e,i)=><Button key={i}>{e}</Button>)
            }
          </Flex>
        </Tag>

        <Tag>
          <SmallText>종목</SmallText>
          <Flex>
            {
              ["전체","배드민턴","농구","풋발","테니스","탁구","야구"]
              .map((e,i)=><Button key={i}>{e}</Button>)
            }
          </Flex>
        </Tag>

        <Layout>
          
          <Order>
            <div>최신순 <img src="/asset/icon/down.svg" alt="순서" /></div>
          </Order>
          
          <Grid>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </Grid>

          <WriteLink href={"/write"}>
            <img src="/asset/icon/write.svg" alt="글쓰기" />
            새글 작성
          </WriteLink>

          <Paging/>
        </Layout>

      </Wrap>
    </main>
  );
}

