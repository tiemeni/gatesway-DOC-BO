import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
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
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import {
  motifFormater,
  patientFormater,
  pratFormater,
  userFormater,
} from '../../utils/dataFormater';

function TableGenerator({ data, entityType }) {
  const praticiens = useSelector((state) => state.Praticiens.praticiens);
  const users = useSelector((state) => state.User.users);
  const patients = useSelector((state) => state.Patient.patients);
  const lieux = useSelector((state) => state.Lieux.lieux);
  const motifs = useSelector((state) => state.Motifs.motifs);
  const specialities = useSelector((state) => state.Specialities.specialities);

  const [data1, setData1] = useState(data);
  const [loading, setLoading] = useState(true);

  const truthinessToRenderTable = (truth) => {
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
        result = lieux;
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
      const formatedData = [];
      if (entityType === 'praticien') {
        praticiens.forEach((e) => {
          formatedData.push(pratFormater(e));
        });
      } else if (entityType === 'user') {
        users.forEach((e) => {
          formatedData.push(userFormater(e));
        });
      } else if (entityType === 'patient') {
        patients.forEach((e) => {
          formatedData.push(patientFormater(e));
        });
      } else if (entityType === 'lieu') {
        lieux.forEach((e) => {
          formatedData.push(e);
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
    if (truthinessToRenderTable(entityType)) {
      setLoading(false);
    }
  }, [data1, praticiens, users, patients, lieux, motifs, specialities]);

  if (loading) {
    return 'loading...';
  }

  return (
    <TableContainer w="100%">
      <Table size="sm">
        <Thead bgColor="dark.500">
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
              <Td>
                <Menu>
                  <MenuButton
                    borderWidth={1}
                    borderColor="gray"
                    backgroundColor="white"
                    fontSize={15}
                    height={30}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    Actions
                  </MenuButton>
                  <MenuList>
                    {data1.actions.map((a) => (
                      <Link
                        key={a.label}
                        to={`/content/praticien/upsert/${r?._id}`}
                      >
                        <MenuItem onClick={a.action()}>{a.label}</MenuItem>
                      </Link>
                    ))}
                  </MenuList>
                </Menu>
              </Td>
              {data1?.cols?.map(
                (col, i) => i > 0 && <Td key={r[col.fname]}>{r[col.fname]}</Td>,
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TableGenerator;
