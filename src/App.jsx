import React from 'react'
import Card from './Components/Card'


const App = () => {
  
  const data = [
    {name: 'riyan', age: 22, image: 'https://images.unsplash.com/photo-1536191739176-1a9c3f929285?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXJ0fGVufDB8fDB8fHww'},
    {name: 'kainat', age: 20, image: 'https://media.istockphoto.com/id/1477871401/photo/portrait-of-happy-young-businesswoman-arms-crossed-with-looking-at-camera-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yv0Xx4Sl54NsId-FNpm8Bd2YlM56gCK3VBmmx-CR_uw='},
    {name: 'shadab', age: 22, image: 'https://media.istockphoto.com/id/1090837964/photo/handsome-man-laughing.webp?a=1&b=1&s=612x612&w=0&k=20&c=JVKjr84ZqVfPvWjsTwkFKAvsGZP47aQqpcr1lfiZQa0='},
    {name: 'nikhat',age: 20,image: 'https://media.istockphoto.com/id/1345109915/photo/young-beautiful-woman-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=aSsoOe4Jr1EchEp4eoso_lNGKJ9QT8U_FnPRIcJJEa0='}
  ]
  
  return (
    <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
  {data.map((item, index) => (
    <Card key={index} image={item.image} name={item.name} age={item.age} />
  ))}
</div>

  )
}

export default App
