import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData'

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className='sidebar-list'>
        {SidebarData.map((value, i) => {
          return(
            <li 
              key={i}
              onClick={() => {window.location.pathname = value.link}}
              className="sidebar-row"
            >
              <div className='sidebar-icon'>{value.icon}</div>
              <div className='sidebar-title'>{value.title}</div> 
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Sidebar;
