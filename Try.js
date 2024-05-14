

import { useState } from "react"
import styles from "./Try.module.css"
import './pexels-philippedonn-1133957.jpg'

const Try = () => {

  const [form, setForm] = useState({
    name: " wer", city: "tyu ",
    pin: "123456 ",
    artwork: {
      title: "Photo",
      place: "Delhi",
      image: 'https://i.imgur.com/Sd1AgUOm.jpg width="250px" height="215px"',
link:'https://in.search.yahoo.com/?fr2=inr'
    }
  });
  const handleNameChange = (e) => {
    setForm({
      ...form, name: e.target.value

    })
  }
  const handleCityChange = (e) => {
    setForm({
      ...form, city: e.target.value

    })
  }
  const handlePinChange = (e) => {
    setForm({
      ...form, pin: e.target.value

    })
  }
  const handleTitleChange = (e) => {
    setForm({
      ...form, artwork: {
        ...form.artwork,
        title: e.target.value
      }

    })
  }
  const handlePlaceChange = (e) => {
    setForm({
      ...form, artwork: {
        ...form.artwork,
        place: e.target.value
      }

    })
  }
  const handleImageChange = (e) => {
    setForm({
      ...form, artwork: {
        ...form.artwork,
        image: e.target.value
      }

    })
  }
  const handleLinkChange = (e) => {
    setForm({
      ...form, artwork: {
        ...form.artwork,
        link: e.target.value
      }

    })
  }
  return (
    <div className={styles.a1}>
      <label>Name :
        <input value={form.name} onChange={handleNameChange} className={styles.c}
        ></input>
      </label>


      <label>City :
        <input value={form.city} onChange={handleCityChange} className={styles.b}
        ></input>

      </label>


      <label>Pin :
        <input value={form.pin} onChange={handlePinChange} className={styles.a}
        ></input><br></br>
      </label>
      <label>Title :
        <input value={form.artwork.title} onChange={handleTitleChange} className={styles.a}
        ></input>
      </label>
      <label>Place :
        <input value={form.artwork.place} onChange={handlePlaceChange} className={styles.a}
        ></input>
      </label>
      <label>Image :
        <input value={form.artwork.image} onChange={handleImageChange} 
        ></input>
      </label>
      <label>Link :
        <input value={form.artwork.link} onChange={handleLinkChange} 
        ></input>
      </label>
      <h1 className={styles.d}>  {form.name}{" "}{form.city}{"  "}{form.pin}</h1>
      {form.artwork.place} {form.artwork.title}
<img src={form.artwork.image}/>
<a href={form.artwork.link}>Go to</a>

    </div>
  )
}

export default Try