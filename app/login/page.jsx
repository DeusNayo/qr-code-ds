function LoginScreen() {
  return (
    <div className="flex flex-col items-center  h-screen">
      <div className="m-12">
      <img src="/logo.png" alt="" height="200px" width="200px"/>
      </div>
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form className="flex flex-col">
          <label className="mb-4 text-black">
            Email
            <input placeholder="Username/Email" type="email" className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:shadow-md mt-2" />
          </label>
          <label className="mb-4 text-black">
            Password
            <input placeholder="Password" type="password" className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:shadow-md mt-2" />
          </label>
          <button type="submit" className="block w-full px-4 py-2 mt-4 text-sm font-semibold text-center text-white transition-colors duration-300 bg-blue rounded-lg hover:bg-[#3E74C5] focus:outline-none focus:shadow-outline-green">Log in</button>
        </form>
        <p className="mr-2 text-black flex justify-center pt-6">Don't have an account?</p>
        <div className="flex justify-center items-center">
          <button className="block w-full px-4 py-2 mt-4 text-sm font-semibold text-center text-white transition-colors duration-300 bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:shadow-outline-green">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
