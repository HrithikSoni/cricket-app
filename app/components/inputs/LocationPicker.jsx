import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import UTILS from "../../utils";
import DropDownModal from "../modals/DropdownModal";
import api from "../../services/api";

const LocationPicker = (props) => {
  const locationData = useRef({});

  const { data: countryList } = api.useGetCountryQuery();

  const { data: stateList } = api.useGetStateQuery();

  const { data: cityList } = api.useGetCityQuery();

  // if (!countryList || !stateList) {
  //   return isCountryListLoading || isStateListLoading;
  // }

  const form = [
    {
      label: "Country",
      key: "countryId",
      header: "Select A Country",
      data: countryList || [],
    },
    {
      label: "State",
      key: "stateId",
      header: "Select A State",
      data: stateList || [],
    },

    {
      label: "City",
      key: "cityId",
      header: "Select A city",
      data: cityList || [],
    },
  ];

  function handleOnSelect(key, value) {
    locationData.current = { ...locationData.current, [key]: value };
    props?.onLocationSelect(locationData.current);
  }

  return (
    <View>
      {form.map((item, index) => (
        <DropDownModal
          key={index}
          {...item}
          onDropdownSelect={(e) => handleOnSelect(item.key, e.id)}
        />
      ))}
    </View>
  );
};

// const statesArray = [
//   { label: "Andhra Pradesh", value: "ANDHRA PRADESH" },
//   { label: "Arunachal Pradesh", value: "ARUNACHAL PRADESH" },
//   { label: "Assam", value: "ASSAM" },
//   { label: "Bihar", value: "BIHAR" },
//   { label: "Chhattisgarh", value: "CHHATTISGARH" },
//   { label: "Delhi", value: "DELHI" },
//   { label: "Gujarat", value: "GUJARAT" },
//   { label: "Haryana", value: "HARYANA" },
//   { label: "Himachal Pradesh", value: "HIMACHAL PRADESH" },
//   { label: "Jharkhand", value: "JHARKHAND" },
//   { label: "Karnataka", value: "KARNATAKA" },
//   { label: "Kerala", value: "KERALA" },
//   { label: "Madhya Pradesh", value: "MADHYA PRADESH" },
//   { label: "Maharashtra", value: "MAHARASHTRA" },
//   { label: "Manipur", value: "MANIPUR" },
//   { label: "Meghalaya", value: "MEGHALAYA" },
//   { label: "Mizoram", value: "MIZORAM" },
//   { label: "Nagaland", value: "NAGALAND" },
//   { label: "Odisha", value: "ODISHA" },
//   { label: "Punjab", value: "PUNJAB" },
//   { label: "Rajasthan", value: "RAJASTHAN" },
//   { label: "Sikkim", value: "SIKKIM" },
//   { label: "Tamil Nadu", value: "TAMIL NADU" },
//   { label: "Telangana", value: "TELANGANA" },
//   { label: "Tripura", value: "TRIPURA" },
//   { label: "Uttar Pradesh", value: "UTTAR PRADESH" },
//   { label: "Uttarakhand", value: "UTTARAKHAND" },
//   { label: "West Bengal", value: "WEST BENGAL" },
// ];

export default LocationPicker;

const styles = StyleSheet.create({});
