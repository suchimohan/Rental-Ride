import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getKey } from '../../store/maps';
import SmallMaps from './SmallMaps';


export const SmallMapContainer = ({car}) => {
  const key = useSelector((state) => state.map.key);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!key) {
      dispatch(getKey());
    }
  }, [dispatch, key]);

  if (!key) {
    return null;
  }

  return (
    <SmallMaps apiKey={key} car={car}/>
  );
};
