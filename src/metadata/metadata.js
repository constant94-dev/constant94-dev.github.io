module.exports = {
  name: '박상준',
  title: '백엔드 엔지니어',
  facts: {
    'GitHub': '<a href="https://github.com/constant94-dev"><i class="fa fa-brands fa-github fact-icon"></i>constant94-dev</a>',
    'Tistory': '<a href="https://doit94.tistory.com/"><i class="fa fa-brands fa-blogger fact-icon"></i>Just Do it!</a>',
    'Email': '<a href="mailto:brainstorm2973@gmail.com"><i class="fa fa-envelope fact-icon"></i>brainstorm2973@gmail.com</a>'
  },
  redblue_positions: [
    {
      title: '외부장치 연동관리 개발.',
      period: '(1 month)',
      skills: ['Java','Spring MVC','Mybatis','MariaDB','AWS'],
      problem: `<Situation & Solution>`,
      problem_contents: [
        `장치 연동 데이터를 DBA가 직접 DB 작업 수행`,
        'Spring Boot api 를 이용하여 CRUD 전반적인 사이클에 대해서 설계하고 지속적인 리팩토링을 통해 API를 RESTful 하게 구성',
        'Junit5, MockMvc 이용 Web Layer, Unit 테스트'
      ],
      effect: `<Impact>`,
      effect_contents: `외부장치 연동을 위해 운영팀과 DBA가 나눠서 하던 작업을 통합 ADMIN 페이지를 개발해 운영업무 프로세스 개선`
    }
  ],
  nodamen_skills: [
    {
      skills: ['Java','Spring MVC','MySQL','Terraform','Azure']
    }
  ],
  nodamen_positions: [
    {
      title: '빌드 & 배포 자동화 구축.',
      period: '(4 month)',
      skills: ['Terraform', 'Azure', 'ACR', 'AKS'],
      problem: `<Situation & Solution>`,
      problem_contents: [
        `빌드 & 배포로 소요되는 시간이 평균 40분 발생`,
        'Terraform 이용해 코드기반 Azure Resource 배포 구성하여 동일한 환경 프로비저닝하도록 보장',
        'Azure Pipelines 를 이용해 파이프라인 구축',
        '도커라이징해서 ACR(Azure Container Registry)로 형상관리 및 AKS(Azure Kubernetes Service) 배포'
      ],
      effect: `<Impact>`,
      effect_contents: `기존 소요시간 대비 40분 👉 5분 개선, QA에서 찾아낸 버그를 빠르게 반영해 일정 영향없이 필요한 시간내에 제품 전달`
    },
    {
      title: '파트론 웹 사이트 개발.',
      period: '(10 month)',
      skills: ['Java', 'Spring Boot', 'JPA', 'MySQL'],
      problem: `<Situation & Solution>`,
      problem_contents: [
        `예술 감상 서비스 레거시 청산`,
        '파트론 서비스에 사용되는 API 서버 개발',
        '기존 PHP로 작성된 API를 Java와 Spring Boot로 이전 및 코드 개선',
        'ORM 도입',
        'Azure VMSS, AGW, nginx 서버 인프라 사용',
        'Azure Database for MariaDB를 데이터베이스로 사용'
      ],
      effect: `<Impact>`,
      effect_contents: `PHP 👉 JAVA 언어 전환, 개발팀 생산성 향상`
    },
    {
      title: '레거시 쿼리 리팩토링.',
      period: '(3 month)',
      skills: ['MySQL', 'Sub Query', 'MySQL Workbench'],
      problem: `<Situation & Solution>`,
      problem_contents: [
        `외주업체가 개발한 레거시(PHP) 서비스 운영 중 트래픽이 몰려 성능 저하 발생`,
        '로드의 10초가 넘어가는 페이지를 리스트업하고 해당 페이지의 SQL 튜닝 계획 수립',
        '메인 쿼리를 사용하여 필요한 데이터를 추출한 뒤, 새로운 쿼리를 정의하고 사용되는 패턴을 다수 발견',
        'EXPLAIN 결과를 분석하여 Optimizer 쿼리 실행 계획을 확인',
        '쿼리를 사용할 때마다 수행되던 트랜잭션을 연관된 쿼리끼리 하나의 트랜잭션으로 처리할 수 있게 변경'
      ],
      effect: `<Impact>`,
      effect_contents: `전체 레거시 쿼리 중 20%의 쿼리 개선, 이를 통해 쿼리 성능 저하를 일부분 해결`
    }
  ],
  side: [
    {
      title: 'JJWT 오픈소스 활용 공통 인증/인가 라이브러리 개발.',
      skills: ['Java', 'Spring MVC', 'Redis', 'Docker'],
      contents: [
        '해당 라이브러리에서는 인가 코드를 Hash 방식으로 저장하여 저장 공간을 절약하고, 역추적이 불가능하도록 구현',
        '또한, 인증 토큰 발급 시 JWE(Encrypted JWT)를 사용하여 데이터 보호를 강화'
      ],
      effect: `<해결하려는 문제>`,
      effect_contents: `API 서버 간 세션 데이터 불일치로 인한 잠재적 보안 취약점을 감소시키고 관리의 용이성과 인증 시스템 확장성을 높임`
    }
  ],
  skills: [
    {
      title: 'Backend',
      skills: ['Java','Spring MVC','JPA','Mybatis','MySQL']
    },
    {
      title: 'DevOps',
      skills: ['GitHub','Azure','AWS','Akamai CDN','Jenkins']
    },
    {
      title: 'Collaboration',
      skills: ['Confluence','Jira','Slack','Google Workspace','Figma']
    }
  ],
  experience: [
    {
      header: '세종사이버대학교',
      skills: ['CS', 'AWS'],
      period: '2022.03 - 2023.08',
      contents: `소프트웨어공학 학사 졸업`
    },
    {
      header: '부천대학교',
      skills: ['Network', '아두이노'],
      period: '2013.03 - 2017.08',
      contents: `정보통신공학 전문학사 졸업`
    }
  ],
  pdf_name: 'ethan_resume',
  pdf_title: 'backend-engineer'
};
