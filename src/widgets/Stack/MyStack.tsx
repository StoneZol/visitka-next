'use client'
import '@/widgets/Stack/MyStack.scss';
import {Zen_Kaku_Gothic_Antique} from 'next/font/google';

import Marquee from 'react-fast-marquee';
import {Stone_Zol} from '@/shared/Users';
import * as icons from '@/shared/Icons/FrontendStack/FrontendStackIcons';
import bgStack from '@/shared/Static/backgrounds/bgStack.webp';

import React from 'react';

const zenKaku = Zen_Kaku_Gothic_Antique({
    preload: true, 
    subsets: ['cyrillic'], 
    weight: '700'})

export default function MyStack() {

    return (
        <div
            className='MyStackBox'
            style={{
                backgroundImage: `url(${bgStack.src})`
            }}>
            <div className={`MyStack ${zenKaku.className}`}>
                <div className='textBox'>
                    <h3>{Stone_Zol.textAboutStack}</h3>
                </div>
                <div className='MarqueeBox'>
                    <Marquee className='Marquee' speed={30} pauseOnHover={true}>
                        <icons.Next_icon/>
                        <icons.CSS_icon/>
                        <icons.TS_icon/>
                        <icons.React_icon/>
                        <icons.Sass_icon/>
                        <icons.HTML_icon/>
                        <icons.NPM_icon/>
                        <icons.VSCode_icon/>
                        <icons.Less_icon/>
                        <icons.JS_icon/>
                        <icons.Vercel_icon/>
                    </Marquee>
                    <Marquee className='Marquee' direction='right' speed={30} pauseOnHover={true}>
                        <icons.NPM_icon/>
                        <icons.React_icon/>
                        <icons.JS_icon/>
                        <icons.TS_icon/>
                        <icons.HTML_icon/>
                        <icons.Next_icon/>
                        <icons.Less_icon/>
                        <icons.CSS_icon/>
                        <icons.Vercel_icon/>
                        <icons.VSCode_icon/>
                        <icons.Sass_icon/>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}
