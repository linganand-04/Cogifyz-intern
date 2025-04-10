fetch('https://official-joke-api.appspot.com/jokes/programming/ten')
.then((res)=>res.json())
.then((msg)=>{
    const joke = msg[0]
    const jokeBox =  document.querySelector(".jokes-section")

    jokeBox.innerHTML = `
      <div class="jokes">
        <p class="setup">${joke.setup?joke.setup:"Loading"}</p>
        <p class="punchline">${joke.punchline}</p>
      </div>
    `
}
).catch(err=>console.error(err)
)

