import Car from '../../entities/Car';

interface ICarResponseDTO {
  name: string;
  description: string;
  brand: string;
  license_plate: string;
  daily_rate: number;
  fine_amount: number;
  available: boolean;
  category_id: string;
}

export class CarMap {
  static toDTO(car: Car): ICarResponseDTO {
    return {
      name: car.name,
      description: car.description,
      brand: car.brand,
      license_plate: car.license_plate,
      daily_rate: car.daily_rate,
      fine_amount: car.fine_amount,
      available: car.available,
      category_id: car.category_id,
    };
  }

  static toDTOList(cars: Car[]): ICarResponseDTO[] {
    return cars.map((car) => this.toDTO(car));
  }
}
