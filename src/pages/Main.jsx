import React from "react";

import { MainBanner, MainContent } from "./styles/Main.styles";

const listData = [
  {
    num: "01",
    title: "강력한 보안",
    content:
      "보안 및 IT 정책에 따라 액세스 권한을 등급별로 설정할 수 있습니다. 또한 IP 주소, 사용자 패턴, 메시지 내용 등을 완벽하게 보호합니다.",
  },
  {
    num: "02",
    title: "다양한 기능",
    content:
      "회의 시 해상도 설정 및 공유 기능, 발언권 및 이모지, 투표, 무제한 녹화 기능을 제공합니다.",
  },
  {
    num: "03",
    title: "자유로운 확장성",
    content:
      "다양한 국내 오픈소스와의 통합 기능을 제공하여 자유롭게 기능 커스터마이징이 가능합니다.",
  },
  {
    num: "04",
    title: "간편한 회의 환경",
    content:
      "별도의 프로그램 설치 없이 클릭 한 번으로 언제든지 간편하게 화상회의가 가능합니다.",
  },
  {
    num: "05",
    title: "장애 및 오류 업무 자동화",
    content:
      "사용자가 봇을 설정하여 오류가 발생했을 때 자동으로 채널에 알리고 관리자 채널에 발신을 통해 사고에 대한 신속한 대응이 가능합니다.",
  },
];

const Main = () => {
  return (
    <>
      <MainBanner>
        <div>
          <h2>CenterFace</h2>
          <p>
            CenterFace는 어떤 환경이든 능동적으로 적응하여 최적의 화상회의를
            제공합니다.
            <br />
            CenterFace와 함께 평범한 화상회의를 특별하게 만나보세요!
          </p>
          <button>회의 시작하기</button>
          {/* 로그인 여부에 따라서 onClick, useNavigate /login or /meeting-list */}
        </div>
      </MainBanner>
      <MainContent>
        <h3>
          화상회의, 왜 <span>CenterFace</span> 일까요?
        </h3>
        <ul>
          {listData.map((list, idx) => (
            <li key={idx + list.title}>
              <span>{list.num}</span>
              <h4>{list.title}</h4>
              <p>{list.content}</p>
            </li>
          ))}
        </ul>
      </MainContent>
    </>
  );
};

export default Main;
