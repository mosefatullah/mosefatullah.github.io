import React from "react";

function Blog() {
 React.useEffect(() => {
  async function gql(query) {
   const response = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
     Authentication: "Bearer 6fa1d706-55f1-462f-8606-48aeed6b9c6c",
    },
    body: JSON.stringify({ query }),
   });
   return response.json();
  }
  gql(`
  query {
    user(username: "sefatullah") {
      publication {
        posts {
          title
          brief
          slug
          coverImage
          dateAdded
          totalReactions
          responseCount
        }
      }
    }
  }
`).then((r) => {
   const posts = r.data.user.publication.posts;
   let postsSnippets = "";
   const postsContainer = document.getElementById("posts");
   if(posts.length === 0) return postsContainer.innerHTML = `<div class="w-full text-center text-xl text-gray-900 dark:text-gray-100">No posts found</div>`;
   posts.forEach((post) => {
    postsSnippets += `
      <div class="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg px-7 py-5 sm:px-6">
        <div class="mb-7 ${post.coverImage ? "" : "hidden"}">
            <img
              class="w-full object-cover aspect-video rounded-lg"
              src=${post.coverImage}
              alt=""
            />
        </div>
        <a href="https://sefatullah.hashnode.dev/${post.slug}">
              <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white hover:underline hover:text-blue-500">
                ${post.title}
              </h3>
        </a>
        <p class="mt-2 max-w-2xl text-sm leading-5 text-gray-500 dark:text-gray-400">
          ${post.brief}
        </p>
        <div class="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-0 mt-5">
              <div class="flex flex-wrap mt-2">
                  <div class="m-1">
                      <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium leading-4 bg-slate-200 text-slate-800 dark:bg-slate-600 dark:text-slate-100">
                          ${new Date(post.dateAdded).toDateString()}
                      </span>
                  </div>
                  <div class="m-1">
                      <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium leading-4 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                          ${post.totalReactions} Reactions
                      </span>
                  </div>
                  <div class="m-1">
                      <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                          ${post.responseCount} Responses
                      </span>
                  </div>
              </div>
        </div>
      </div>
      `;
   });
   postsContainer.innerHTML = postsSnippets;
  });

  return () => {};
 }, []);
 return (
  <div
   className="flex flex-col justify-center items-start max-w-2xl mx-auto my-5 lg:my-16 space-y-5 lg:space-y-10 min-h-[70vh]"
   id="posts"
  ></div>
 );
}

export default Blog;
