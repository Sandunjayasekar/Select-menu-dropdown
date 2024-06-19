var selectFields = document.getElementById("select-fields");
var SelectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");

selectFields.onclick = function() {
    list.classList.toggle("hide");
}

for (option of options) {
    option.onclick = function() {
        selectFields.innerHTML = this.textContent;
        list.classList.toggle("hide");

    }
}