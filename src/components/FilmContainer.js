import React,{useState} from 'react'




const FilmContainer = ({inspected,setİnspected,item}) => {


  const [img,setİmg] = useState(undefined)

   

   fetch(`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`)
   .then((response) => (setİmg(response.url)))
  

  if(window.location == '/'){
    return <>

    {item.cover_edition_key ? <div  className='film_component_container' onClick={
      ()=>{
        setİnspected(item)
        window.location='/inspection'
      }
    }>
      <div className='film_cover'>
        <img src={img} alt="" />
      </div>
      <div className='film_details'>
        <span >{item.title}</span>
      </div>
    </div> :  <span className='selam'>selam</span> }
    


</>
}

  else{
    return <>
    
    
    {item.cover_edition_key ? <div  className='film_component_container1' onClick={
      ()=>{
        if(window.location = '/'){
          setİnspected(item)
          window.location='/inspection'
          
        }

        
        
      }
    }>
      <div className='film_cover1'>
        <img src={img} alt="" />
      </div>
      <div className='film_details1'>
        <span >{item.title}</span>
      </div>
    </div> :  <span className='selam'>selam</span> }
    
    </>
  }

  }
  

export default FilmContainer