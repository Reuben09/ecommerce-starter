export default function HeroSection(){
    return(
        <div>
        <div
        className="w-full h-screen mb-20" style={{
            backgroundImage:
            "url(https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-screen flex flex-col justify-center items-center"style={{backgroundColor: " rgba(75, 85, 99, var(--tw-bg-opacity))",}}>
          <p className="text-5xl text-white">
            Item
          </p>
          <p className="text-5xl text-white">
            Hub
          </p>
          <p className="text-center text-white">
            Users of the highest converting shopify theme deserve a lifestyle to
            match!
          </p>
          <div className="mt-4 grid lg:grid-cols-2 sm:grid-cols-1 gap-2">
          <button class="bg-gray-800 text-white font-bold py-1 px-8 mx-4 rounded">
            Shop Now
          </button>
            <button class="bg-gray-800 text-white font-bold py-2 px-8 mx-4 rounded">
          Learn More
           </button>
        </div>
      </div>
      </div>
      </div>
    )
}