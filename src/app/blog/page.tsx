"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface Blog {
  id: number;
  title: string;
  author: string;
  image: string;
  excerpt: string;
}

const mockFeaturedBlogs: Blog[] = [
  {
    id: 1,
    title: "Dogs Are Angels",
    author: "Sam James",
    image: "https://picsum.photos/id/237/200/300",
    excerpt: "The bestfirends of man. Loyal and lovable",
  },
  {
    id: 2,
    title: "The Beauty Of Mountains",
    author: "Hawkeye",
    image: "https://picsum.photos/seed/picsum/200/300",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];

const mockLatestBlogs: Blog[] = [
  {
    id: 3,
    title: "Placeholder for Latest Blog Title 1",
    author: "Iron Man",
    image: "https://picsum.photos/200/300?grayscale",
    excerpt: "When an unknown printer took a galley of type make a type book.",
  },
  {
    id: 4,
    title: "Placeholder for Latest Blog Title 2",
    author: "Placeholder Author 4",
    image: "https://picsum.photos/200/300/?blur",
    excerpt:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    id: 5,
    title: "Placeholder for Latest Blog Title 3",
    author: "Placeholder Author 5",
    image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
    excerpt:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
];

const mockAllBlogs: Blog[] = [
  {
    id: 2,
    title: "ALL BLOGS",
    author: "Placeholder Author 1",
    image: "https://picsum.photos/id/25/5000/3333",
    excerpt:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
  },
  {
    id: 3,
    title: "ALL BLOGS",
    author: "Placeholder Author 2",
    image: "https://picsum.photos/id/23/3887/4899",
    excerpt:
      "Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form",
  },
  {
    id: 4,
    title: "ALL BLOGS",
    author: "Placeholder Author 3",
    image: "https://picsum.photos/id/16/2500/1667",
    excerpt:
      "Placeholder excerpt for featured blog 1. Briefly summarize the key point.",
  },
  {
    id: 5,
    title: "ALL BLOGS",
    author: "Placeholder Author 4",
    image: "https://picsum.photos/id/12/2500/1667",
    excerpt:
      "Placeholder excerpt for featured blog 1. Briefly summarize the key point.",
  },
  {
    id: 6,
    title: "ALL BLOGS",
    author: "Placeholder Author 5",
    image: "https://picsum.photos/id/13/2500/1667",
    excerpt:
      "Placeholder excerpt for featured blog 1. Briefly summarize the key point.",
  },
];

//Blog Post Cards Component
const BlogPost: React.FC<Blog> = ({ title, author, image, excerpt }) => (
  <div className="mx-auto blog-post bg-white rounded-md shadow-md overflow-hidden w-80 h-96">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover rounded-t-md"
    />
    <div className="p-4 h-48">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <h4 className="text-gray-600 mb-4">{author}</h4>
      <p className="text-gray-700 overflow-hidden">{excerpt}</p>
    </div>
  </div>
);

const Page: React.FC = () => {
  console.log("page renders");
  const router = useRouter();
  const params = useSearchParams();

  //getting value in params
  const showAllBlogs = params.has("allBlogs");

  console.log(params);
  //ensuring that the page is not rendered and allBlogs is added in the parameter
  console.log(params.has("allBlogs"));
  const handleShowAll = () => {
    router.push("/blog?allBlogs");
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-8 mb-4">Blogs</h1>

      {/* displaying all blogs */}
      {showAllBlogs && (
        <>
          <h1 className="text-3xl font-bold mt-8 mb-4 m-8 pl-14">All Blogs</h1>
          <div className="all-blogs-container m-8">
            <div className="featured-blogs-row flex flex-col md:flex-row justify-between items-center gap-4 mb-8 m-8">
              {mockAllBlogs.map((blog) => (
                <BlogPost key={blog.id} {...blog} />
              ))}
            </div>
          </div>
        </>
      )}

      {/* displaying the featured and latest blogs */}
      {!showAllBlogs && ( //Only show latest blogs if false
        <>
          <h1 className="text-3xl font-bold mt-8 mb-4 m-8 pl-14">
            Featured Blogs
          </h1>
          <div className="featured-blogs-container">
            <div className="featured-blogs-row flex flex-col md:flex-row justify-between items-center gap-4 mb-8 m-8">
              {mockFeaturedBlogs.map((blog) => (
                <BlogPost key={blog.id} {...blog} />
              ))}
            </div>
          </div>
          <h1 className="text-3xl font-bold mt-8 mb-4 m-8 pl-14">
            Latest Blogs
          </h1>
          <div className="latest-blogs-container">
            <div className="latest-blogs-row flex flex-col md:flex-row justify-between items-center gap-4 mb-8 m-8">
              {mockLatestBlogs.map((blog) => (
                <BlogPost key={blog.id} {...blog} />
              ))}
            </div>
          </div>
        </>
      )}

      {/* show all button */}
      <div className="text-center">
        {!showAllBlogs && (
          <button
            className="px-6 py-3 rounded-md bg-primary text-black border border-gray-300 shadow-md mb-5 text-xl"
            onClick={handleShowAll}
          >
            Show All
          </button>
        )}
      </div>
    </>
  );
};

export default Page;
