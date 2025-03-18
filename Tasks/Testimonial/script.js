const testimonials=[
    {
        "id":1,
        "name":"Jhon",
        "testimonial":"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "img":"https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png",
    },
    {
        "id":2,
        "name":"Pradeep",
        "testimonial":"Lorem ipsum dolor sit amet.",
        "img":"https://static.vecteezy.com/system/resources/previews/048/216/761/non_2x/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png",
    },
    {
        "id":3,
        "name":"Priyanka",
        "testimonial":"Lorem ipsum dolor sit amet Lorem.",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNbSs4HzxCcXAOOrZnlQxIj1U5vkq4rA-IQ&s",
    },
    {
        "id":4,
        "name":"Arul",
        "testimonial":"Lorem ipsum dolor.",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2U2akySBgSHUK-foX-9SGFmLk6zEuGYNNqw&s",
    },
    {
        "id":5,
        "name":"Arulmozhi",
        "testimonial":"Lorem ipsum.",
        "img":"https://i.pinimg.com/564x/5b/24/05/5b240570be0c2e94d54d4c33cd930df7.jpg",
    }
]


const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username");

let idx= 0;

updateTestimonial();

function updateTestimonial(){
    const {id, name, testimonial, img}=testimonials[idx];
    imgEl.src=img
    textEl.innerHTML=testimonial
    usernameEl.innerHTML=name
    idx++
    if (idx === testimonials.length) {
        idx = 0
    } 
    setTimeout(
        ()=>
            {updateTestimonial()}
        ,3000)
}
