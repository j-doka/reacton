import Layout from '../components/layout.jsx'
import Reactionbox from '../components/reactionbox.jsx'
import useWindowDimensions from '../hooks/useWindowDimensions'


let announce = {
  textAlign: 'center',
  padding: '1.5rem',
  borderRadius: '4px',
  backgroundColor: '#2a2a2a',
  display: 'flex',
  justifyContent: 'center',
  
}

let container = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    transition: 'all 0.2s ease 0s',
}

const IndexPage = () => {
  const { windowWidth } = useWindowDimensions();
  const bool = Boolean(windowWidth >= 600)
  return (
    <>{ bool ? 
      <Layout PageTitle='Reacton'>
        <Reactionbox>
        </Reactionbox>
      </Layout> : 
      <div style={container}>
        <div style={announce}>
          <p>Stand up and go to your computer...</p>
        </div>
      </div>
      }
    </>
  )
}

export default IndexPage