// Element Selectors
const latestPost = document.getElementById("latestPost");

async function fetchLatestPost() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  // const allData = data.posts;
  displayLatestPost(data);
}

fetchLatestPost();

function displayLatestPost(data) {
  for (post of data) {
    console.log(post);
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
