import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

function FormGenerator({ data, editeData = {} }) {
  const [dataCp, setDataCp] = useState({});
  const civilities = useSelector((state) => state.Civilities.civilities);
  const groupes = useSelector((state) => state.Groupes.groups);
  const specialities = useSelector((state) => state.Specialities.specialities);
  const lieux = useSelector((state) => state.Lieux.lieux);
  const [formData, setFormData] = useState(() => {
    const state = {};
    data.dataFields.data.forEach((e) => {
      if (e.type === 'checkbox') {
        state[e.name] = editeData[e.name] ?? [];
      } else {
        state[e.name] = editeData[e.name] ?? '';
      }
    });
    return state;
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  useEffect(() => {
    const temp = data;
    setDataCp(temp);
  }, [specialities]);

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

  const generatePickListData = (name, e) => {
    let result;
    switch (name) {
      case 'civility':
        result = (
          <Select
            id={e.name}
            onChange={(event) => handleChange(event, e.name?.toString())}
            placeholder="Select option"
            // value={formData?.civility}
            {...register(e.name, {
              required: e.required ? 'required field' : false,
              // required: 'This is required',
            })}
          >
            {civilities.map((op) => (
              <option key={op._id} value={op._id}>
                {op.label}
              </option>
            ))}
          </Select>
        );
        break;
      case 'groups':
        result = (
          <Select
            id={e.name}
            onChange={(event) => handleChange(event, e.name?.toString())}
            placeholder="Select option"
            // value={formData?.groups}
            {...register(e.name, {
              required: e.required ? 'required field' : false,
            })}
          >
            {groupes.map((op) => (
              <option key={op._id} value={op._id}>
                {op.title}
              </option>
            ))}
          </Select>
        );
        break;
      case 'job':
        result = (
          <Select
            id={e.name}
            onChange={(event) => handleChange(event, e.name?.toString())}
            placeholder="Select option"
            // value={formData?.job}
            {...register(e.name, {
              required: e.required ? 'required field' : false,
              // required: 'This is required',
            })}
          >
            {specialities.map((op) => (
              <option key={op._id} value={op._id}>
                {op.title || op.label}
              </option>
            ))}
          </Select>
        );
        break;
      case 'affectation':
        result = (
          <Select
            id={e.name}
            multiple={false}
            onChange={(event) => handleChange(event, e.name?.toString())}
            placeholder="Select option"
            // value={formData?.affectation}
            {...register(e.name, {
              required: e.required ? 'required field' : false,
              // required: 'This is required',
            })}
          >
            {lieux.map((op) => (
              <option key={op._id} value={op._id}>
                {op.title || op.label}
              </option>
            ))}
          </Select>
        );
        break;
      default:
        result = (
          <Select
            id={e.name}
            onChange={(event) => handleChange(event, e.name?.toString())}
            placeholder="Select option"
            {...register(e.name, {
              required: e.required ? 'required field' : false,
            })}
          >
            {e.options.map((op) => (
              <option key={op._id} value={op._id}>
                {op.label}
              </option>
            ))}
          </Select>
        );
    }
    return result;
  };

  function onSubmit(values) {
    console.log(errors);
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  const flexDesign = {
    display: 'inline-block',
  };

  return (
    <VStack spacing={5}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: '100%', display: 'grid' }}
      >
        {dataCp?.dataFields?.data.map((e) => {
          let result;
          switch (e.type) {
            case 'text':
              result = (
                <FormControl
                  isInvalid={errors[e.name]}
                  marginBottom={5}
                  key={e.id}
                  isRequired={e.required}
                >
                  <Stack
                    style={{
                      ...flexDesign,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <FormLabel width="250px" textAlign="right" htmlFor={e.name}>
                      {e.placeholder}
                    </FormLabel>
                    <Input
                      id={e.name}
                      type="text"
                      placeholder={e.placeholder}
                      value={formData[e.name]}
                      required={e.required}
                      {...register(e.name, {
                        required: e.required ? 'ce champs est requi' : false,
                      })}
                      onChange={(event) =>
                        handleChange(event, e.name?.toString())
                      }
                    />
                  </Stack>
                  <FormErrorMessage marginLeft="190px">
                    {errors[e.name] && errors[e.name].message}
                  </FormErrorMessage>
                </FormControl>
              );
              break;
            case 'date':
              result = (
                <FormControl
                  marginBottom={5}
                  key={e.id}
                  isRequired={e.required}
                  isInvalid={errors[e.name]}
                >
                  <Stack
                    style={{
                      ...flexDesign,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <FormLabel width="250px" textAlign="right" htmlFor={e.name}>
                      {e.placeholder}
                    </FormLabel>
                    <Input
                      id={e.name}
                      type="date"
                      placeholder={e.placeholder}
                      value={formData[e.name]}
                      required={e.required}
                      {...register(e.name, {
                        required: e.required ? 'ce champs est requi' : false,
                        minLength: {
                          value: 4,
                          message: 'Minimum length should be 4',
                        },
                      })}
                      onChange={(event) =>
                        handleChange(event, e.name?.toString())
                      }
                    />
                  </Stack>
                  <FormErrorMessage>
                    {errors[e.name] && errors[e.name].message}
                  </FormErrorMessage>
                </FormControl>
              );
              break;
            case 'email':
              result = (
                <FormControl
                  marginBottom={5}
                  key={e.id}
                  isRequired={e.required}
                  isInvalid={errors[e.name]}
                >
                  <Stack
                    style={{
                      ...flexDesign,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <FormLabel width="250px" textAlign="right" htmlFor={e.name}>
                      {e.placeholder}
                    </FormLabel>
                    <Input
                      id={e.name}
                      type="email"
                      placeholder={e.placeholder}
                      value={formData[e.name]}
                      required={e.required}
                      {...register(e.name, {
                        required: e.required ? 'ce champs est requi' : false,
                        minLength: {
                          value: 4,
                          message: 'Minimum length should be 4',
                        },
                      })}
                      onChange={(event) =>
                        handleChange(event, e.name?.toString())
                      }
                    />
                  </Stack>
                  <FormErrorMessage>
                    {errors[e.name] && errors[e.name].message}
                  </FormErrorMessage>
                </FormControl>
              );
              break;
            case 'number':
              result = (
                <FormControl
                  marginBottom={5}
                  key={e.id}
                  isRequired={e.required}
                >
                  <Stack
                    style={{
                      ...flexDesign,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <FormLabel width="250px" textAlign="right">
                      {e.placeholder}
                    </FormLabel>
                    <Input
                      type="number"
                      placeholder={e.placeholder}
                      value={formData[e.name]}
                      required={e.required}
                      {...register(e.name, {
                        required: e.required ? 'ce champs est requi' : false,
                        minLength: {
                          value: 4,
                          message: 'Minimum length should be 4',
                        },
                      })}
                      onChange={(event) =>
                        handleChange(event, e.name?.toString())
                      }
                    />
                  </Stack>
                  <FormErrorMessage>
                    {errors[e.name] && errors[e.name].message}
                  </FormErrorMessage>
                </FormControl>
              );
              break;
            case 'picklist':
              result = (
                <FormControl
                  marginBottom={5}
                  key={e.id}
                  isInvalid={errors[e.name]}
                  isRequired={e.required}
                >
                  <Stack
                    style={{
                      ...flexDesign,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <FormLabel width="250px" textAlign="right">
                      {e.placeholder}
                    </FormLabel>
                    {generatePickListData(e.name, e)}
                  </Stack>
                  <FormErrorMessage>
                    {errors[e.name] && errors[e.name].message}
                  </FormErrorMessage>
                </FormControl>
              );
              break;
            case 'radio':
              result = (
                <FormControl
                  marginBottom={5}
                  key={e.id}
                  isRequired={e.required}
                >
                  <Stack
                    style={{
                      ...flexDesign,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <FormLabel width="250px" textAlign="right">
                      {e.placeholder}
                    </FormLabel>
                    <RadioGroup
                      w="100%"
                      onChange={(v) => {
                        handleChange(
                          { target: { value: v } },
                          e.name.toString(),
                        );
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
                  </Stack>
                  <FormErrorMessage>
                    {errors[e.name] && errors[e.name].message}
                  </FormErrorMessage>
                </FormControl>
              );
              break;
            case 'checkbox':
              result = (
                <FormControl
                  alignItems="center"
                  display="flex"
                  flexDirection="row"
                  marginBottom={5}
                  key={e.id}
                  isRequired={e.required}
                >
                  <Stack
                    style={{
                      ...flexDesign,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <FormLabel width="250px" textAlign="right">
                      {e.placeholder}
                    </FormLabel>
                    <Stack w="100%" spacing={5} direction="row">
                      {e.options.map((op) => (
                        <Checkbox
                          onChange={() => {
                            if (
                              parseInt(
                                formData[e.name].indexOf(op.name),
                                10,
                              ) !== -1
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
                  </Stack>
                  <FormErrorMessage>
                    {errors[e.name] && errors[e.name].message}
                  </FormErrorMessage>
                </FormControl>
              );
              break;
            default:
              break;
          }
          return result;
        })}
        <Box w="100%" paddingLeft="200px">
          {Object.keys(data.dataFields.callBacks)?.map((key, i) => (
            <Button
              type={i === 0 ? 'submit' : null}
              isLoading={i === 0 ? isSubmitting : false}
              onClick={() =>
                i === 1 ? data.dataFields.callBacks[key].action() : null
              }
              key={key}
              marginLeft={i !== 0 ? 5 : 0}
              backgroundColor={data.dataFields.callBacks[key].color ?? null}
              // onClick={() => {
              //   data.dataFields.callBacks[key].action(formData);
              // }}
              colorScheme="blue"
            >
              {data.dataFields.callBacks[key].label}
            </Button>
          ))}
        </Box>
      </form>
    </VStack>
  );
}

export default FormGenerator;
