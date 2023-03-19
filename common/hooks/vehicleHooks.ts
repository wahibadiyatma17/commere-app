import { getVehicles } from '@/services/service';
import { useQuery } from 'react-query';

export const useGetVehicles = () => {
  return useQuery(['get_vehicles'], () => getVehicles());
};
