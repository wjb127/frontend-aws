'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) {
          throw new Error('게시글을 불러오는데 실패했습니다.');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">게시글 목록</h1>
          <button
            onClick={() => router.push('/posts/create')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            글쓰기
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => router.push(`/posts/${post.id}`)}
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {formatDate(post.created_at)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && !error && (
          <div className="text-center py-12">
            <p className="text-gray-500">아직 작성된 글이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
} 