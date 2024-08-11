import HomeLayout from "../components/layouts/HomeLayout";

const Home = () => {
  return (
    <HomeLayout>
      <div className='flex items-center justify-center h-screen bg-gradient-to-bl from-blue-2 to-indigo-400'>
        <div>
          <h1 className='text-center text-5xl font-bold mb-5'>
            Welcome to our chat
          </h1>

          <p className='text-center text-xl font-semibold text-grey-1'>
            Please, choose the dialog to start chatting
          </p>
        </div>
      </div>
    </HomeLayout>
  )
}

export default Home;
