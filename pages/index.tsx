import Layout from '../sections/Layout'

export default function Home() {
  return (
    <>
      <Layout>
        {/* Hero Section  */}

        <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
          {/* Headlines */}

          <h2 className="text-3xl w-[740px] text-gray-800 text-center leading-normal sm:text-6xl font-bold capitalize dark:text-gray-100 ">Building applications for Web3 democratization</h2>
          <p className="text-xl sm:text-md text-center text-gray-500 dark:text-gray-200">We help for onboarding of new comers</p>
          {/* CTA */}
          <a className="inline-block px-5 py-3 rounded-lg hover:bg-indigo-600 transition duration-300 shadow-lg bg-indigo-500 text-white capitalize tracking-wider font-semibold text-sm sm:text-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 whitespace-nowrap"
            href="https://irruption-lab.gitbook.io/interpool" target="_blank" rel="noreferrer"
          >
            Documentation
          </a>
        </section>
      </Layout>
    </>
  )
}
