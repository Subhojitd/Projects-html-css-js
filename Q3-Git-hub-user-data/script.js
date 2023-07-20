// script.js

function fetchUserData() {
    const usernameInput = document.getElementById("username-input");
    const username = usernameInput.value;
  
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        const userInfo = document.getElementById("user-info");
        const avatar = document.getElementById("avatar");
        const name = document.getElementById("name");
        const location = document.getElementById("location");
        const portfolio = document.getElementById("portfolio");
        const repositories = document.getElementById("repositories");
        const followers = document.getElementById("followers");
        const bio = document.getElementById("bio");
  
        avatar.src = data.avatar_url;
        name.textContent = `Name: ${data.name}`;
        location.textContent = `Location: ${data.location || "N/A"}`;
        portfolio.innerHTML = `Portfolio: <a  target="_blank" href="${data.html_url|| "#"}">Portfolio</a>`;
        repositories.textContent = `Public Repos: ${data.public_repos}`;
        followers.textContent = `Followers: ${data.followers}`;
        bio.textContent = `Bio: ${data.bio || "N/A"}`;
  
        userInfo.classList.remove("hidden");
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred. Please try again.");
      });
  }
  