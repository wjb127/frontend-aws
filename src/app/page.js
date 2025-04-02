'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Dev Blog</h1>
          <div>
            {isLoggedIn ? (
              <div className="flex space-x-4 items-center">
                <button
                  onClick={() => router.push('/posts')}
                  className="text-gray-600 hover:text-indigo-600"
                >
                  게시글
                </button>
                <button
                  onClick={() => router.push('/posts/create')}
                  className="text-gray-600 hover:text-indigo-600"
                >
                  글쓰기
                </button>
                <button
                  onClick={() => {
                    localStorage.removeItem('token');
                    setIsLoggedIn(false);
                    router.push('/');
                  }}
                  className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm font-medium"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <button
                  onClick={() => router.push('/login')}
                  className="text-indigo-600 hover:text-indigo-800 px-4 py-2 rounded-md text-sm font-medium border border-indigo-600"
                >
                  로그인
                </button>
                <button
                  onClick={() => router.push('/signup')}
                  className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium"
                >
                  회원가입
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <div className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              블로그 플랫폼 프로젝트
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-indigo-100">
              Next.js + Node.js + MySQL을 활용한 풀스택 웹 애플리케이션
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => router.push('/posts')}
                className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-md text-base font-medium shadow-md"
              >
                게시글 보기
              </button>
              <button
                onClick={() => isLoggedIn ? router.push('/posts/create') : router.push('/login')}
                className="bg-indigo-600 text-white hover:bg-indigo-500 px-6 py-3 rounded-md text-base font-medium shadow-md border border-indigo-500"
              >
                새 글 작성하기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 프로젝트 설명 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">프로젝트 소개</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            이 프로젝트는 사용자가 글을 작성하고 공유할 수 있는 블로그 플랫폼입니다.
            사용자 인증부터 글 관리까지 모던 웹 애플리케이션의 주요 기능을 구현했습니다.
          </p>
        </div>

        {/* 주요 기능 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="w-12 h-12 rounded-md bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">사용자 인증</h3>
              <p className="text-gray-600 mb-4">회원가입 및 로그인 기능을 통해 개인화된 서비스를 제공합니다. JWT 토큰 기반의 안전한 인증 시스템을 구현했습니다.</p>
              <button
                onClick={() => router.push('/signup')}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                회원가입 하기 →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="w-12 h-12 rounded-md bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CRUD 기능</h3>
              <p className="text-gray-600 mb-4">글 생성, 조회, 수정, 삭제 기능을 구현했습니다. 사용자는 자신의 글을 쉽게 관리할 수 있습니다.</p>
              <button
                onClick={() => router.push('/posts')}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                게시글 보기 →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="w-12 h-12 rounded-md bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">반응형 디자인</h3>
              <p className="text-gray-600 mb-4">Tailwind CSS를 사용하여 모든 디바이스에서 최적화된 사용자 경험을 제공합니다.</p>
              <button
                onClick={() => isLoggedIn ? router.push('/posts/create') : router.push('/login')}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                글쓰기 →
              </button>
            </div>
          </div>
        </div>

        {/* 기술 스택 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">기술 스택</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">프론트엔드</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  <span>Next.js - React 기반 프레임워크</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  <span>Tailwind CSS - 반응형 디자인</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  <span>Vercel - 프론트엔드 호스팅</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">백엔드</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  <span>Node.js - JavaScript 런타임</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  <span>Express - 웹 애플리케이션 프레임워크</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  <span>MySQL - 관계형 데이터베이스</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  <span>AWS EC2 - 백엔드 호스팅</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 구현 세부 사항 */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">구현 세부 사항</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">아키텍처</h3>
              <p className="text-gray-600">
                프론트엔드는 Next.js를 사용하여 Vercel에 배포했습니다. 백엔드는 Express로 구현하여 AWS EC2 인스턴스에서 호스팅하고 있으며, 
                데이터는 MySQL에 저장됩니다. 프론트엔드와 백엔드 간 통신은 RESTful API를 통해 이루어집니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">인증</h3>
              <p className="text-gray-600">
                JWT(JSON Web Token)를 사용하여 사용자 인증을 구현했습니다. 로그인 시 서버에서 토큰을 발급받아 
                로컬 스토리지에 저장하고, API 요청 시 인증 헤더에 포함시켜 사용자를 식별합니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">데이터 관리</h3>
              <p className="text-gray-600">
                게시글의 생성, 조회, 수정, 삭제(CRUD)를 위한 API 엔드포인트를 구현했습니다. 
                권한 관리를 통해 사용자는 자신이 작성한 글만 수정하고 삭제할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-2">개발자 포트폴리오 - 블로그 플랫폼 프로젝트</p>
            <p className="text-gray-400 text-sm">© 2024 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
