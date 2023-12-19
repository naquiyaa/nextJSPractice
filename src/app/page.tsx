"use client";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-start bg-gradient-to-br from-orange-400 to-orange-600 px-10">
      <div className="text-white">
        <h1 className="text-7xl font-bold mb-6">Welcome to My Blog</h1>
        <p className="text-3xl mb-8">
          Exploring ideas, sharing thoughts, and more.
        </p>
        <div>
          <a
            href="/blog"
            className="bg-white text-orange-600 py-4 px-8 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition duration-300 ease-in-out"
          >
            Explore Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
