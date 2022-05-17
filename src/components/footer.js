import Link from 'next/link'

export default function Footer() {
  return (
    <section className='my-32'>
      <div className="block md:flex items-center wrapper h-48 justify-center text-center font-medium opacity-50 leading-6">
        <div className="">
          <span>
            Made with 
            <svg className='inline w-16 m-4'width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6664 5.41641C16.2078 4.58281 13.3328 1.79141 10 5.83281C6.5 1.79141 3.7914 4.58281 3.3336 5.41641C2.5 6.95781 3 9.29141 4.1672 10.4164L10.0008 16.25L15.8344 10.4164C17 9.29141 17.5 6.95861 16.6664 5.41641H16.6664Z" fill="black"/>
            </svg>
            by&nbsp;
          </span>
          <Link href="https://milangladis.com">
            <a target="_blank" className="mr-8">Milan Gladis</a>
          </Link>
        </div>
        <div className='flex flex-wrap justify-center'>
          <div className="sm:visible float-left invisible">·</div>
          <Link href="/blog">
            <a className="mx-8">Blog</a>
          </Link>
          ·
          <Link href="/open-startup">
            <a className="mx-8">Open Startup</a>
          </Link>
          ·
          <Link href="/updates">
            <a className="mx-8">Updates</a>
          </Link>
          ·
          <Link href="mailto:hello@moqop.com">
            <a className="ml-8" target="_blank">Feedback</a>
          </Link>
        </div>
      </div>

      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-N49CQ5CWG8'
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N49CQ5CWG8', {
              page_path: window.location.pathname,
            });

            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:1507737,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `,
        }}
      />
    </section>
  )
}