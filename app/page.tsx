import Link from 'next/link'
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
          <hr className="my-4 opacity-10" />
      <div className="flex flex-col md:flex-row items-start">
        <div className="md:w-2/3 pr-4">
        
          <h1 className="text-2xl font-bold mb-4">Rohan Sikand.</h1>
          <p>
            [<code>rsikand at stanford.edu</code>]
            <br />
            [<a href="https://x.com/rosikand">Twitter</a>] [<a href="https://github.com/rosikand/">Github</a>] [<a href="https://www.linkedin.com/in/rosikand">LinkedIn</a>] [<a href="https://scholar.google.com/citations?user=E5Z8wUoAAAAJ&hl=en">Google Scholar</a>]             
            <br />
            <br />
            <a href="https://exhibits.stanford.edu/cs/about/timeline">Stanford CS</a>  (AI, Systems) B.S., M.S. 2025. 
            {/* <br /> */}
            {/* <br /> */}
            <div className="h-2"></div>
          </p>
          
          <p>
            I am interested in engineering large-scale systems for applied machine learning to solve hard technical problems that have real-world impact. In the past, I've conducted research in self-supervised learning at <a href="https://ai.stanford.edu/">SAIL</a>, engineered segmentation models at <a href="https://www.insitro.com/">insitro</a>, and built many ML <Link href="/portfolio">projects</Link>.  
          </p>

          <p>
            {/* <br /> */}
            <div className="h-2"></div>
            In my free time, I play <Link href="/golf">golf</Link> and <Link href="/blog">think</Link>. 
            This webpage is a collection of my thoughts, projects, and experiences. 
          </p>

          <p>
            {/* <br /> */}
            <div className="h-2"></div>
            I also infrequently write at <Link href="https://rosikand.substack.com/">Rohan's Random Walks</Link>.

            <br />
            <br /> 
            <em>Webpage content under construction... will be updated soon.</em>
          </p>
      
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0">
          <img
            src="/assets/prof1.jpeg"
            alt="Profile picture"
            className="bordered-image w-full max-w-[250px] ml-auto"
          />
        </div>
        
      </div>
      <div className="my-1">
    {/* <hr className="my-4 opacity-10" /> */}
    {/* <h3 className="text-xl font-semibold mb-2">Recent Thoughts</h3> */}
    {/* <div className="h-3"></div> */}
    {/* <BlogPosts /> */}
    {/* <hr className="my-2 opacity-10" /> */}
  
      </div>
    </section>
  )
}
