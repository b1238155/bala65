import React from "react";
import { Link } from "react-router-dom";
import { LuClipboardCheck} from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";

export default function SidenavbarApprover() {


  const menus = [
    { name: "Dashboard", link: "/ApproverDashboard", icon: MdOutlineDashboard },
    { name: "AwaitingApprover", link: "/AwaitingSamplesApprover", icon: LuClipboardCheck },
    // { name: "SearchCustomer", link: "/SearchCustomer", icon: BiSearch },
  
  ];

  return (
    
    <div className='sidebar'>
    {/* <div className='logocolor'>
      <img src={logo} alt='logo'/>
    </div> */}
   
 
       
        {menus?.map((menu, i) => (
          <Link className="sidebar-Link" to={menu?.link}>
            <div className="sidebarhedsty">
            <div>{React.createElement(menu?.icon, { size: "25" })}</div>
            <div>
            <text className="sidebartext">{menu?.name}</text>
            </div>
            </div>
          </Link>
        ))}

      </div>

      // <div style={{ marginTop: 40, marginBottom: 30, marginLeft: 5 }}>
      //   <text style={{ fontSize: 15, fontWeight: 400, color: "#ffffff" }}>
      //     Version 1.0{" "}
      //   </text>
      // </div>
    
  );
}