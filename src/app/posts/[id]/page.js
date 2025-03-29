'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function PostDetailPage({ params }) {
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();
  const { id } = use(params);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
        
        if (!response.ok) {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            throw new Error(data.message || '글을 불러오는데 실패했습니다.');
          } else {
            throw new Error('서버에서 오류가 발생했습니다.');
          }
        }

        const data = await response.json();
        setPost(data);
      } catch (err) {
        console.error('글 로딩 에러:', err);
        setError(err.message || '글을 불러오는 중 오류가 발생했습니다.');
      }
    };

    const fetchUserInfo = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        // JWT 토큰에서 사용자 이메일 추출
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUserEmail(payload.email);
      } catch (err) {
        console.error('사용자 정보 로딩 에러:', err);
      }
    };

    fetchPost();
    fetchUserInfo();
  }, [id]);

  const handleDelete = async () => {
    if (!confirm('정말로 이 글을 삭제하시겠습니까?')) return;

    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          throw new Error(data.message || '글 삭제에 실패했습니다.');
        } else {
          throw new Error('서버에서 오류가 발생했습니다.');
        }
      }

      alert('글이 삭제되었습니다.');
      router.push('/posts');
    } catch (err) {
      console.error('글 삭제 에러:', err);
      setError(err.message || '글 삭제 중 오류가 발생했습니다.');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">로딩 중...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
              {userEmail === post.user_email && (
                <div className="flex space-x-2">
                  <button
                    onClick={() => router.push(`/posts/${id}/edit`)}
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    수정
                  </button>
                  <button
                    onClick={handleDelete}
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    삭제
                  </button>
                </div>
              )}
            </div>

            <div className="text-sm text-gray-500 mb-6">
              {formatDate(post.created_at)}
            </div>

            <div className="prose max-w-none">
              <p className="whitespace-pre-wrap">{post.content}</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => router.push('/posts')}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            목록으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
} 