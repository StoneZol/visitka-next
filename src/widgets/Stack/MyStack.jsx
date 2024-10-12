import '@/widgets/Stack/MyStack.scss'

import Marquee from 'react-fast-marquee';
import { Stone_Zol, User } from '@/shared/Users';
import * as icons from '@/shared/Icons/FrontendStack/FrontendStackIcons';


import React from 'react'

export default function MyStack() {

  return (
    <div className='MyStack'>
        <h3>{Stone_Zol.textAboutStack}</h3>
        <Marquee  className='Marquee' gradient={true} gradientColor='#111111' gradientWidth={'20px'} >
            <icons.Next_icon/>
            <icons.CSS_icon/>
            <icons.JS_icon/>
            <icons.Less_icon/>
            <icons.NPM_icon/>
            <icons.VSCode_icon/>
            <icons.TS_icon/>
            <icons.React_icon/>
            <icons.Sass_icon/>
            <icons.HTML_icon/>
            <icons.Vercel_icon/>
        </Marquee>
</div>
  )
}
