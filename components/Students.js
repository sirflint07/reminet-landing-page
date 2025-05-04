'use client';

import { motion } from 'framer-motion';

const students = [
  {
    id: 1,
    name: 'Alice Johnson',
    course: 'React Fundamentals',
    image: '/img/partner-3.jpg',
    testimonial:
      'The React course was amazing! I built my first SPA in weeks and landed a freelancing gig.',
  },
  {
    id: 2,
    name: 'Carlos Rivera',
    course: 'Next.js & SEO',
    image: '/img/partner-3.jpg',
    testimonial:
      'Next.js changed my workflow completely—static generation and SEO out of the box is a game-changer.',
  },
  {
    id: 3,
    name: 'Mia Wong',
    course: 'Tailwind CSS Mastery',
    image: '/img/partner-3.jpg',
    testimonial:
      'Tailwind made styling so much faster. My sites look sharp and I never write a single custom CSS file!',
  },
  {
    id: 4,
    name: 'Ethan Patel',
    course: 'Full‑Stack with Node.js',
    image: '/img/partner-3.jpg',
    testimonial:
      'From Express APIs to integrating MongoDB, the hands‑on projects gave me confidence to ship production code.',
  },
  {
    id: 5,
    name: 'Sara Lee',
    course: 'JavaScript Deep Dive',
    image: '/img/partner-3.jpg',
    testimonial:
      'The JavaScript deep dive course clarified so many concepts. I feel like a JS ninja now!',
  },
  {
    id: 6,
    name: 'David Kim',
    course: 'TypeScript Essentials',
    image: '/img/partner-3.jpg',
    testimonial:
      'TypeScript was intimidating at first, but this course made it approachable and practical.',
  },
  {
    id: 7,
    name: 'Priya Singh',
    course: 'GraphQL & Apollo',
    image: '/img/partner-3.jpg',
    testimonial:
      'GraphQL & Apollo unlocked a whole new way of thinking about data fetching—super efficient!',
  },
  {
    id: 8,
    name: 'Liam O’Connor',
    course: 'Svelte Masterclass',
    image: '/img/partner-3.jpg',
    testimonial:
      'Svelte’s reactivity model blew my mind. Now I build super‑fast apps with minimal boilerplate.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function MeetOurStudents() {
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Meet Some of Our Students
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Hear what our learners say after leveling up their web development skills with us.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {students.map((student) => (
            <motion.div
              key={student.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-6 flex flex-col h-full"
            >
              <div className="w-24 h-24 mx-auto rounded-full mb-4">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{student.name}</h3>
              <p className="text-sm text-primary font-medium mb-4">
                {student.course}
              </p>
              <p className="text-gray-600 text-sm flex-1">{student.testimonial}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}