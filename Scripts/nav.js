
const navToggle = document.querySelector(".mobile-nav-toggle");
const navigation = document.querySelector(".navigation");

navToggle.addEventListener("click", function(){
    let open = navigation.getAttribute("data-open")

    if (open == "false"){
        navigation.setAttribute("data-open", true);
        navToggle.setAttribute("aria-expanded", true);
    }else{
        navigation.setAttribute("data-open", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});





// USING JQUERY 
// const nav = $(".navigation");
// const navToggle = $(".mobile-nav-toggle");

// navToggle.click(() => {
//     const open = nav.attr("data-open");
//     if (open === "false"){
//         nav.attr("data-open", "true");
//         navToggle.attr("aria-expanded", "true");
//     }else{
//         nav.attr("data-open", "false");
//         navToggle.attr("aria-expanded", "false");
//     }
// });

        







