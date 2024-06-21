import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  
  return (
    <div >
      {/* <Collections/> */}

      <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div class="absolute inset-0">
    <img src="https://t3.ftcdn.net/jpg/01/17/33/22/360_F_117332203_ekwDZkViF6M3itApEFRIH4844XjJ7zEb.jpg " alt="Background Image" class="object-cover object-center w-full h-full" />
    <div class="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 class="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome E-commerce Website</h1>
    <p class="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
    <Link to="/product">
    <a href="#" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
    </Link>
  </div>
</div>
{/* -------------------------------------------------------------------------------------------------------------------------- */}
<div class="flex h-screen justify-center items-center dark:bg-slate-800">
    <div class="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
        <div class="text-center ">
            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl">
                <span class="block xl:inline"><span class="mb-1 block">Welcome to</span>
                <span class="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                   E-commerce Website
                </span>
                </span>
                <div class="mt-2">Find Everything You Need
                    <span class="relative mt-3 whitespace-nowrap text-blue-600"><svg aria-hidden="true" viewBox="0 0 418 42"
                        class="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
                        preserveAspectRatio="none">
                        <path
                            d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
                        </path>
                    </svg>
                    <span class="relative">in One Place.</span>
                    </span>
                </div>
            </h1>
            <p class="mx-auto mt-3 max-w-xl text-lg text-gray-500 dark:text-slate-400 sm:mt-5 md:mt-5">
                Discover a wide variety of products that suit your needs. From electronics to fashion, we have everything
                to make your shopping experience amazing.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div class="rounded-md shadow">
                <Link to="/product">
                    <a class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                        href="#">Start Shopping Now 🛒
                    </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>

{/* --------------------------------------------------------------------------------------------------- */}
<footer class="flex flex-col space-y-10 justify-center m-10" >

    <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <a class="hover:text-gray-900" href="#">Home</a>
        <a class="hover:text-gray-900" href="#">About</a>
        <a class="hover:text-gray-900" href="#">Services</a>
        <a class="hover:text-gray-900" href="#">Media</a>
        <a class="hover:text-gray-900" href="#">Gallery</a>
        <a class="hover:text-gray-900" href="#">Contact</a>
    </nav>

    <div class="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
    </div>
    <p class="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
</footer>

    </div>
  )
}

export default Home
