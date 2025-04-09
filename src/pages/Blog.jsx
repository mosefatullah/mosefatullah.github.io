import React from "react";
import { Helmet } from "react-helmet";

function Blog() {
  let blogPageNo = 2;
  let blogPageNoLimit = 5;
  const hostName = "sefatullah.hashnode.dev";

  async function fetchPosts(afterID, repeat = true) {
    async function gql(query) {
      const response = await fetch("https://gql.hashnode.com/", {
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
   query Publication {
     publication(host: "${hostName}") {
       title
       posts(first: 20, after: "${afterID || ""}") {
         pageInfo {
           hasNextPage
           endCursor
         }
       }
     }
   }
 `).then((r) => {
      const pInfo = r.data.publication.posts.pageInfo;
      const postsContainer = document.getElementById("posts");
      const postNumberNav = document.querySelector(".postNumberNav");
      if (repeat == false || repeat == "middle") {
        gql(`
      query Publication {
        publication(host: "${hostName}") {
          title
          posts(first: 20, after: "${afterID || ""}") {
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
    `).then((rr) => {
          const posts = rr.data.publication.posts.edges;
          let postsSnippets = "";
          if (!rr.data || posts.length === 0) {
            return (postsContainer.innerHTML = `<div class="w-full text-center text-xl text-gray-900 dark:text-gray-100">No posts found</div>`);
          }
          posts.forEach((p) => {
            const post = p.node;
            postsSnippets += `
       <div class="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg px-7 py-5 sm:px-6">
         <div class="mb-7 ${post?.coverImage ? "" : "hidden"}">
             <img
               class="w-full object-cover aspect-video rounded-lg"
               src=${post?.coverImage?.url}
               alt=""
             />
         </div>
         <a href="https://sefatullah.hashnode.dev/${post?.slug}" target="_blank">
               <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white hover:underline hover:text-blue-500">
                 ${post?.title}
               </h3>
         </a>
         <p class="mt-2 max-w-2xl text-sm leading-5 text-gray-500 dark:text-gray-400">
           ${post?.brief}
         </p>
         <div class="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-0 mt-5">
               <div class="flex flex-wrap mt-2">
                   <div class="m-1">
                       <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium leading-4 bg-slate-200 text-slate-800 dark:bg-slate-600 dark:text-slate-100">
                           ${new Date(post?.publishedAt).toDateString()}
                       </span>
                   </div>
                   <div class="m-1">
                       <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium leading-4 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                           ${post?.reactionCount} Reactions
                       </span>
                   </div>
                   <div class="m-1">
                       <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                           ${post?.responseCount} Responses
                       </span>
                   </div>
               </div>
         </div>
       </div>
       `;
          });
          postsContainer.innerHTML = postsSnippets;
        });
      }
      if (
        postNumberNav &&
        pInfo.endCursor &&
        (repeat == true || repeat == "middle")
      ) {
        if (blogPageNo > blogPageNoLimit) {
          const dotdot = document.createElement("span");
          dotdot.textContent = "...";
          document.querySelector(".postNumberNav").appendChild(dotdot);
          return;
        }
        if (
          document.querySelector(".postNumberNav button:last-child") &&
          pInfo.endCursor ===
          document
            .querySelector(".postNumberNav button:last-child")
            .getAttribute("endCursor")
        ) {
          return fetchPosts(pInfo.endCursor, true);
        }
        let button = document.createElement("button");
        button.textContent = blogPageNo;
        button.setAttribute("endCursor", pInfo.endCursor);
        button.onclick = function () {
          document.querySelectorAll(".postNumberNav button").forEach((l) => {
            l.classList.remove("text-blue-500", "dark:text-blue-500");
            l.classList.add("text-gray-600", "dark:text-gray-400");
          });
          button.classList.add("text-blue-500", "dark:text-blue-500");
          button.classList.remove("text-gray-600", "dark:text-gray-400");
          fetchPosts(button.getAttribute("endCursor"), false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        };
        button.className =
          "text-gray-600 dark:text-gray-400 hover:underline hover:text-blue-500 text-md";
        postNumberNav.appendChild(button);
        if (pInfo.hasNextPage) {
          blogPageNo++;
          fetchPosts(pInfo.endCursor, true);
        }
      }
    });
  }
  React.useEffect(() => {
    fetchPosts("", "middle");
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

     <link rel="canonical" href="https://sefatullah.com/blog" />
    </Helmet>
    <div className="flex flex-col items-center justify-center mt-7">
     <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-white">
      Blog
     </h1>
    </div>
    <div
     className="flex flex-col justify-center items-start max-w-2xl mx-auto my-5 lg:my-16 space-y-5 lg:space-y-10 min-h-[70vh]"
     id="posts"
    >
     <div className="w-full text-center text-xl text-gray-900 dark:text-gray-100">
      No posts found
     </div>
    </div>
    <div className="postNumberNav flex justify-center items-center space-x-3 mt-7 mb-12 overflow-scroll">
     <button
      className="hover:underline hover:text-blue-500 text-md text-blue-500 dark:text-blue-500"
      onClick={(e) => {
       document.querySelectorAll(".postNumberNav button").forEach((l) => {
        l.classList.remove("text-blue-500", "dark:text-blue-500");
        l.classList.add("text-gray-600", "dark:text-gray-400");
       });
       e.target.classList.add("text-blue-500", "dark:text-blue-500");
       e.target.classList.remove("text-gray-600", "dark:text-gray-400");
       fetchPosts("", false);
       window.scrollTo({ top: 0, behavior: "smooth" });
      }}
     >
      1
     </button>
    </div>
   </>
  );
}

export default Blog;
