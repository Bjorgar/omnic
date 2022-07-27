interface WorkingHours {
  1: string[];
  2: string[];
  3: string[];
  4: string[];
  5: string[];
  6: string[];
  7: string[];
}

export interface ResponseData {
  description: string;
  device: string
  is_online: boolean;
  location: {
    address: string;
    country: number;
    country_name: string;
    latitude: string;
    longitude: string;
    name: string;
    postal: string;
    region: string;
    uid: string;
    working_hours: WorkingHours;
  };
  name: string;
  partner_type: number;
  point_code: string | null
  type: number
  uid: string;
}
