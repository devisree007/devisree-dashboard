import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Exploring the latest trends and technologies that are shaping the future of web development, from AI integration to advanced frameworks.',
      date: '2025-01-01',
      readTime: '5 min read',
      category: 'Web Development',
      featured: true
    },
    {
      title: 'Building Responsive UIs: A Modern Approach',
      excerpt: 'Learn how to create beautiful, responsive user interfaces using modern CSS techniques, Flexbox, Grid, and best practices.',
      date: '2024-12-28',
      readTime: '8 min read',
      category: 'CSS',
      featured: false
    },
    {
      title: 'JavaScript ES6+ Features Every Developer Should Know',
      excerpt: 'A comprehensive guide to modern JavaScript features that will make your code cleaner, more efficient, and easier to maintain.',
      date: '2024-12-20',
      readTime: '10 min read',
      category: 'JavaScript',
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="section-padding bg-card/20">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text">
            My Thoughts in Code
          </h2>
          <p className="text-xl text-muted-foreground font-space max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development and technology
          </p>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className={`glass rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group animate-slide-in-up ${
                post.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Blog Post Header */}
              <div className={`bg-gradient-to-r from-primary/20 to-electric/20 p-6 ${post.featured ? 'pb-8' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-mono">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="px-3 py-1 bg-terminal/20 text-terminal border border-terminal/30 rounded-full text-sm font-mono">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className={`font-bold text-foreground font-space leading-tight ${
                  post.featured ? 'text-2xl lg:text-3xl' : 'text-xl'
                }`}>
                  {post.title}
                </h3>
              </div>

              {/* Blog Post Content */}
              <div className="p-6 space-y-4">
                <p className={`text-muted-foreground leading-relaxed ${
                  post.featured ? 'text-lg' : ''
                }`}>
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="pt-4">
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary-glow group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Blog CTA */}
        <div className="text-center mt-16 glass p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground font-space mb-4">
            Want to read more?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to my newsletter to get the latest posts about web development, 
            programming tips, and technology insights delivered straight to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button className="btn-neon px-6 py-3 font-space">
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;