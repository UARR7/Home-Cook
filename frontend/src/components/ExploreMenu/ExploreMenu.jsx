import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <hr></hr>
          <h1>OUR MENU</h1>
          <p className='explore-menu-text'>Savor the authentic taste of South Indian cuisine crafted with love by our talented home cooks! Our menu is a celebration of traditional recipes passed down through generations, from crispy dosas to flavorful biryanis. Every dish is made with the freshest ingredients, bringing the warmth of a home-cooked meal right to your table. Explore regional specialties, customize your favorites, and experience the true essence of South Indian flavors. Let our home cooks treat you to a culinary journey like no other!</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='' />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
