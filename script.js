const searchYoutube = () =>{ 
     const query = encodeURIComponent(
          document.getElementById("searchQuery").value.trim()
     );
     if (query !== ""){
          window.location.href = `https://www.youtube.com/search?q=${query}`;
     }
};


const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchQuery");


searchButton.addEventListener("click", searchYoutube);
searchInput.addEventListener("keydown", (event) => {
     if(event.key === "Enter"){
          searchYoutube();
     }
})
