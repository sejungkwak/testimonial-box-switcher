# Testimonial Box Switcher

<img width="1429" alt="Screenshot" src="./screenshot.png">

## project notes

1. HTML

- container: progress bar, text, image, name, role

2. CSS

- animation for the progress bar 10s
- quote symbols: before, after

3. JavaScript

- array of testimonials and user
- setInterval

---

Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

---

## Takeaways from the instructor

1. HTML

- quotes symbols in div
- div user details contains username and role

2. CSS

- padding 10px in body
- media quary with smaller screen remove quotes and change padding
- user display flex
- user photo object-fit: cover, not float
- @keyframes used with transform scaleX(0) => scaleX(100) and in the progress bar class transform-origin: left

3. JavaScript

```
let idx = 1;
function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if ( idx > testimonials.length - 1 ) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);

```
