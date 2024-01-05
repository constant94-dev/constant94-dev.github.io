module.exports = {
  name: '박상준',
  title: '판단을 연결하는 백엔드 엔지니어',
  facts: {
    'Residence': '<a href="https://www.google.com/maps/place/Eunpyeong-gu,+Seoul/data=!3m1!4b1!4m6!3m5!1s0x357c978634080885:0xffe21430ce509646!8m2!3d37.6191784!4d126.9270142!16s%2Fm%2F026rmdp?entry=ttu"><i class="fa fa-home fact-icon"></i>Seoul, Eunpyeong-gu</a>',
    'GitHub': '<a href="https://github.com/constant94-dev"><i class="fa fa-brands fa-github fact-icon"></i>constant94-dev</a>',
    'Tistory': '<a href="https://doit94.tistory.com/"><i class="fa fa-brands fa-blogger fact-icon"></i>Just Do it!</a>',
    'Email': '<a href="mailto:brainstorm2973@gmail.com"><i class="fa fa-envelope fact-icon"></i>brainstorm2973@gmail.com</a>'
  },
  positions: [
    {
      title: '빌드 & 배포 자동화 구축.',
      period: '2023.04 - 2023.07 (4개월)',
      skills: ['Terraform', 'Azure', 'ACR', 'AKS'],
      problem: `<Problem>`,
      problem_contents: `빌드 & 배포로 소요되는 시간이 평균 90분 발생`,
      cause: `<Root Cause>`,
      cause_contents: [
        '소스코드를 빌드하고 해당 버전을 이미지화하고 호스트 서버의 배포하는 프로세스의 자동화 필요성을 확인',
        'Terraform 이용해 코드기반 Azure Resource 배포 구성하여 동일한 환경 프로비저닝하도록 보장',
        'Azure Pipelines 를 이용해 파이프라인 구축',
        '도커라이징해서 ACR(Azure Container Registry)로 형상관리 및 AKS(Azure Kubernetes Service) 배포'
      ],
      effect: `<Effect>`,
      effect_contents: `DevOps 구성을 통한 높은 확장성과 빌드&배포 기존 소요시간 대비 90분 👉 5분 개선, 이를 통해 개발 사이클의 낭비를 줄이고 운영팀의 QA 반응을 빠르게 처리`
    },
    {
      title: '파트론 웹 사이트 개발.',
      period: '2021.11 - 2022.08 (10개월)',
      skills: ['Java', 'Spring Boot', 'JPA', 'MySQL'],
      problem: `<Problem>`,
      problem_contents: `예술 작품 감상 서비스 필요`,
      cause: `<Root Cause>`,
      cause_contents: [
        '요구사항 기획서를 기반으로 개발 타임라인 수립',
        '서비스 쿼리를 쿼리 메소드 형태로 모두 변경해 Java 코드레벨에서 쿼리 디버깅 해볼 수 있게 구현',
        'Spring Boot 에서 제공하는 어노테이션을 사용하여 불필요한 로직과 요청을 제거',
        'Spring Boot api 를 이용하여 생성, 조회, 수정, 삭제 도메인의 전반적인 라이프사이클에 대해서 설계하고 지속적인 리팩토링을 통해 API를 RESTful 하게 구성'
      ],
      effect: `<Effect>`,
      effect_contents: `PHP 👉 JAVA 언어 전환, 쿼리 메소드 반영, REST API 구축을 통해 api 도메인 설계 및 서비스 상용`
    },
    {
      title: '레거시 프로젝트 리팩토링.',
      period: '2021.01 - 2021.03 (3개월)',
      skills: ['MySQL', 'Sub Query', 'MySQL Workbench'],
      problem: `<Problem>`,
      problem_contents: `외주업체가 개발한 레거시 프로젝트에서 서비스 운영 중 트래픽이 몰려 성능 저하 발생`,
      cause: `<Root Cause>`,
      cause_contents: [
      '외주 업체와의 주기적 미팅을 통해 레거시 프로젝트 분석해 과부하 포인트를 리스트업하고 튜닝 계획 수립',
      '필요한 데이터를 다수의 메인쿼리를 사용해 가져온 후 가져온 데이터를 새로운 쿼리의 정의하고 사용되는 패턴 발견',
      '로드의 30초가 넘어가는 페이지를 리스트업하고 해당 페이지의 SQL 튜닝 계획 수립',
      'EXPLAIN 결과 분석하여 Optimizer 쿼리 실행 계획을 확인',
      'MySQL Workbench 프로파일링 도구 사용해 제공된 성능 지표를 보고 병목 현상 파악'
    ],
      effect: `<Effect>`,
      effect_contents: `성능 저하가 발생된 쿼리에 대해 실행 계획 분석과 서브쿼리를 작성해 전체 레거시 쿼리 중 20%의 쿼리 개선, 이를 통해 작성된 쿼리를 분석하고 개선하는 방법을 알 수 있었고 성능 저하를 일부분 해결`
    }
  ],
  skills: [
    {
      title: 'Backend',
      skills: ['Java','Spring framework','Spring MVC','JPA','MySQL']
    },
    {
      title: 'DevOps',
      skills: ['GitHub','Azure','Akamai CDN']
    },
    {
      title: 'Collaboration',
      skills: ['Google Workspace','Figma']
    }
  ],
  experience: [
    {
      header: '우테코 프리코스',
      skills: ['코드 컨벤션', '테스트 코드', '클래스 분리'],
      contents: ` 2023.10 - 2023.11 | Junit5 테스트 코드 작성과 가독성 높은 객체지향 코드 작성을 위한 경험 `
    },
    {
      header: 'AWS Bootcamp EKS',
      skills: ['EKS', 'Observability'],
      contents: ` 2023.08 | 사용자 트래픽이 증가할 때 인프라 구성에 궁금증을 가지고 Bootcamp 경험 `
    },
    {
      header: '코딩 독학 및 팀 프로젝트',
      skills: ['아두이노', '라즈베리파이', '안드로이드'],
      contents: ` 2019.11 - 2020.11 | 다양한 개발 경험을 하고싶어 공부하면서 알게된 사람들과 팀 프로젝트를 경험 `
    },
    {
      header: '세종사이버대학교',
      skills: ['CS', 'AWS'],
      contents: ` 2022.03 - 2023.08 (졸업) | CS(Computer Science) 전공 지식과 AWS 인프라 구성을 실습`
    },
    {
      header: '부천대학교',
      skills: ['Network', '아두이노'],
      contents: ` 2013.03 - 2017.08 (졸업) | Network 관련 전공 지식과 전자회로 실습`
    }
  ],
  pdf_name: 'aaron_resume',
  pdf_title: 'back-end-engineer'
};
