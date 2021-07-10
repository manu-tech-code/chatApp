const searchBar = document.querySelector(".user .search input");
const searchbtn = document.querySelector(".user .search button");

searchbtn.onclick = ()=> {
    searchBar.classList.toggle("active");
    searchBar.focus();
    searchbtn.classList.toggle("active")
}