import React ,{useState} from 'react'
import { GiOpenBook } from 'react-icons/gi';
import { HiSearch } from 'react-icons/hi';
import FilmContainer from '../components/FilmContainer';



const Homepage = ({inspected,setİnspected}) => {
  const [yazar,setYazar] = useState(undefined)
  const [value,setValue] = useState('')
  const [contentValue,setContentValue] = useState(undefined)
  const [mode,setMode] = useState('Kitap Ara')

  const authorUrl = `https://openlibrary.org/search/authors.json?q=${value.includes(' ') ? 
  value.replace(' ', '%')
  :  value}&limit=10`
  
  return (

    
    
  <div className='Homepage_container'>

    

    <div className='Homepage_header'>
      <div className='homepage_header_left'>
        <div className='header_icon ' onClick={()=>{
          setYazar('')
          setValue('')
          setContentValue('')
        }}  > <GiOpenBook/> </div>
        <div className='header_text' onClick={()=>{
          setYazar('')
          setValue('')
          setContentValue('')
        }}>Bookify</div>
      </div>

      <div className='header_right'>
          <button>Benim Hakkımda</button>
          <button>Site Hakkında</button>
          
      </div>
    </div>

    <div className='content_container'>
        <div className='search_bar'>

        <button onClick={()=>{
          mode == 'Kitap Ara' ? setMode('Yazar Ara') : setMode('Kitap Ara')
        }}  style={{
          width:'100px',
          height:'45px',
          border:'none',
          overflow:'hidden',
          textAlign:'center',
          background: mode== 'Kitap Ara' ? '#C9F4AA' : '#009FBD' ,
          color:mode=='Kitap Ara' ? '#393E46' : '#fff',
          fontFamily:'Poppins',
          borderRadius:'100px',
          transition:'0.6s all',
          fontSize:'16px',
          
        }}>{mode}</button>

          <input type="text" value={value} onChange={(e)=>{
            setValue(e.target.value)
          }} />

          

          <button className='arama_btn' onClick={()=>{

            if(mode == 'Kitap Ara'){
              fetch(`https://openlibrary.org/search.json?title=${value}`)
            .then((response)=>response.json())
            .then(data => (setContentValue(data.docs)))

            setValue('')
            } 

            else{
              fetch(authorUrl)
              .then((response) => response.json())
              .then((data) => (setYazar(data.docs),console.log(data.docs)))
              setValue('')
            }
            
            

            
          }}><HiSearch/></button>
        </div>


        <div  style={{
          backgroundColor: contentValue && !(mode=='Yazar Ara')?  '#B8B0B0' :  'transparent',
          overflow:contentValue && !(mode=='Yazar Ara') ? 'auto' : 'hidden',

        }}   className='search_results'   >
          
            {mode=='Kitap Ara' ? contentValue ? contentValue.map((item)=>
              <FilmContainer inspected={inspected} setİnspected={setİnspected} item={item}  />
            ) : <div className='poppins31' style={{
              backgroundColor:'transparent',
              width:'100%',
              height:'100%',
              color:'#C9F4AA',
              fontWeight:'bolder',
              fontSize:'100px',
              marginTop:'100px',
              transition:'0.6s all '
              
            }}>

              İstediğiniz kitabı saniyeler içerisinde aratın.

              </div> : yazar ?  <>
              
              
              <div>
                
                <span style={{
                  backgroundColor:'transparent',
                  width:'100%',
                  height:'100%',
                  color:'#009FBD',
                  fontWeight:'bolder',
                  fontSize:'100px',
                  marginTop:'100px',
                  transition:'0.6s all ',
                  fontFamily:'Poppins'
                }}  >Bulunan Yazarlar :</span>
                <div  style={{
                        display:'flex',
                        flexDirection:'column',
                        backgroundColor:'#DBDFEA',
                        height:'800px',
                        width:'1300px',
                        borderRadius:'10px',
                        fontSize:'20px',
                        fontFamily:'Poppins',
                        gap:'50px',
                        justifyContent:'center',
                        alignItems:'flex-start',
                        padding:'20px',
                        transition:'0.6 all'
                        
                        
                      }}>{yazar.map((item)=>{
                  return <>
                      
                        <div style={{
                          display:'flex',
                          flexDirection:'row',
                          gap:'10px',
                          transition:'0.6 all',

                        }}>
                          <span style={{
                            paddingLeft:'50px',
                            fontFamily:'Poppins',
                            transition:'0.6 all',
                          }}  >{item.name} :  ünlü eseri ({(item.top_work ? item.top_work.length : 32) > 35 ? 'bulunamadı' : item.top_work}
                          )  / doğum-ölüm tarihi ({item.birth_date ? item.birth_date : 'bilinmiyor'}-{item.death_date ? item.death_date : 'bilinmiyor'})</span>
                          
                        </div>
                        


                     
                    
                    </>
                })}</div>
              
              </div>
              
              
              
              
              
              
              
              
              
              </> : <>
              
              <div className='poppins31' style={{
              backgroundColor:'transparent',
              width:'100%',
              height:'100%',
              color:'#009FBD',
              fontWeight:'bolder',
              fontSize:'100px',
              marginTop:'100px',
              transition:'0.6s all '
              
            }}>

              Merak ettiğiniz yazarlar ile alakalı bilgi edinin.

              </div>
              
              </>  }
        </div>

      </div>

      

  </div>

  )
}

export default Homepage