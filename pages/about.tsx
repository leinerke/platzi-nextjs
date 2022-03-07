import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from '@components/Layout/Layout';
import { log } from 'util';

const About = () => {
  const [avoFacts, setAvoFacts] = useState<TFacts[]>([]);

  useEffect(() => {
    fetch('/api/avo/facts')
      .then(res => res.json())
      .then(({ data }: TAPIFactsResponse) => setAvoFacts(data));
  }, []);

  return (
    <Layout>
      <section>
        <h1 className="text-3xl text-center font-bold mb-8">
          13 Surprising Facts About Avocados
        </h1>
        <div className="w-[600px] max-w-full mx-auto mb-8">
          <figure>
            <Image
              src="/images/avocados.jpg"
              alt="Avocados on a table"
              width={600}
              height={450}
              layout="responsive"
            />
            <figcaption className="mt-2 text-gray-500 text-center text-sm font-semibold">
              Originally from{' '}
              <a
                target="_blank"
                href="https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/"
                className="text-sky-500"
              >
                Taste of Home
              </a>
            </figcaption>
          </figure>
        </div>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-12">
          {avoFacts.map(({ title, content }) => (
            <li
              className={`
              relative 
              before:absolute before:-top-12 before:-left-1 before:text-[#cecece] before:text-[5em] before:font-bold
              `}
              key={title}
            >
              <h3 className="mb-8 ml-12">{title}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      </section>

      <style jsx>{`
        ol {
          // Look ma! A CSS Counter :)
          // https://moderncss.dev/totally-custom-list-styles/
          counter-reset: orderedlist;
        }
        li::before {
          counter-increment: orderedlist;
          content: counter(orderedlist);
        }
      `}</style>
    </Layout>
  );
};

export default About;
