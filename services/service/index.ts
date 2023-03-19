import axios from 'axios';
import { vehicleEndpoint } from '../endpoint';

export const getVehicles = () => {
  return axios.get(vehicleEndpoint.allVehicle);
};
