import React from "react";
import { Helmet } from "react-helmet";

function Blog() {
 const hostName = "sefatullah.hashnode.dev";
 const [posts, setPosts] = React.useState([]);
 const [loading, setLoading] = React.useState(true);

 async function fetchPosts() {
  setLoading(true);
  const query = `
      query Publication {
        publication(host: "${hostName}") {
          title
          posts(first: 10) {
            edges {
              node {
                title
                brief
                slug
                coverImage {
                  url
                }
                publishedAt
                reactionCount
                responseCount
              }
            }
          }
        }
      }
    `;

  try {
   const response = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
     Authentication: "Bearer 5aa22f37-726d-4dfd-88a9-4e7e76dabd49",
    },
    body: JSON.stringify({ query }),
   });

   if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
   }

   const result = await response.json();

   if (result.data && result.data.publication) {
    setPosts(result.data.publication.posts.edges);
   } else {
    setPosts([]);
   }
  } catch (error) {
   console.error("Error fetching posts:", error);
   setPosts([]);
  } finally {
   setLoading(false);
  }
 }

 React.useEffect(() => {
  fetchPosts();
 }, []);

 return (
  <>
   <Helmet>
    <title>Blog | Mohammad Sefatullah</title>
    <meta
     name="description"
     content="Mohammad Sefatullah's blog posts."
     data-react-helmet="true"
    />
    <meta
     name="keywords"
     content="Mohammad Sefatullah, blog, web developer"
     data-react-helmet="true"
    />
   </Helmet>
   <div className="flex flex-col items-center justify-center mt-7">
    <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-white">
     Blog
    </h1>
   </div>
   <div
    className="flex flex-col justify-center items-start max-w-2xl px-6 mx-auto my-8 lg:my-16 space-y-5 lg:space-y-10 min-h-[70vh]"
    id="posts"
   >
    {loading ? (
     <div className="w-full text-center text-xl text-gray-900 dark:text-gray-100">
      Loading...
     </div>
    ) : posts.length === 0 ? (
     <div className="w-full text-center text-xl text-gray-900 dark:text-gray-100">
      No posts found
     </div>
    ) : (
     posts.map((p) => {
      const post = p.node;
      return (
       <div
        key={post.slug}
        className="w-full bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg px-7 py-5 sm:px-6"
       >
        <div className={`mb-7 ${post?.coverImage ? "" : "hidden"}`}>
         <img
          className="w-full object-cover aspect-video rounded-lg"
          src={post?.coverImage?.url}
          alt=""
         />
        </div>
        <a
         href={`https://sefatullah.hashnode.dev/${post?.slug}`}
         target="_blank"
         rel="noopener noreferrer"
        >
         <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white hover:underline hover:text-blue-500">
          {post?.title}
         </h3>
        </a>
        <p className="mt-2 max-w-2xl text-sm leading-5 text-gray-500 dark:text-gray-400">
         {post?.brief}
        </p>
        <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-0 mt-5">
         <div className="flex flex-wrap mt-2">
          <div className="m-1">
           <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium leading-4 bg-slate-200 text-slate-800 dark:bg-slate-600 dark:text-slate-100">
            {new Date(post?.publishedAt).toDateString()}
           </span>
          </div>
          <div className="m-1">
           <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium leading-4 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
            {post?.reactionCount} Reactions
           </span>
          </div>
          <div className="m-1">
           <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
            {post?.responseCount} Responses
           </span>
          </div>
         </div>
        </div>
       </div>
      );
     })
    )}
   </div>
  </>
 );
}

export default Blog;
