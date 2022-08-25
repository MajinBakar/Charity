
import Product from '../Components/Product'
import affiliation from '../data/affiliation.json'

export default function Home() {

  const jsonMapper =  affiliation.map(item =>
    <Product link={item.link} img={item.img} />
  );
  return (
    <div style={{ display:'flex' , width:'100%', flexDirection:'column'}}>
      <h1 style={{ color: 'darkgreen'}}>
         Assalumu Alaykoum, Bienvenue sur Charity
      </h1>
      <div style={{display:'flex', alignItems:'center'}}>
       {jsonMapper}
       </div>
    </div>
  )
}
