export interface IFlight {
    id: number;
    number: number;
    from: string;
    to: string;
    capacity: number;
    passenger: IPassenger[];
  }
  
  export interface IPassenger {
    id: number;
    passportNumber: string;
    gender: string;
    FlightId: number;
  }