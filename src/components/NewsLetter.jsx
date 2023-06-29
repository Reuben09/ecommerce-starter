
function NewsLetter() {
    return (
      <section className="flex flex-col lg:px-8 xs:px-4 align-center justify-center"
      >
        <form>
          <h2 className="mt-40 text-center text mb-1 text-2xl" 
          >
            {" "}
            Subscribe to our newsletter
          </h2>
          <p className="text-center mb-4">
            Get 10% off your first purchase and stay on top of the latest in
            Debutify, it's win-win-WIN!
          </p>
          <div className="flex justify-center flex-col align-center">
          <div className="mb-4 flex justify-center align-center">
          <input class="shadow appearance-none border-0 rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Full Name" />
          </div>
          <div className="mb-4 flex justify-center align-center">
          <input class="shadow appearance-none border-none rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
          </div>
          </div>
          <div className="text-center w-full mb-4">
             <button class="bg-gray-800 text-white font-bold py-2 px-8 mx-4 rounded">
               Subcribe
              </button>
          </div>
        </form>
      </section>
    );
  }

  export default NewsLetter;
