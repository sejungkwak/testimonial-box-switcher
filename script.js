const testimonial = document.getElementById('testimonial');
const photo = document.getElementById('photo');
const name = document.getElementById('name');
const role = document.getElementById('role');

const testimonials = [
  {
    testimonial: `I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.`,
    photo: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Miyah Myles',
    role: 'Marketing'
  },
  {
    testimonial:`This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!`,
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'June Cha',
    role: 'Software Engineer'
  },
  {
    testimonial:`This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.`,
    photo: 'https://randomuser.me/api/portraits/women/3.jpg',
    name: 'Iida Niskanen',
    role: 'Data Entry'
  },
  {
    testimonial:`This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.`,
    photo: 'https://randomuser.me/api/portraits/women/4.jpg',
    name: 'Renee Sims',
    role: 'Receptionist'
  },
  {
    testimonial:`I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!`,
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Jonathan Nunfiez',
    role: 'Graphic Designer'
  },
  {
    testimonial:`This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!`,
    photo: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: 'Sasha Ho',
    role: 'Accountant'
  },
  {
    testimonial:`This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.`,
    photo: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'Veeti Seppanen',
    role: 'Director'
  }
]

let i = 1;

setInterval(function() {
  if ( i < testimonials.length ) {
    testimonial.innerText = testimonials[i].testimonial;
    photo.src = testimonials[i].photo;
    name.innerText = testimonials[i].name;
    role.innerText = testimonials[i].role;
    i++
  } else {
    i = 0;
  }
}, 10000)