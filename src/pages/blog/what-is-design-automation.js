import Head from 'next/head'
import Layout from '../../layout/blogpost'
import BlogTitle from 'layout/blogtitle'

export default function Page() {
  return (
    <>
      <BlogTitle title="What is Design Automation?" description="Automatise your design process and render images with different data unlimited times without manual editing." />
      
      <div className="sectionBlog">
        Let's start using <strong>Design Automation</strong> as a new term since nevertheless of importance of automatise repetitive tasks in the design process we don't have too many products that would speed up the whole process and generate the content based on the changing data so we have to update the designs manualy all the time. Let's change it with Moqop.
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