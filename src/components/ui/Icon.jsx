import React from 'react'
export default function Icon({ type, size=18 }) {
 const p={fill:'none',stroke:'currentColor',strokeWidth:1.7,strokeLinecap:'round',strokeLinejoin:'round'}
 if(type==='arrow') return <svg width={size} height={size} viewBox="0 0 24 24"><path {...p} d="M5 12h13M13 6l6 6-6 6"/></svg>
 if(type==='external') return <svg width={size} height={size} viewBox="0 0 24 24"><path {...p} d="M14 5h5v5M19 5l-8 8M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>
 if(type==='layers') return <svg width={size} height={size} viewBox="0 0 24 24"><path {...p} d="m12 4 8 4-8 4-8-4 8-4Zm-8 8 8 4 8-4M4 16l8 4 8-4"/></svg>
 if(type==='github') return <svg width={size} height={size} viewBox="0 0 24 24"><path {...p} d="M9 19c-4 1-4-2-5-2m10 4v-3.9c0-1.1.4-1.8 1-2.3 3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 20.3 4 5.1 5.1 0 0 0 20.2 1S19 0.6 16 2.6a13.4 13.4 0 0 0-8 0C5 0.6 3.8 1 3.8 1A5.1 5.1 0 0 0 3.7 4 5.5 5.5 0 0 0 2.2 8.8c0 5.4 3.5 6.6 6.8 7 .6.5 1 1.2 1 2.3V21"/></svg>
 if(type==='linkedin') return <svg width={size} height={size} viewBox="0 0 24 24"><path {...p} d="M6 8v11M6 5.5v.1M10 19V8m0 5c0-3 1.5-5 4.2-5 2.4 0 3.8 1.6 3.8 4.6V19"/></svg>
 if(type==='facebook') return <svg width={size} height={size} viewBox="0 0 24 24"><path {...p} d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z"/></svg>
 if(type==='instagram') return <svg width={size} height={size} viewBox="0 0 24 24"><rect {...p} x="3" y="3" width="18" height="18" rx="5"/><circle {...p} cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
 if(type==='mail') return <svg width={size} height={size} viewBox="0 0 24 24"><path {...p} d="M4 6h16v12H4zM4 7l8 6 8-6"/></svg>
 if(type==='menu') return <svg width={size} height={size} viewBox="0 0 24 24"><path {...p} d="M4 7h16M4 12h16M4 17h16"/></svg>
 if(type==='close') return <svg width={size} height={size} viewBox="0 0 24 24"><path {...p} d="m6 6 12 12M18 6 6 18"/></svg>
 return null
}
