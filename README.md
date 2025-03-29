# 블로그 프로젝트

Next.js와 Tailwind CSS를 사용한 블로그 프로젝트입니다.

## 주요 기능

- 회원가입/로그인
- 게시글 CRUD (생성, 읽기, 수정, 삭제)
- JWT 기반 인증
- 반응형 디자인

## 기술 스택

- Next.js
- Tailwind CSS
- JavaScript
- JWT

## 시작하기

1. 저장소 클론
```bash
git clone [repository-url]
```

2. 의존성 설치
```bash
npm install
```

3. 환경 변수 설정
`.env.local` 파일을 생성하고 다음 내용을 추가합니다:
```
NEXT_PUBLIC_API_URL=http://your-api-url
```

4. 개발 서버 실행
```bash
npm run dev
```

5. 브라우저에서 확인
```
http://localhost:3000
```

## API 엔드포인트

- POST /signup: 회원가입
- POST /login: 로그인
- GET /posts: 게시글 목록 조회
- GET /posts/:id: 게시글 상세 조회
- POST /posts: 게시글 작성
- PUT /posts/:id: 게시글 수정
- DELETE /posts/:id: 게시글 삭제

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
