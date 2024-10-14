import React from 'react'
import '@/widgets/Contacts/MyContacts.scss'
import * as contacts from '@/shared/Icons/Contacts/Contacts'

import { Rubik_Mono_One } from 'next/font/google'

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
export default function MyContacts({user={}, showText=true, grayScale= false}) {

  return (
    <div className={`MyContactsBox ${rubikMono.className}`}>
      {showText? (<span>мои контакты:</span>):('')}
        <div className={`MyContacts ${grayScale ? 'grayScale':''}`}>
          <contacts.mobile_icon url={user.phone}/>
          <contacts.telegram_icon url={user.telegram}/>
          <contacts.whatsapp_icon url={user.whatsapp}/>
          <contacts.gmail_icon url={user.mail}/>
          <contacts.linkedin_icon url={user.linkedin}/>
          <contacts.gitHub_icon url={user.gitHub}/>
        </div>
    </div>
  )
}
