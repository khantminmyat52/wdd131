const input = document.querySelector("#favchap")
const button = document.querySelector("#mybutton")
const list = document.querySelector("#list")

button.addEventListener("click", function () {
    if (input.value != "") {
        const li = document.createElement("li")
        li.textContent = input.value
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "❌"
        deleteButton.addEventListener("click", function () {
            li.remove()
            input.focus()
        })
        li.append(deleteButton)
        list.appendChild(li)

        input.value = ""
    }
    input.focus()
})
