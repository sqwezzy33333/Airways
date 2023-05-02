export interface IFlightOffer {
  data: IFlightOfferData;
  dictionaries: IFlightOfferDictionaries;
  meta: IFlightOfferMeta;
};

interface IFlightOfferData {
  id: string;
  instantTicketingRequired: boolean;
  itineraries: {
    duration: string;
    segments: {
      aircraft: {
        code: string;
      };
      arrival: {
        at: string;
        iataCode: string;
        terminal: string;
      };
      blacklistedInEU: boolean;
      carrierCode: string;
      departure: {
        at: string;
        iataCode: string;
        terminal: string;
      };
      id: string;
      number: string;
      duration: string;
      numberOfStops: number;
      operating: {
        carrierCode: string;
      };
    }[];
  }[];
  lastTicketingDate: string;
  lastTicketingDateTime:string;
  nonHomogeneous: boolean;
  numberOfBookableSeats: number;
  oneWay: boolean;
  price: {
    base: string;
    currency: string;
    fees: {
      amount: string;
      type: string;
    }[];
    grandTotal: string;
    total: string;
  };
  pricingOptions: {
    fareType: FareType[];
    includedCheckedBagsOnly: boolean;
  };
  source: string;
  travelerPricings: {
    fareDetailsBySegment: {
      cabin: string;
      class: string;
      fareBasis: string;
      includedCheckedBags: {
        weight: number;
        weightUnit: string;
      };
      segmentId: string;
    }[];
    fareOption: string;
    price: {
      base: string;
      currency: string;
      total: string;
    };
    travelerId: string;
    travelerType: TravelerType;
  }[];
  type: string;
  validatingAirlineCodes: string[];
};

interface IFlightOfferDictionaries {
  aircraft: {
    [key: string]: string;
  };
  carriers: {
    [key: string]: string;
  };
  currencies: {
    [key: string]: string;
  };
  locations: {
    [key: string]: {
      cityCode: string;
      countryCode: string;
    };
  };
}

interface IFlightOfferMeta {
  count: number;
  links: {
    self: string;
  };
}

enum FareType {
  SPUBLISHED = "SPUBLISHED",
  NEGOTIATED = "NEGOTIATED",
  CORPORATE = "CORPORATE"
}

enum TravelerType {
  ADULT = "ADULT",
  CHILD = "CHILD",
  SENIOR = "SENIOR",
  YOUNG = "YOUNG",
  HELD_INFANT = "HELD_INFANT",
  SEATED_INFANT = "SEATED_INFANT",
  STUDENT = "STUDENT"
}