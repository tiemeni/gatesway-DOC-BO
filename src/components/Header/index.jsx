import React from 'react';
import { Flex } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/icons';
import { FaUser } from "react-icons/fa";
import { MdMail, MdOutlinePersonalVideo } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { FcFlashOn } from "react-icons/fc";
import { RiSearch2Line, RiAlertFill } from "react-icons/ri";
import { BiSolidMessageRounded } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import "./styles.css"

function NavigationBar() {
  function getDateAndTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    let dayOfWeek;
    switch (now.getDay()) {
      case 0:
        dayOfWeek = "Dimanche";
        break;
      case 1:
        dayOfWeek = "Lundi";
        break;
      case 2:
        dayOfWeek = "Mardi";
        break;
      case 3:
        dayOfWeek = "Mercredi";
        break;
      case 4:
        dayOfWeek = "Jeudi";
        break;
      case 5:
        dayOfWeek = "Vendredi";
        break;
      case 6:
        dayOfWeek = "Samedi";
        break;
      default:
        dayOfWeek = "";
        break;
    }

    let monthName;
    switch (Number(month)) {
      case 1:
        monthName = "Janvier";
        break;
      case 2:
        monthName = "Février";
        break;
      case 3:
        monthName = "Mars";
        break;
      case 4:
        monthName = "Avril";
        break;
      case 5:
        monthName = "Mai";
        break;
      case 6:
        monthName = "Juin";
        break;
      case 7:
        monthName = "Juillet";
        break;
      case 8:
        monthName = "Août";
        break;
      case 9:
        monthName = "Septembre";
        break;
      case 10:
        monthName = "Octobre";
        break;
      case 11:
        monthName = "Novembre";
        break;
      case 12:
        monthName = "Décembre";
        break;
      default:
        monthName = "";
        break;
    }

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const dateTime = `${dayOfWeek} ${day} ${monthName} ${year} ${hours}:${minutes}:${seconds}`;
    return dateTime;
  }

  return (
    <Flex bg="#3A3C44" p={4} alignItems="center">
      <div className='first'>
        <h1>GATESWAYDOC</h1>
        <p>{getDateAndTime()}</p>
      </div>
      <div className="second">
        <form>
          <input type="search" name="" id="" placeholder='Rechercer un patient'/>
          <Icon className ="icon" as = {RiSearch2Line} color="white"/>
          
        </form>
        <Icon as={FaUser} />
        <Icon as={MdMail} />
        <Icon as={AiFillSetting} />
        <Icon as={FcFlashOn} />
        <Icon as= {MdOutlinePersonalVideo} />
      </div>
      <div className='tird'>
        <Icon className='let' as={BiSolidMessageRounded} />
        <Icon className='let' as={MdMail} />
        <Icon className='let'  as={RiAlertFill} />
        <Icon className='let let-user'  as={FaUser} />
        <select name="" id="">
          <option value=""> GatesWayDoc Admin </option>
        </select>
        <Icon className='group' as={HiUserGroup} />
      </div>
    </Flex>
  );
}

function Header() {
  return (
    <div>
      <NavigationBar />
    </div>
  );
}

export default Header;