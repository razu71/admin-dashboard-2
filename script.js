const body = document.querySelector("body"),
  sidebar = document.querySelector(".sidebar"),
  toggle = document.querySelector(".toggle"),
  search_btn = document.querySelector(".search-box"),
  toggle_switch = document.querySelector(".toggle-switch"),
  mode_text = document.querySelector(".mode-text"),
  dropdown_items = document.querySelector(".dropdown-items"),
  user_info = document.querySelector("#user_info"),
  info = document.querySelector(".info");

toggle_switch.addEventListener("click", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    mode_text.innerText = "Light Mode";
  } else {
    mode_text.innerText = "Dark Mode";
  }
});


toggle.addEventListener('click', function(){
  sidebar.classList.toggle('close')
})

info.addEventListener('click', function(){
  dropdown_items.classList.toggle('open')
})

window.addEventListener('click', function(e){   
  if (!user_info.contains(e.target)){
    if(dropdown_items.classList.contains('open')){
      dropdown_items.classList.remove('open')
    }
  }
});
