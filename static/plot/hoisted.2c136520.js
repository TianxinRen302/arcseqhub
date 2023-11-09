// import "./headerfunction.408ccbae.js";
// const a = document.getElementById("progress")
//   , n = document.querySelectorAll(".circle")
//   , u = document.getElementById("progress2")
//   , r = document.querySelectorAll(".circle2")
//   , d = document.getElementById("progress3")
//   , i = document.querySelectorAll(".circle3");

// console.log(document.getElementById('displayImage'))

// let s = 1
//   , c = 1
//   , l = 1
//   , o = h;
// function h() {
//     if (s++,
//     s > n.length) {
//         s = 0,
//         o = f;
//         return
//     }
//     n.forEach((e,t)=>{
//         t < s ? e.classList.add("active") : e.classList.remove("active")
//     }
//     ),
//     a.style.width = Math.min(s - 1, n.length - 1) / (n.length - 1) * 100 + "%"
// }
// function f() {
//     if (c++,
//     c > r.length) {
//         c = 0,
//         o = g;
//         return
//     }
//     r.forEach((e,t)=>{
//         t < c ? e.classList.add("active") : e.classList.remove("active")
//     }
//     ),
//     u.style.width = Math.min(c - 1, r.length - 1) / (r.length - 1) * 100 + "%"
// }
// function g() {
//     if (l++,
//     l > i.length) {
//         l = 0,
//         o = h,
//         v();
//         return
//     }
//     i.forEach((e,t)=>{
//         t < l ? e.classList.add("active") : e.classList.remove("active")
//     }
//     ),
//     d.style.width = Math.min(l - 1, i.length - 1) / (i.length - 1) * 100 + "%"
// }
// function m() {
//     return o()
// }
// function v() {
//     n.forEach((e,t)=>{
//         t > 0 && e.classList.remove("active")
//     }
//     ),
//     a.style.width = 0,
//     r.forEach((e,t)=>{
//         t > 0 && e.classList.remove("active")
//     }
//     ),
//     u.style.width = 0,
//     i.forEach((e,t)=>{
//         t > 0 && e.classList.remove("active")
//     }
//     ),
//     d.style.width = 0
// }
// setInterval(m, 1500);


console.log(window.screen.height)
console.log(window.screen.width)

let s = 1
	, s2 = 1
  , c = 1
  , l = 1
  , flag = true
  // , o = h;

setInterval(function() {
	const a = document.getElementById("progress")
	  , n = document.querySelectorAll(".circle")
	  , u = document.getElementById("progress2")
	  , r = document.querySelectorAll(".circle2")
	  , d = document.getElementById("progress3")
	  , i = document.querySelectorAll(".circle3")
	  , a2 = document.getElementById("progress4")
	  , n2 = document.querySelectorAll(".circle4");

	// console.log(document.getElementById('displayImage'))

	if (flag){
		o = h;
		flag = false
	};
	
	function h() {
	    if (s++,
	    s > n.length) {
	        s = 0;
	        o = f;
	        return
	    };
	    n.forEach((e,t)=>{
	        t < s ? e.classList.add("active") : e.classList.remove("active")
	    });
	    a.style.width = Math.min(s - 1, n.length - 1) / (n.length - 1) * 100 + "%";
	    n2.forEach((e,t)=>{
	        t < s ? e.classList.add("active") : e.classList.remove("active")
	    }),
	    a2.style.width = Math.min(s - 1, n.length - 1) / (n.length - 1) * 100 + "%"
	}
	function f() {
	    if (c++,
	    c > r.length) {
	        c = 0,
	        o = g;
	        return
	    }
	    r.forEach((e,t)=>{
	        t < c ? e.classList.add("active") : e.classList.remove("active")
	    }
	    ),
	    u.style.width = Math.min(c - 1, r.length - 1) / (r.length - 1) * 100 + "%"
	}
	function g() {
	    if (l++,
	    l > i.length) {
	        l = 0,
	        o = h,
	        v();
	        return
	    }
	    i.forEach((e,t)=>{
	        t < l ? e.classList.add("active") : e.classList.remove("active")
	    }
	    ),
	    d.style.width = Math.min(l - 1, i.length - 1) / (i.length - 1) * 100 + "%"
	}
	function m() {
	    return o()
	}
	function v() {
	    n.forEach((e,t)=>{
	        t > 0 && e.classList.remove("active")
	    }
	    ),
	    a.style.width = 0,
	    r.forEach((e,t)=>{
	        t > 0 && e.classList.remove("active")
	    }
	    ),
	    u.style.width = 0,
	    i.forEach((e,t)=>{
	        t > 0 && e.classList.remove("active")
	    }
	    ),
	    d.style.width = 0
	    flag = true
	};

	console.log(123);
	o();
  }, 2000);