import React from 'react'
import { excerpt } from '../helpers/helpers' 
import Link from 'next/link';


const BlogCard = ({card}) => {
    let [featuredmedia, setembed] = React.useState( {
      medium: {
      file: "480417c4-47d0-36fa-81fe-2f8768810196-300x200.jpg",
      width: 300,
      height: 200,
      mime_type: "image/jpeg",
      source_url: "http://ideas-digitales.tk/portafoliocms/wp-content/uploads/2021/03/imagen-posts.jpg"
      },
      large: {
      file: "480417c4-47d0-36fa-81fe-2f8768810196-1024x682.jpg",
      width: 1024,
      height: 682,
      mime_type: "image/jpeg",
      source_url: "http://ideas-digitales.tk/portafoliocms/wp-content/uploads/2021/03/480417c4-47d0-36fa-81fe-2f8768810196-1024x682.jpg"
      },
      thumbnail: {
      file: "480417c4-47d0-36fa-81fe-2f8768810196-150x150.jpg",
      width: 150,
      height: 150,
      mime_type: "image/jpeg",
      source_url: "http://ideas-digitales.tk/portafoliocms/wp-content/uploads/2021/03/480417c4-47d0-36fa-81fe-2f8768810196-150x150.jpg"
      },
      medium_large: {
      file: "480417c4-47d0-36fa-81fe-2f8768810196-768x512.jpg",
      width: 768,
      height: 512,
      mime_type: "image/jpeg",
      source_url: "http://ideas-digitales.tk/portafoliocms/wp-content/uploads/2021/03/480417c4-47d0-36fa-81fe-2f8768810196-768x512.jpg"
      },
      full: {
      file: "480417c4-47d0-36fa-81fe-2f8768810196.jpg",
      width: 1217,
      height: 811,
      mime_type: "image/jpeg",
      source_url: "http://ideas-digitales.tk/portafoliocms/wp-content/uploads/2021/03/480417c4-47d0-36fa-81fe-2f8768810196.jpg"
      }
      })
    React.useEffect(() => {
    if (card._embedded['wp:featuredmedia']) {
      // console.log(card._embedded['wp:featuredmedia'][0].media_details);
        setembed(card._embedded['wp:featuredmedia'][0].media_details.sizes)
    }else{
     
    }
  }, [card])

let slug =card.slug
let excerptText =excerpt(card.excerpt.rendered, 100)

    return (
        <div className="col-md-6 col-lg-4">
         
            <div className="card " >
  <img 
  src={featuredmedia.medium.source_url}
  width={featuredmedia.medium.width}
  height={featuredmedia.medium.height}  
  className="card-img-top" 
  alt={card.title.rendered} />
  <div className="card-body">
    <h5 className="card-title"  dangerouslySetInnerHTML={{__html:card.title.rendered}}></h5>
    <div className="card-text" ><div dangerouslySetInnerHTML={{__html:excerptText}}></div><Link  href={`/blog/${slug}`} ><a className="read-more">Leer más</a></Link> </div>
    
  </div>
</div>

        </div>
        
    )
}

export default BlogCard;
