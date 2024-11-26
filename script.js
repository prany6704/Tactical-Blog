// Simulate posts data
const posts = [
  {
    title: "The Art of Tactical Combat",
    excerpt: "Understanding the principles of close combat...",
    image: "image1.jpg",
    video: "video1.mp4",
    link: "#",
    tags: ["combat", "tactics", "strategy"]
  },
  {
    title: "Mastering Survival Skills",
    excerpt: "Surviving in the wild requires more than just strength...",
    image: "image2.jpg",
    video: "video2.mp4",
    link: "#",
    tags: ["survival", "skills", "outdoors"]
  },
  {
    title: "Technology in Modern Warfare",
    excerpt: "The role of drones, cyber warfare, and AI in combat...",
    image: "image3.jpg",
    video: "video3.mp4",
    link: "#",
    tags: ["technology", "cyber", "drones"]
  }
];

// Render posts on the home page
const postList = document.getElementById("post-list");

posts.forEach(post => {
  const postElement = document.createElement("div");
  postElement.classList.add("post-item");
  postElement.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.excerpt}</p>
    <a href="${post.link}">Read more</a>
  `;
  postList.appendChild(postElement);
});

// Search functionality
function searchPosts() {
  const searchTerm = document.getElementById("search-input").value.toLowerCase();
  const searchResults = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm) || post.excerpt.toLowerCase().includes(searchTerm)
  );
  displaySearchResults(searchResults);
}

function displaySearchResults(results) {
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";  // Clear previous results

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.forEach(post => {
    const resultElement = document.createElement("div");
    resultElement.classList.add("post-item");
    resultElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.excerpt}</p>
      <a href="${post.link}">Read more</a>
    `;
    resultsContainer.appendChild(resultElement);
  });
}

// Tags page - display all tags
const tagsList = document.getElementById("tags-list");

const allTags = new Set();
posts.forEach(post => {
  post.tags.forEach(tag => allTags.add(tag));
});

allTags.forEach(tag => {
  const tagItem = document.createElement("li");
  tagItem.textContent = tag;
  tagsList.appendChild(tagItem);
});