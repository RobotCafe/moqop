import Head from 'next/head'
import Layout from '../../layout/blogpost'
import BlogTitle from 'layout/blogtitle'
import Image from 'next/image'

export default function Page() {
  return (
    <>
    
      <BlogTitle title="What is Design Automation?" description="Automatise your design process and render images with different data unlimited times without manual editing." />
        
      <strong>Design Automation</strong> is a new term despite the importance of automatise repetitive tasks in the design process. We don't have too many products that would speed up the whole process and generate the content based on the changing data, so designers have to update the designs manually every time. Let's change it with Moqop.
      <div className="block my-24">
        <Image src="/images/blog/automation-17-05-2022.jpg" width="690" height="320" alt='automation' />
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}