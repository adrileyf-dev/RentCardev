// CreateCarDTO.ts
export interface CreateCarDTO {
  name: string;
  description: string;
  daily_rate: number;
  available: boolean;
  fine_amount: number;
  license_plate: string;
  brand: string;
}
