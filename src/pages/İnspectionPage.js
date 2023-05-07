import React,{useState} from 'react'
import FilmContainer from '../components/FilmContainer'

const İnspectionPage = ({inspected,setİnspected}) => {

    const [img,setİmg] = useState('')

    const [similar,setSimilar] = useState([])
    
    const url = `https://openlibrary.org/authors/${inspected.author_key}/works.json`


    fetch(url).then((response)=>response.json())
    .then((data) => setSimilar(data.entries))

    fetch(`https://covers.openlibrary.org/a/olid/${inspected.author_key}-M.jpg`)
    .then((response) => {if(Array.isArray(response)){
        
        setİmg(response.url[0])
        
    }

else{
    setİmg(response.url)
    
}})

    return <>
    <div className='inspectionPage_container'>

        <div  className='inspection_upper'>

            <FilmContainer item={inspected} setİnspected={setİnspected} />
            <div style={{
                backgroundColor:'#576F72',
                opacity:'0.8',
                borderRadius:'10px',
                boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                height:'300px',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                width:'900px',
                padding:'50px',
                
                

            }}>
                <img style={{
                    height:'300px',
                    width:'200px',
                    borderRadius:'0px',
                    marginRight:'600px',
                    borderTopLeftRadius:'6px',
                    borderTopRightRadius:'6px',
                    

                }}  src= 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAMFBMVEXk5ueutLfEyMrn6eqrsbSyt7rh4+S3vL+nrrHBxcjIzM7R1NbN0NLd3+HY2927wMLuh9A5AAAC30lEQVR4nO2a25arIAxA0XAVwf//2wE6p/XMWCGUoLMW+6lv3SskURIZGwwGg8FgMBgMBoPB3wYAmIzEHxcpMLduSkwBoYyV7AIRkLPQevoH11ytvQMCXr0MXiZGdvQAt/FfDsmDL93iAet0LBE9RKdwgPl9GDu07aABUr0NxHc4lg4aOYkeGpCXCIdCrAFviuNnNFZKDViKJIKGI7RwhRKhp9MFA0SpBGGGgj1tFL3OpDwUwcLQBAPW4qwgDAYiK5IFTWZ4VCiCBoUFGKSF9gQagJSYJor8dIgyfaDaSyArJCHbWxi0BEViKLQFRa3iukWyaJ+eEi0xTdstLFR7C3yJEFiUv+CQxgIvQWGBrxGC7LxHpVZ0LYJryT06+D2eZvd4sjPASpC8hd/jjQ/99juRvIPf4yaAuiAGC4IKSaBuiDPRdRkXDKpQMCjv4pTTnFtMUTATJdLBVuF0jXjyeotJY5EGvUQgdyhdJtC3mMazzGZCdVvUxC3NoQefupzG0+N4YzX33FglD7kI/YoI11rZK9aZcZNp0iZTXLbJTB7PZe41W930/9J5b7/xTu6kegiEv7fLJuLickc4mM1YH2XoHZhflOD6TaVqHlOE9IAg1IUKf3TWOR/lImZP4wHgYmlmDHZBMe1FAOz2vm0fi3C1Nm1iAKuoGCjFtXszD2ALMgx7jzafIQCzVXF4ekwN4gHu4LGF9fjwjQPY/KlDRH/00gHuo8PYUx8O5PX4FG5qJc7fL7EalR+plNw8MBo197XsJycVoEdMslle7uBYDQoJ7CW68FJcAWK2AkvL6vgPUS7RsE/8hBdvK2qWU+UahV0UNkKJoHH5eSSLsjOpWE3hNAq6Rs0eBGlRstQjdogaPp8V1KEoyQzEeLcenYuFpC2QB7nxNH1uJjJHQtyxnmQeatTN4kGmSmq+LKixOE8M3yM5c0tOWDXvwmn7BGvmLmSGs9CHU4fBYDAY/B2+AHCKJT2UsNePAAAAAElFTkSuQmCC' className='img31' />
                <span style={{
                    backgroundColor:'grey',
                    padding:'10px',
                    overflow:'hidden',
                    borderBottomLeftRadius:'6px',
                    borderBottomRightRadius:'6px',
                    width:'180px',
                    marginRight:'600px',
                    color:'white',
                    fontFamily:'Poppins',
                    fontWeight:'bolder'
                   

                }}>{inspected.author_name.length > 1 ? `Yazarlar:${inspected.author_name}` : `Yazar:${inspected.author_name}`}</span>

                

            </div>


            <div style={{
                fontSize:'larger',
                fontWeight:'bold',
                position:'relative',
                right:'550px',
                color:'#000',
                width:'300px',
                height:'250px',
                textAlign:'left',
                padding:'25px',
                display:'flex',
                flexDirection:'column',
                gap:'50px',
                overflow:'hidden'
                
            }} >

                <span  style={{
                    overflow:'hidden'
                }}>İlk basım tarihi :   {inspected.first_publish_year}</span>
                <span style={{
                    overflow:'hidden'
                }}  >Ortalama sayfa sayısı  : {inspected.number_of_pages_median}</span>
                <span  style={{
                    overflow:'hidden'
                }}>{inspected.publisher.length > 1 ? `Yayımcı : ${inspected.publisher[0]}`  : inspected.publisher}</span>
                <span  style={{
                    overflow:'hidden'
                }}>Kitabın Türü :   {inspected.subject ? inspected.subject[0] : '  bilgi alınamadı'} </span>


            </div>
            
            
        </div>


        <div  style={{
            width:'100%',
            height:'500px',
            display:'flex',
            flexDirection:'row',
            gap:'20px',
            alignItems:'center',
            justifyContent:'center',
            textAlign:'center'
        }} className='inspection_lower'>
            
            {similar ? similar.map((item)=>{
                console.log(item)
                return (
                    <>
                        <FilmContainer item={item}/>
                    </>
                )
            }) : '' }
        </div>

        
    </div>
            
    </>

    }

export default İnspectionPage