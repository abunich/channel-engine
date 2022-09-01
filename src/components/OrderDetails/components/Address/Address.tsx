import React from "react";
import { HolidayVillage } from "@mui/icons-material";
import { DataItem } from "src/components/DataItem/DataItem";
import { Address as AddressModel } from "src/models/Content";
import "./Address.scss";

const getDoubleContent = (firstString: string, secondString: string) => `${firstString} ${secondString}`.trim();

const resources = {
    name: "Name",
    address: "Address",
    code: "Zip code",
}

export declare namespace Address {
  interface Props {
    data: AddressModel;
    title: string;
  }
}

export const Address: React.FC<Address.Props> = ({
  data: { City, CountryIso, FirstName, LastName, StreetName, HouseNr, ZipCode },
  title
}) => {
  const comma = City && CountryIso && ",";
  return (
    <div className="address">
      <h3 className="address__title">{title}</h3>

      <DataItem title={<HolidayVillage />}>{`${City}${comma}${CountryIso}`}</DataItem>

      <DataItem title={resources.name} isColon isReversedColors>{getDoubleContent(FirstName, LastName)}</DataItem>

      <DataItem title={resources.address} isColon isReversedColors>{getDoubleContent(StreetName, HouseNr)}</DataItem>

      <DataItem title={resources.code} isColon isReversedColors>{ZipCode}</DataItem>
    </div>
  );
};
