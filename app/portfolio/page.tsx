import { CustomMDX } from 'app/components/mdx'
import { readFileSync } from 'fs'
import path from 'path'

export const metadata = {
  title: 'About',
  description: 'Learn more about me.',
}

export default function AboutPage() {
  const aboutContent = readFileSync(path.join(process.cwd(), 'app', 'portfolio', 'page.mdx'), 'utf-8')

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <article className="prose">
        <CustomMDX source={aboutContent} />
      </article>
    </section>
  )
}