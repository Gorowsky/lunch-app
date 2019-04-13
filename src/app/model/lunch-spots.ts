export namespace LunchSpot {

  export enum Status {
    UNDELIVERED = "UNDELIVERED",
    DELIVERED = "DELIVERED"
  }

  export interface Single {
    address: string
    company: string
    deliveryTime: Date
    lunchSpotId: number
    name: string
    status: Status
  }

  export interface Model {
    restaurantName: string
    lunchSpots: Array<Single>
  }

}