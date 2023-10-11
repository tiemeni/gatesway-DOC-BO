import React, {useEffect, useState} from 'react';
import { Flex, Input , Button} from '@chakra-ui/react';
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
  const [isNavVisible, setNavVisible] = useState(true);
  const [isButtonActive, setButtonActive] = useState(false);
  const [isButtonVisible, setButtonVisible] = useState(false);
  
  const toggleNav = () => {
    setNavVisible(!isNavVisible);
    setButtonActive(!isButtonActive);
  };
  
  const  updateTime = () => {
    setCurrentTime(getDateAndTime());
  }
  

  useEffect(() => {
    const interval = setInterval(updateTime, 1000); 
      // gestion du responsive du button
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setButtonVisible(false);
      } else {
        setButtonVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    

  return (
    <Flex className="navigation" bg="#3A3C44" p={4} alignItems="center">
        {isButtonVisible && (
        <div className="button">
          {isNavVisible}
          <Button className={isButtonActive ? 'phone' : ''} onClick={toggleNav}>
            <span className='phone-box'>
              <span className='phone-inner' />
            </span>
          </Button>
        </div>
      )}
      <div className="first">
        <h1>GATESWAYDOC</h1>
        <p>{currentTime}</p>
      </div>
      <div className="second">
        <div className='form' >
          <form id='search'>
            <Input placeholder="Rechercher un patient" />
            <Button className="btn-search" ><Icon as={RiSearch2Line} color="white" /></Button>
          </form>
        </div>
        <Icon className="icon" as={FaUser} />
        <Icon className="icon" as={MdMail} />
        <Icon className="icon" as={AiFillSetting} />
        <Icon className="icon" as={IoIosFlash} />
        <Icon className="icon" as={MdOutlinePersonalVideo} />
      </div>
      <div className="tird">
        <Icon className="let" as={BiSolidMessageRounded} />
        <Icon className="let" as={MdMail} />
        <Icon className="let" as={RiAlertFill} />
        <Icon id='user' className="let let-user" as={FaUser} />
        <select  name="" id="">
          <option value=""> GatesWayDoc Admin </option>
        </select>
        <Icon className="group" as={HiUserGroup} />
      </div>
    </Flex>
  );
}

export default Header;
