const retreiveIdc = () => {
  const idc = window.location.search.split('idc=')[1];
  return idc;
};

export default retreiveIdc;
