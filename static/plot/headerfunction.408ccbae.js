const c = document.querySelector(".compressed_menu")
  , e = document.querySelector(".menu")
  , i = document.querySelectorAll(".item");
function n() {
    e.classList.contains("active") ? (document.querySelector(".submenu-active") && document.querySelector(".submenu-active").classList.remove("submenu-active"),
    e.classList.remove("active")) : e.classList.add("active")
}
function s() {
    this.classList.contains("submenu-active") ? this.classList.remove("submenu-active") : this.classList.add("submenu-active")
}
function u(t) {
    e.contains(t.target) || (document.querySelector(".submenu-active") && document.querySelector(".submenu-active").classList.remove("submenu-active"),
    e.classList.contains("active") && e.classList.remove("active"))
}
c.addEventListener("click", n);
document.addEventListener("click", u);
for (let t of i)
    t.querySelector(".submenu") && (t.addEventListener("click", s, !1),
    t.addEventListener("keypress", s, !1));
