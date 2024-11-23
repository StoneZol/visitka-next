import React, { FC } from 'react'
import '@/widgets/Contacts/MyContacts.scss'


import { Rubik_Mono_One } from 'next/font/google'
import { User } from '@/shared/Users'
import * as contacts from '@/shared/Icons/Contacts/Contacts';

const rubikMono = Rubik_Mono_One({
  preload: true,
  subsets: ['cyrillic'],
  weight: '400',
})
/**
 * @param {user} Object - user with contacts
 * @param {showText} bool  - default true
 * @returns 
 */

interface ContactProps{
  user: User,
  showText?: boolean,
  grayScale?: boolean,
}
const MyContacts :FC<ContactProps>= ({user, showText =true, grayScale =false}) =>{
  const icons = [
    { Component: contacts.MobileIcon, url: user.phone },
    { Component: contacts.TelegramIcon, url: user.telegram },
    { Component: contacts.WhatsappIcon, url: user.whatsapp },
    { Component: contacts.GmailIcon, url: user.mail },
    { Component: contacts.TelegramIcon, url: user.gitHub },
  ];

  return (
    <div className={`MyContactsBox ${rubikMono.className}`}>
      {showText? (<span>мои контакты:</span>):('')}
        <div className={`MyContacts ${grayScale ? 'grayScale':''}`}>
          {
            icons.map(({Component, url},index)=>
            url && <Component key={index} url={url}/>)
          }
        </div>
    </div>
  )
}

export default MyContacts;
