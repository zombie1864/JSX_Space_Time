# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all 
Video.delete_all

demo = User.create!(
    first_name: 'james', 
    last_name: 'maxwell', 
    email: 'maxwell@spaceMail.com', 
    password: 'epsilon'
)

video1 = Video.create!(
    title: 'The Boundary Between Black Holes & Neutron Stars', 
    runtime: 15.00,
    description: 'When we detected the very first gravitational wave, a new window was opened to the mysteries of the universe. We knew we’d see things previously thought impossible. And we just did - an object on the boundary between neutron stars and black holes, which promises to reveal the secrets of both.', 
    video_url: 'https://www.youtube.com/watch?v=As7vWYmb5L8', 
    image_url: 'video1_img.jpg'
)

video2 = Video.create!(
    title: 'Computing a Universe Simulation', 
    runtime: 15.08, 
    description: 'I’m not saying the universe is a simulation. I mean it might be – I’m just not saying it. And perhaps it doesn’t make any difference. Even if this is the prime, the original physical universe, rather than somewhere deep in a simulation nest, we can STILL think of our universe’s underlying mechanics as computation. Imagine a universe in which the most elementary components are stripped of all properties besides some binary notion of existence or non-existence. Like, if the tiniest chunks of spacetime, or chunks of quantum fields, or elements in the abstract space of quantum-mechanical states can either be full or empty. These elements interact with their neighbors by a simple set of rules, leading to oscillations, elementary particles, atoms, and ultimately to all of the emergent laws of physics, physical structure, and ultimately the universe.', 
    video_url: 'https://www.youtube.com/watch?v=0GLgZvTCbaA', 
    image_url: 'video2_img.jpg'
)

video3 = Video.create!(
    title: 'Does Gravity Require Extra Dimensions?',
    runtime: 16.41,
    description: 'It’s been 120 years since Henry Cavendish measured the gravitational constant with a pair of lead balls suspended by a wire. The fundamental nature of gravity still eludes our best minds - but those secrets may be revealed by turning back to the Cavendish experiment. That steampunk contraption may even reveal the existence of extra dimensions of space.',
    video_url: 'https://www.youtube.com/watch?v=z91oGI5aP0A', 
    image_url: 'video3_img.jpg'
)