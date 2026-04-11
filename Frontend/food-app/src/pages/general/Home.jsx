import React from 'react'
import './Home.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {

    const videos = [
    {
      id: 1,
      videoSrc: "https://ik.imagekit.io/ylnypigcz/food_video_ExXQbvEBb.mp4",
      description: 'Delicious pizza with fresh ingredients and authentic Italian flavors. Made with love in our traditional wood-fired oven.',
      storeName: 'Mario\'s Pizzeria'
    },
    {
      id: 2,
      videoSrc:"https://ik.imagekit.io/ylnypigcz/food_video_ExXQbvEBb.mp4",
      description: 'Fresh sushi rolls prepared by our master chefs using the finest fish and vegetables. Experience authentic Japanese cuisine.',
      storeName: 'Tokyo Sushi Bar'
    },
    {
      id: 3,
      videoSrc:"https://ik.imagekit.io/ylnypigcz/food_video_ExXQbvEBb.mp4",
      description: 'Gourmet burgers with premium beef patties, artisanal buns, and house-made sauces. The ultimate comfort food experience.',
      storeName: 'Burger Heaven'
    }
  ]
  
  return (
    <div className="home-container">
      <div className="video-scroll-container">
        {videos.map((video) => (
          <div key={video.id} className="video-item">
            <video
              className="video-player"
              src={video.videoSrc}
              muted
              loop
              autoPlay
              playsInline
            />
            <div className="video-overlay">
              <div className="video-content">
                <p className="video-description">
                  {video.description}
                </p>
                <button className="visit-store-btn">
                  Visit {video.storeName}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
