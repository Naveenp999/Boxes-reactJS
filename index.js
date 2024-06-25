const Box = props => {
  const {className, content} = props
  return (
    <div className={`${className} box`}>
      <p className='description'>{content}</p>
    </div>
  )
}

const element = (
  <div className='container'>
    <h1 className='heading'>Boxes</h1>
    <div className='boxes-container'>
      <Box className='box_1' content='Small' />
      <Box className='box_2' content='Medium' />
      <Box className='box_3' content='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
