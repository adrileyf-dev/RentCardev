// CreateCarDTO.ts
export default interface ICreateCarDTO {
  name?: string;
  description?: string;
  daily_rate?: number;
  available?: boolean;
  fine_amount?: number;
  license_plate?: string;
  publicdaily_rate?: string;
  category_id?: string;
  brand?: string;
}
