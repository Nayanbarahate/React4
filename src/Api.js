import React, { createContext, useState } from 'react'
export const nayan=createContext()

export default function Api(props) {
    const [data,setData]=useState([
        {

            "Id": "1",
            "imageurl":"https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/golden-globes-1483816829.jpg?crop=1.00xw:0.752xh;0,0.0414xh&resize=1200:*",
            "title":"Golden Globe Awards",
            "description":"The Golden Globe Awards are accolades bestowed by the 87 members of the Hollywood Foreign Press Association beginning in January 1944, recognizing excellence in both American and international film and television.",
            "category": "Hollywood",
            "date":"Jan 10 2022",
            "likes":"10",
            "details":"The Golden Globes awards ceremony began in 1944. Members of the Hollywood Foreign Press Association present awards for achievement in film and television.The Power of the Dog is a 2021 Western psychological drama film[6][7][8] written and directed by Jane Campion, based on the 1967 novel of the same name by Thomas Savage. The film stars Benedict Cumberbatch, Kirsten Dunst, Jesse Plemons, and Kodi Smit-McPhee. Shot mostly across rural Otago, New Zealand"
    

    },
    {
        "Id": "2",
        "imageurl":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShoWb4WDDvS4t6tZ13tOJ-zdnrJiIoB4yTswLx8gLjZTuYwPte",
        "title":"Brahmāstra",
        "description":"Brahmāstra, is an upcoming Indian Hindi-language superhero film written and directed by Ayan Mukerji, and produced by Karan Johar. It stars Amitabh Bachchan, Ranbir Kapoor, Alia Bhatt, Mouni Roy and Nagarjuna Akkineni",
        "category": "Bollywood",
        "date":"December 16 2021",
        "likes":"10",
        "details":"BRAHMASTRA - the Trilogy, is a 3-part film franchise and the beginning of India's first original universe - the Astraverse. It is a new original cinematic universe inspired by deeply rooted concepts and tales in Indian mythology but set in the modern world, with epic storytelling of fantasy, adventure, good vs evil, love and hope; all told using cutting edge technology and never-seen-before visual spectacles.",
        "detailsimage":"https://imageory.clapnumber.com/albums/large/aaadum_1570386312"

    }
])
  return (
    <div>
      <nayan.Provider value={[data,setData]}>{props.children} </nayan.Provider>
     
      
    </div>
  )
}
