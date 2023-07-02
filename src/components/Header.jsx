import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { getCategories } from '../services'

/**
   @todo: header can change categories to other pages 
**/

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
    }, [])


  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mt-8 w-full inline-block py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-semibold text-4xl text-slate-500 opacity-80">
              Owl And Sakura
            </span>
          </Link>
        </div>

        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer text-slate-400 opacity-80">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header;