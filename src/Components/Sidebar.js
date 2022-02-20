import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData'

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        {SidebarData.map((value, i) => {
          return(
            <li key={i}>
              <div>{value.icon}</div>
              <div>{value.title}</div> 
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Sidebar;
