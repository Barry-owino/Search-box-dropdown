const select = document.getElementById("select");
const list = document.getElementById("list");
const selectText = document.getElementById("selectText");
const options = document.getElementsByClassName("options");
const inputfield = document.getElementById("inputfield");

select.onclick = function(){
    list.classList.toggle("open");
}

for (option of options){
  option.onclick = function () {
    selectText.innerHTML = this.innerHTML;
    inputfield.placeholder = "Search In " + selectText.innerHTML;
  }
}

