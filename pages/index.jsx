import Layout from '../components/layout.jsx'
import Reactionbox from '../components/reactionbox.jsx'
import useWindowDimensions from '../hooks/useWindowDimensions'

const IndexPage = () => {
  const { windowWidth } = useWindowDimensions();
  const bool = Boolean(windowWidth >= 600)
  return (
    <>{ bool ? 
      <Layout PageTitle='Reacton'>
        <Reactionbox>
        </Reactionbox>
      </Layout> : 
      <div className='flex flex-col items-center justify-center'>
        <div className='text-center bg-[#2a2a2a] rounded-md p-6'>
          <p>Stand up and go to your computer...</p>
        </div>
      </div>
      }
    </>
  )
}

export default IndexPage