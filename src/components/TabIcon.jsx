import React from 'react'
import { Helmet } from 'react-helmet'

function TabIcon({ icon, title }) {
  return (
    <>
     <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href={icon}
        />
        <title>{title}</title>
      </Helmet>   
    </>
  )
}

export default TabIcon