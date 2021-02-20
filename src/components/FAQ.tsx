import React from 'react'

interface FAQProps {}

export const FAQ: React.FC<FAQProps> = ({}) => {
  return (
    <section id="faq" className="pb-24">
      <div className="px-8 mx-auto max-w-7xl lg:px-16">
        <h2 className="mb-4 text-xl font-bold md:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="text-gray-600 dark:text-gray-200 grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-16">
          <div>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900 dark:text-white">
              Lorem ipsum dolor.
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              malesuada bibendum nunc, nec finibus dolor sodales et. In interdum
              commodo nulla, eu condimentum lorem efficitur sed. Aenean pharetra
              auctor ante.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900 dark:text-white">
              Lorem ipsum dolor.
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
              massa lectus. Aenean gravida sapien quis ante hendrerit dictum.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Cras tempus tortor eget lacus pulvinar, ac
              maximus est molestie. Suspendisse non iaculis ipsum.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900 dark:text-white">
              Lorem ipsum dolor.
            </h5>
            <p>
              Morbi consequat lectus ac magna molestie pretium. Fusce vitae odio
              a augue sodales ultrices a eget odio. Proin a ultrices nisl. Nam
              ultricies felis in venenatis pharetra. Morbi vel purus rhoncus
              nibh congue mattis. Morbi auctor elit et massa pharetra, eu
              interdum eros aliquam.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900 dark:text-white">
              Lorem ipsum dolor.
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ligula risus, volutpat ut orci id, euismod rhoncus dolor. Maecenas
              tincidunt lacus vel mattis ornare. In rhoncus placerat tortor ut
              hendrerit. Praesent placerat pulvinar nibh non molestie.
            </p>
          </div>
          <div>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900 dark:text-white">
              Lorem ipsum dolor.
            </h5>
            <p>
              Etiam dignissim, lorem ac sollicitudin sagittis, risus risus
              pellentesque ex, id cursus velit quam at nisi. Sed tincidunt ipsum
              a eros pretium, id tincidunt mi auctor. Etiam suscipit eget justo
              ac molestie. Cras nec tellus ut tellus placerat fermentum at nec
              nunc.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900 dark:text-white">
              Lorem ipsum dolor.
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum rhoncus erat eget velit viverra iaculis. Fusce ac
              vestibulum urna. Aliquam aliquam molestie leo, quis pulvinar nisi.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900 dark:text-white">
              Lorem ipsum dolor.
            </h5>
            <p>
              Sed hendrerit mi congue metus commodo hendrerit. Fusce feugiat
              elementum accumsan. Sed sagittis facilisis velit, nec molestie
              nibh maximus in. Interdum et malesuada fames ac ante ipsum primis
              in faucibus.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900 dark:text-white">
              Lorem ipsum dolor.
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              feugiat interdum neque ut mollis. Suspendisse cursus venenatis
              ante, quis dictum nulla vestibulum et.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
