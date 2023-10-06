import React, {useEffect, useState} from 'react';
import { Flex, Input } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { FaUser } from 'react-icons/fa';
import { IoIosFlash } from "react-icons/io";
import { MdMail, MdOutlinePersonalVideo } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';
import { RiSearch2Line, RiAlertFill } from 'react-icons/ri';
import { BiSolidMessageRounded } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';
import { getDateAndTime } from '../../utils/helpers';
import './styles.css';


function Header() {

  const [currentTime, setCurrentTime] = useState(getDateAndTime());
  
  const  updateTime = () => {
    setCurrentTime(getDateAndTime());
  }
  

  useEffect(() => {
    const interval = setInterval(updateTime, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <Flex bg="#3A3C44" p={4} alignItems="center">
      <div className="first">
        <h1>GATESWAYDOC</h1>
        <p>{currentTime}</p>
      </div>
      <div className="second">
        <form>
          <Input placeholder="Rechercher un patient" />
          
          <Icon className="icon" as={RiSearch2Line} color="white" />
        </form>
        <Icon as={FaUser} />
        <Icon as={MdMail} />
        <Icon as={AiFillSetting} />
        <Icon as={IoIosFlash} />
        <Icon as={MdOutlinePersonalVideo} />
      </div>
      <div className="tird">
        <Icon className="let" as={BiSolidMessageRounded} />
        <Icon className="let" as={MdMail} />
        <Icon className="let" as={RiAlertFill} />
        <Icon className="let let-user" as={FaUser} />
        <select name="" id="">
          <option value=""> GatesWayDoc Admin </option>
        </select>
        <Icon className="group" as={HiUserGroup} />
      </div>
    </Flex>
  );
}

export default Header;
