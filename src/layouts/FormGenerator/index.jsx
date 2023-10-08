import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  VStack,
} from '@chakra-ui/react';

function FormGenerator({ data }) {
  const [formData, setFormData] = useState(() => {
    const state = {};
    data.dataFields.data.forEach((e) => {
      if (e.type === 'checkbox') {
        state[e.name] = [];
      } else {
        state[e.name] = '';
      }
    });
    return state;
  });
  const handleChange = (event, ref) => {
    const actualObjct = data.dataFields.data.filter((e) => e.name === ref)[0];
    setFormData({
      ...formData,
      [ref]:
        actualObjct.type === 'checkbox'
          ? [...formData[ref], event.target.value]
          : event.target.value,
    });
  };

  const handleGo = (d) => {
    data.dataFields.callBacks.onUp(d);
  };

  return (
    <VStack spacing={5}>
      {data.dataFields.data.map((e) => {
        let result;
        switch (e.type) {
          case 'text':
            result = (
              <FormControl key={e.id} isRequired={e.required}>
                <FormLabel>{e.placeholder}</FormLabel>
                <Input
                  type="text"
                  placeholder={e.placeholder}
                  value={formData[e.name]}
                  required={e.required}
                  onChange={(event) => handleChange(event, e.name?.toString())}
                />
              </FormControl>
            );
            break;
          case 'email':
            result = (
              <FormControl key={e.id} isRequired={e.required}>
                <FormLabel>{e.placeholder}</FormLabel>
                <Input
                  type="email"
                  placeholder={e.placeholder}
                  value={formData[e.name]}
                  required={e.required}
                  onChange={(event) => handleChange(event, e.name?.toString())}
                />
              </FormControl>
            );
            break;
          case 'number':
            result = (
              <FormControl key={e.id} isRequired={e.required}>
                <FormLabel>{e.placeholder}</FormLabel>
                <Input
                  type="number"
                  placeholder={e.placeholder}
                  value={formData[e.name]}
                  required={e.required}
                  onChange={(event) => handleChange(event, e.name?.toString())}
                />
              </FormControl>
            );
            break;
          case 'picklist':
            result = (
              <FormControl key={e.id} isRequired={e.required}>
                <FormLabel>{e.placeholder}</FormLabel>
                <Select
                  onChange={(event) => handleChange(event, e.name?.toString())}
                  placeholder="Select option"
                >
                  {e.options.map((op) => (
                    <option key={op.id} value={op.name}>
                      {op.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
            );
            break;
          case 'radio':
            result = (
              <FormControl key={e.id} isRequired={e.required}>
                <FormLabel>{e.placeholder}</FormLabel>
                <RadioGroup
                  w="100%"
                  onChange={(v) => {
                    handleChange({ target: { value: v } }, e.name.toString());
                  }}
                  value={formData[e.name]}
                >
                  <Stack direction="row">
                    {e.options.map((op) => (
                      <Radio key={op.id} value={op.value.toString()}>
                        {op.name}
                      </Radio>
                    ))}
                  </Stack>
                </RadioGroup>
              </FormControl>
            );
            break;
          case 'checkbox':
            result = (
              <FormControl key={e.id} isRequired={e.required}>
                <FormLabel>{e.placeholder}</FormLabel>
                <Stack w="100%" spacing={5} direction="row">
                  {e.options.map((op) => (
                    <Checkbox
                      onChange={() => {
                        if (
                          parseInt(formData[e.name].indexOf(op.name), 10) !== -1
                        ) {
                          formData[e.name].splice(
                            formData[e.name].indexOf(op.name),
                            1,
                          );
                        } else {
                          setFormData((v) => ({
                            ...v,
                            [e.name]: [...formData[e.name], op.name],
                          }));
                        }
                      }}
                      key={op.id}
                    >
                      {op.name}
                    </Checkbox>
                  ))}
                </Stack>
              </FormControl>
            );
            break;
          default:
            break;
        }
        return result;
      })}
      <Box w="100%">
        <Button onClick={() => handleGo(formData)} colorScheme="blue">
          Save
        </Button>
      </Box>
    </VStack>
  );
}

export default FormGenerator;
