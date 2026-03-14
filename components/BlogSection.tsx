import { Calendar, User } from 'lucide-react';
// import blog1 from './blog-1.jpg';
// import blog2 from './blog-2.jpg';
// import case1 from './case-1.jpg';

const posts = [
  {
    img: '/blog-1.jpg',
    title: 'Who Can a Victim Sue after a Car Accident?',
    author: 'Anne William',
    date: '14 AUG, 23',
  },
  {
    img: '/blog-2.jpg',
    title: 'Car Accidents Caused by Defective Vehicles',
    author: 'Konal Biry',
    date: '16 AUG, 23',
  },
  {
    img: '/case-1.jpg',
    title: 'Justice May For You If You Are Innocent',
    author: 'Jenefer Willy',
    date: '18 AUG, 23',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="bg-cream py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="section-subtitle mb-3">Our Blog</p>
          <h2 className="section-title text-foreground">
            Latest Legal News and Insights
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <div
              key={post.title}
              className="group cursor-pointer overflow-hidden bg-background shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-4 font-heading text-lg font-bold text-foreground transition-colors group-hover:text-gold">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
