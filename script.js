const body = document.getElementById("mainBody");
const card = document.getElementById('CARDS');
function onClick(clickedId){
    const id = clickedId;
    body.removeChild(card);
    const playerCard = document.createElement('div');
    playerCard.classList.add('playerCard');
    playerCard.id = 'player-card';
    for(let i=0; i<playerArray.length; i++){
        if(playerArray[i].from == id){
            const playerDiv = document.createElement('div');
            playerDiv.className = 'playerDiv';
            playerDiv.id = playerArray[i].playerName;
            playerDiv.addEventListener("click", function(){
                const cards = document.getElementById('player-card');
                body.removeChild(cards)
                const deatilsCard = document.createElement('div');
                deatilsCard.classList.add('detail-Card');
                const img = document.createElement('img');
                img.src = playerArray[i].imgSrc;
                const detail = document.createElement('div');
                detail.classList.add('detail');
                const name = document.createElement('h3');
                name.classList.add('player-Name');
                name.innerText = `Name: ${playerArray[i].playerName}`;
                const desc = document.createElement('p');
                desc.classList.add('player-Desc');
                desc.innerText = `Team: ${playerArray[i].description}`;
                const playing = document.createElement('p');
                playing.classList.add('is-Playing');
                if(playerArray[i].isPlaying == true){
                    playing.innerText = "PlayingStatus: Playing"
                }else{
                    playing.innerText = "PlayingStatus: On bench"
                }
                const price = document.createElement('p');
                price.classList.add('player-Price');
                price.innerText = `Price: ${playerArray[i].price}`;
                detail.append(name,desc,playing,price)
                deatilsCard.append(img,detail);
                body.append(deatilsCard)
            })
            const img = document.createElement('img');
            img.src = playerArray[i].imgSrc;
            const details = document.createElement('div');
            details.classList.add('playerDetails')
            const name = document.createElement('h3');
            name.classList.add('playerName');
            name.innerText = `Name: ${playerArray[i].playerName}`;
            const desc = document.createElement('p');
            desc.classList.add('playerDesc');
            desc.innerText = `Team: ${playerArray[i].description}`;
            const playing = document.createElement('p');
            playing.classList.add('isPlaying');
            if(playerArray[i].isPlaying == true){
                playing.innerText = "PlayingStatus: Playing"
            }else{
                playing.innerText = "PlayingStatus: On bench"
            }
            const price = document.createElement('p');
            price.classList.add('playerPrice');
            price.innerText = `Price: ${playerArray[i].price}`;
            details.append(name,desc,playing,price)
            playerDiv.append(img, details);
            playerCard.append(playerDiv);
            body.append(playerCard);
        }
    }
}

// Adding the searchbox function
function searchPlayer(){
    const searchElem = document.getElementById('searchBar').value.toUpperCase();
    body.removeChild(card);
    const playerCard = document.createElement('div');
    playerCard.classList.add('playerCard')
    playerCard.id = 'player-card'
    for(let i=0; i<playerArray.length;i++){
        if(playerArray[i].playerName.toUpperCase().indexOf(searchElem)>-1){
            const playerDiv = document.createElement('div');
            playerDiv.className = 'playerDiv';
            playerDiv.id = playerArray[i].playerName;
            playerDiv.addEventListener("click", function(){
                const cards = document.getElementById('player-card');
                body.removeChild(cards)
                const deatilsCard = document.createElement('div');
                deatilsCard.classList.add('detail-Card');
                const img = document.createElement('img');
                img.src = playerArray[i].imgSrc;
                const detail = document.createElement('div');
                detail.classList.add('detail');
                const name = document.createElement('h3');
                name.classList.add('player-Name');
                name.innerText = `Name: ${playerArray[i].playerName}`;
                const desc = document.createElement('p');
                desc.classList.add('player-Desc');
                desc.innerText = `Team: ${playerArray[i].description}`;
                const playing = document.createElement('p');
                playing.classList.add('is-Playing');
                if(playerArray[i].isPlaying == true){
                    playing.innerText = "PlayingStatus: Playing"
                }else{
                    playing.innerText = "PlayingStatus: On bench"
                }
                const price = document.createElement('p');
                price.classList.add('player-Price');
                price.innerText = `Price: ${playerArray[i].price}`;
                detail.append(name,desc,playing,price)
                deatilsCard.append(img,detail);
                body.append(deatilsCard)
            })
            const img = document.createElement('img');
            img.src = playerArray[i].imgSrc;
            const details = document.createElement('div');
            details.classList.add('playerDetails')
            const name = document.createElement('h3');
            name.classList.add('playerName');
            name.innerText = `Name: ${playerArray[i].playerName}`;
            const desc = document.createElement('p');
            desc.classList.add('playerDesc');
            desc.innerText = `Team: ${playerArray[i].description}`;
            const playing = document.createElement('p');
            playing.classList.add('isPlaying');
            if(playerArray[i].isPlaying == true){
                playing.innerText = "PlayingStatus: Playing"
            }else{
                playing.innerText = "PlayingStatus: On bench"
            }
            const price = document.createElement('p');
            price.classList.add('playerPrice');
            price.innerText = `Price: ${playerArray[i].price}`;
            details.append(name,desc,playing,price)
            playerDiv.append(img, details);
            playerCard.append(playerDiv);
            body.append(playerCard);
        }else if(playerArray[i].from.toUpperCase() == searchElem){
                    const playerDiv = document.createElement('div');
                    playerDiv.className = 'playerDiv';
                    playerDiv.id = playerArray[i].playerName;
                    playerDiv.addEventListener("click", function(){
                        const cards = document.getElementById('player-card');
                        body.removeChild(cards)
                        const deatilsCard = document.createElement('div');
                        deatilsCard.classList.add('detail-Card');
                        const img = document.createElement('img');
                        img.src = playerArray[i].imgSrc;
                        const detail = document.createElement('div');
                        detail.classList.add('detail');
                        const name = document.createElement('h3');
                        name.classList.add('player-Name');
                        name.innerText = `Name: ${playerArray[i].playerName}`;
                        const desc = document.createElement('p');
                        desc.classList.add('player-Desc');
                        desc.innerText = `Team: ${playerArray[i].description}`;
                        const playing = document.createElement('p');
                        playing.classList.add('is-Playing');
                        if(playerArray[i].isPlaying == true){
                            playing.innerText = "PlayingStatus: Playing"
                        }else{
                            playing.innerText = "PlayingStatus: On bench"
                        }
                        const price = document.createElement('p');
                        price.classList.add('player-Price');
                        price.innerText = `Price: ${playerArray[i].price}`;
                        detail.append(name,desc,playing,price)
                        deatilsCard.append(img,detail);
                        body.append(deatilsCard)
                    })
                    const img = document.createElement('img');
                    img.src = playerArray[i].imgSrc;
                    const details = document.createElement('div');
                    details.classList.add('playerDetails')
                    const name = document.createElement('h3');
                    name.classList.add('playerName');
                    name.innerText = `Name: ${playerArray[i].playerName}`;
                    const desc = document.createElement('p');
                    desc.classList.add('playerDesc');
                    desc.innerText = `Team: ${playerArray[i].description}`;
                    const playing = document.createElement('p');
                    playing.classList.add('isPlaying');
                    if(playerArray[i].isPlaying == true){
                        playing.innerText = "PlayingStatus: Playing"
                    }else{
                        playing.innerText = "PlayingStatus: On bench"
                    }
                    const price = document.createElement('p');
                    price.classList.add('playerPrice');
                    price.innerText = `Price: ${playerArray[i].price}`;
                    details.append(name,desc,playing,price)
                    playerDiv.append(img, details);
                    playerCard.append(playerDiv);
                    body.append(playerCard);
                }
    }
}


// Adding the back button function
function goBack(){
    const child = body.firstElementChild;
    body.removeChild(child);
    body.append(card);
    const searchBox = document.getElementById("searchBar");
    searchBox.value = '';
}

function addData(){
    const addTeam = confirm('Do you want to add a Team?');
    if(addTeam){
        const teamName = prompt("Enter Team name: ");
        const imgUrl = prompt("Enter image url: ");
        console.log(teamName, imgUrl);
        const div = document.createElement('div');
        div.className = "team";
        div.id = teamName.toUpperCase();
        div.addEventListener('click', onClick(this.id));
        const img = document.createElement('img');
        img.src = imgUrl;
        img.alt = teamName.toUpperCase();
        const h1 = document.createElement('h1');
        h1.className = 'teamName';
        h1.innerText = teamName.toUpperCase();
        div.append(img,h1);
        card.append(div);
        body.append(card);
    }else{
        const addPlayer = confirm("Do you want to add a player?");
        if(addPlayer){
            const id = playerArray.length;
            const playerName = prompt('Enter player name: ');
            const from = prompt('Enter player team: ');
            const price = prompt('Enter player price: ');
            const playing = confirm("Is the player playing: ");
            const description = prompt("Enter player description: ");
            const imgSrc = prompt("Enter player imgUrl: ");
            const obj = {
                id : id,
                playerName : playerName,
                from : from.toUpperCase(),
                price : price,
                isPlaying : playing,
                description : description,
                imgSrc : imgSrc
            }
            playerArray.push(obj);
        }
    }
}