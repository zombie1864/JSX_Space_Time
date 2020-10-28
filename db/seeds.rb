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

video4 = Video.create!(
    title: 'ow The Penrose Singularity Theorem Predicts The End of Space Time ',
    runtime: 16.58, 
    description: 'The Nobel prize in physics this year went to black holes. Generally speaking. Specifically, it was shared by the astronomers who revealed to us the Milky Way’s central black hole and by Roger Penrose, who proved that in general relativity, every black hole contains a place of infinite gravity - a singularity. But the true impact of Penrose’s singularity theorem would is much deeper  - it leads us to the limits Einstein’s great theory and to the origin of the universe.',
    video_url: 'https://www.youtube.com/watch?v=z4odQd8q3xY&t=887s&ab_channel=PBSSpaceTime'
)

video5 = Video.create!(
    title: 'The Edge of an Infinite Universe',
    runtime: 18.29,
    description: 'Have you ever asked “what is beyond the edge of the universe?” And have you ever been told that an infinite universe that has no edge? You were told wrong. In a sense. We can define a boundary to an infinite universe, at least mathematically. And it turns out that boundary may be as real or even more real than the universe it contains.',
    video_url: 'https://www.youtube.com/watch?v=tJevBNQsKtU&ab_channel=PBSSpaceTime'
)

video6 = Video.create!(
    title: 'Why Quantum Computing Requires Quantum Cryptography', 
    runtime: 17.14, 
    description: 'Quantum theory may seem like an obscure subject of questionable relevance to the average person. But in fact much of our technological world depends on our understanding of the quantum properties of the subatomic universe. And soon, perhaps very soon, we’ll be interacting with the weirdness of quantum mechanics even more directly – with the coming of quantum computing and the quantum internet. Quantum computing is a topic that’s that has been well covered, so we’re going to be talking about the quantum internet. Specifically quantum cryptography and quantum key distribution – the foundations of the prospective quantum internet. We may come back to quantum computer in detail – but for now let me show you why their advent will demand a quantum internet. ',
    video_url: 'https://www.youtube.com/watch?v=pi7YwxxZQ5A&ab_channel=PBSSpaceTime'
)