import React from "react";
import { MagnifyingGlass } from  'react-loader-spinner'



export const Loader = () => (<MagnifyingGlass
  // wrapperClassName = {css.loader}
  visible={true}
  height="50"
  width="50"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color='#e15b64'

  
/>

)