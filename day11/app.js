const APIURL = "https://api.github.com/users/"
const main = document.querySelector("#main");
const searchBox = document.querySelector("#search")
const getuser = async (username) => {
    const response = await fetch(APIURL + username)
    // console.log(response);
    const data = await response.json()
    console.log(data);

    const card =
        `

    <div class="card">
            <div>
                <img src="${data.avatar_url}" alt="florin pop" class="avatar">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>

                            </div>
        </div>
        <div id="repos">

        </div>


    `
    main.innerHTML = card;

    getrepos(username)
}

getuser("vikas148");

const getrepos = async (username) => {
    const repos = document.querySelector("#repos")

    const response = await fetch(APIURL + username + "/repos")
    const data = await response.json();
    // console.log(data);

    data.forEach((item) => {
        const elem = document.createElement("a")
        elem.classList.add("repo")
        elem.href = item.html_url
        elem.innerText = item.name
        elem.target = "_blank"
        repos.appendChild(elem)
    })
}
const formSubmit = () => {
    if (searchBox.value != "") {
        getuser(searchBox.value)
        searchBox.value = "";
    }
    return false;

}

searchBox.addEventListener("focusout",
    function () {
        formSubmit();
    }

)
/*{ <a href="#" class="repo" target="_blank">Repo1</a>
<a href="#" class="repo" target="_blank">Repo2</a>
<a href="#" class="repo" target="_blank">Repo3</a> }*/
