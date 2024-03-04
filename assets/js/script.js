// Element Selectors
const latestPost = document.getElementById("latestPost");
const allPost = document.getElementById("allPost");

// All post Functionality
async function fetchAllPost() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  const allPost = data.posts;
  displayAllPost(allPost);
}

fetchAllPost();

function displayAllPost(data) {
  for (post of data) {
    const postItem = document.createElement("div");
    postItem.classList.add("lg:col-span-2");
    postItem.innerHTML = `
    <div class="border-2 flex gap-4 py-4 px-5 rounded-xl bg-gray-100">
    <div>
      <div class=" w-20  bg-gray-300 rounded-lg relative">
        <img class="w-[100%]" src="${post.image}" alt="">
        <span
          class="absolute -top-1 -right-1 rounded-full p-2 ${
            post.isActive ? "bg-green-500" : "bg-red-500"
          }"
        ></span>
      </div>
    </div>
    <div class="w-[100%]">
      <div class="flex flex-col border-b-2 pb-2 border-dashed">
        <div class="flex gap-3">
          <span># ${post.category} </span>
          <span>Author : ${post.author.name} </span>
        </div>
        <h1 class="text-xl text-[#12132D] font-bold"> ${post.title}</h1>
        <p> ${post.description} </p>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex gap-6 pt-2">
          <div class="flex gap-2 items-center">
            <i class="bi bi-chat-left"></i>
            <span>${post.comment_count}</span>
          </div>
          <div class="flex gap-2 items-center">
            <i class="bi bi-eye"></i>
            <span>${post.view_count}</span>
          </div>
          <div class="flex gap-2 items-center">
            <i class="bi bi-clock"></i>
            <span>${post.posted_time}</span>
          </div>
        </div>
        <div class="cursor-pointer">
          <img src="assets/images/email 1.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
    `;
    allPost.appendChild(postItem);
  }
}

// Latest Post Functionality
async function fetchLatestPost() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  displayLatestPost(data);
}

fetchLatestPost();

function displayLatestPost(data) {
  for (post of data) {
    const latestPostItem = document.createElement("div");
    latestPostItem.classList.add("py-5", "px-5", "rounded-2xl", "bg-slate-100");
    latestPostItem.innerHTML = `
    <img
      class="rounded-xl"
      src="${post.cover_image}"
      alt=""
    />
    <div class="flex flex-col gap-3 pt-4">
      <div class="flex gap-2">
        <i class="bi bi-calendar"></i>
        <span>${post.author.posted_date || "No publish date"}</span>
      </div>
      <h1 class="font-extrabold text-lg">${post.title}</h1>
      <p class="text-slate-400"> ${post.description} </p>
      <div class="flex gap-3 items-center">
        <img
          class="border-4 border-blue-300 rounded-full w-[55px]"
          src="${post.profile_image}"
          alt=""
        />
        <div class="flex flex-col">
          <strong> ${post.author.name} </strong>
          <p>${post.author.designation || "Unknown"}</p>
        </div>
      </div>
    </div>
    `;
    latestPost.appendChild(latestPostItem);
  }
}
