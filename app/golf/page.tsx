import { CustomMDX } from 'app/components/mdx'
import { readFileSync } from 'fs'
import path from 'path'


export default function AboutPage() {
  const aboutContent = readFileSync(path.join(process.cwd(), 'app', 'golf', 'page.mdx'), 'utf-8')

  return (
    <section>
      <article className="prose">
        <CustomMDX source={aboutContent} />
      </article>
    </section>
  )
}