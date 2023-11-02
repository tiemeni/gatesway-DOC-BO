import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { UilEllipsisV } from '@iconscout/react-unicons';
import { useSelector } from 'react-redux';
import {
  lieuxFormater,
  motifFormater,
  patientFormater,
  pratFormater,
  userFormater,
} from '../../utils/dataFormater';

function TableGenerator({ data, entityType }) {
  const gettingAllLieux = useSelector((state) => state.Lieux.gettingAllLieux);
  const praticiens = useSelector((state) => state.Praticiens.praticiens);
  const users = useSelector((state) => state.User.users);
  const patients = useSelector((state) => state.Patient.patients);
  const lieux = useSelector((state) => state.Lieux.lieux);
  const motifs = useSelector((state) => state.Motifs.motifs);
  const specialities = useSelector((state) => state.Specialities.specialities);
  const [data1, setData1] = useState(data);
  const [loading, setLoading] = useState(true);

  const truthinessToRenderTable = (truth, loadingRessource) => {
    let result = [];
    switch (truth) {
      case 'praticien':
        result = praticiens;
        break;
      case 'user':
        result = users;
        break;
      case 'patient':
        result = patients;
        break;
      case 'lieu':
        if (loadingRessource) {
          result = [];
        } else {
          result = lieux;
        }
        break;
      case 'motif':
        result = motifs;
        break;
      case 'speciality':
        result = specialities;
        break;
      default:
        break;
    }
    return result?.length > 0;
  };

  useEffect(() => {
    setData1((v) => {
      const ancien = v;
      let formatedData = [];
      if (entityType === 'praticien') {
        praticiens.forEach((e) => {
          formatedData.push(pratFormater(e));
        });
      } else if (entityType === 'user') {
        users.forEach((e) => {
          formatedData.push(userFormater(e));
        });
      } else if (entityType === 'patient') {
        formatedData = [];
        patients.forEach((e) => {
          formatedData.push(patientFormater(e));
        });
      } else if (entityType === 'lieu') {
        formatedData = [];
        lieux.forEach((e) => {
          formatedData.push(lieuxFormater(e));
        });
      } else if (entityType === 'motif') {
        motifs.forEach((e) => {
          formatedData.push(motifFormater(e));
        });
      } else if (entityType === 'speciality') {
        specialities.forEach((e) => {
          formatedData.push(e);
        });
      }
      ancien.rows = formatedData;
      return ancien;
    });
    if (truthinessToRenderTable(entityType, gettingAllLieux)) {
      setLoading(false);
    }
  }, [data1, praticiens, users, patients, lieux, motifs, specialities]);

  if (loading) {
    return 'loading...';
  }

  return (
    <TableContainer w="100%">
      <Table size="sm" variant="striped" colorScheme="gray">
        <Thead bgColor="dark.500" height="30px">
          <Tr>
            {data1.cols.map((c) => (
              <Th key={c.label} color="white">
                {c?.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data1?.rows?.map((r, e) => (
            <Tr key={r?._id || r + e}>
              <Td fontSize="sm">
                <Menu>
                  <MenuButton
                    as={IconButton}
                    size="xs"
                    variant="unstyled"
                    icon={<UilEllipsisV color="dark.500" size={20} />}
                  />
                  <MenuList>
                    {data1.actions.map(
                      (a) =>
                        a.editePath && (
                          <Link key={a.label} to={`${a.editePath}${r?._id}`}>
                            <MenuItem onClick={a.action()}>{a.label}</MenuItem>
                          </Link>
                        ),
                    )}
                  </MenuList>
                </Menu>
              </Td>
              {data1?.cols?.map(
                (col, i) =>
                  i > 0 && (
                    <Td fontSize="sm" key={`${r[col.fname]}${i}`}>
                      {r[col.fname]}
                    </Td>
                  ),
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TableGenerator;
