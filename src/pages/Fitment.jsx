import axios from "axios";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../context/ContextProvider";

const data = [
  {
    amc_date: "Sun, 19 Jan 2025 00:00:00 GMT",
    device_serial_no: "ECOV01A092022006129",
    extra_certificate: null,
    fitment_date: "Fri, 20 Jan 2023 00:00:00 GMT",
    id: 1,
    our_certificate: "http://e.pc.cd/IB6otalK",
    seller_id: 1,
    seller_name: "Priyansh",
    seller_type: 0,
    vahan_certificate: null,
  },
  {
    amc_date: "Sun, 19 Jan 2025 00:00:00 GMT",
    device_serial_no: "ECOV01A092022006131",
    extra_certificate: "http://e.pc.cd/uS6otalK",
    fitment_date: "Fri, 20 Jan 2023 00:00:00 GMT",
    id: 3,
    our_certificate: "http://e.pc.cd/IB6otalK",
    seller_id: 1,
    seller_name: "Priyansh",
    seller_type: 0,
    vahan_certificate: "http://e.pc.cd/1u6otalK",
  },
  {
    amc_date: "Sun, 19 Jan 2025 00:00:00 GMT",
    device_serial_no: "ECOV01A092022006132",
    extra_certificate: "http://e.pc.cd/dVxotalK",
    fitment_date: "Fri, 20 Jan 2023 00:00:00 GMT",
    id: 4,
    our_certificate: "http://e.pc.cd/IB6otalK",
    seller_id: 1,
    seller_name: "Priyansh",
    seller_type: 0,
    vahan_certificate: "http://e.pc.cd/Qj6otalK",
  },
  {
    amc_date: "Sun, 19 Jan 2025 00:00:00 GMT",
    device_serial_no: "ECOV01A092022006134",
    extra_certificate: "http://e.pc.cd/eh6otalK",
    fitment_date: "Fri, 20 Jan 2023 00:00:00 GMT",
    id: 5,
    our_certificate: "http://e.pc.cd/IB6otalK",
    seller_id: 1,
    seller_name: "Priyansh",
    seller_type: 0,
    vahan_certificate: "http://e.pc.cd/Pu6otalK",
  },
  {
    amc_date: "Sun, 19 Jan 2025 00:00:00 GMT",
    device_serial_no: "ECOV01A092022006133",
    extra_certificate: "http://e.pc.cd/cj6otalK",
    fitment_date: "Fri, 20 Jan 2023 00:00:00 GMT",
    id: 6,
    our_certificate: "http://e.pc.cd/IB6otalK",
    seller_id: 1,
    seller_name: "Priyansh",
    seller_type: 0,
    vahan_certificate: "http://e.pc.cd/Fu6otalK",
  },
  {
    amc_date: "Sun, 19 Jan 2025 00:00:00 GMT",
    device_serial_no: "ECOV01A092022006136",
    extra_certificate: null,
    fitment_date: "Fri, 20 Jan 2023 00:00:00 GMT",
    id: 7,
    our_certificate: "http://e.pc.cd/IB6otalK",
    seller_id: 1,
    seller_name: "Priyansh",
    seller_type: 0,
    vahan_certificate: null,
  },
  {
    amc_date: "Sun, 19 Jan 2025 00:00:00 GMT",
    device_serial_no: "ECOV01A092022006140",
    extra_certificate: null,
    fitment_date: "Fri, 20 Jan 2023 00:00:00 GMT",
    id: 8,
    our_certificate: "http://e.pc.cd/IB6otalK",
    seller_id: 1,
    seller_name: "Priyansh",
    seller_type: 0,
    vahan_certificate: null,
  },
];

const Fitment = () => {
  const { user } = useContext(AuthContext);
  const getFitment = async () => {
    let options = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.ecotrack.co.in/fitment",
      headers: {
        "x-access-token": user.token,
      },
    };
    const { data } = await axios.request(options);
    return data;
  };
  // const { data, isLoading, isError } = useQuery(["fitment"], getFitment);
  // console.log(data);
  return (
    <section className="h-[calc(100vh-4rem)] px-4 py-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
        Fitment
      </h1>
      <div>
        {Object.keys(data[0]).map(
          (value, i) =>
            value !== "id" && (
              <div className="capitalize" key={i}>
                {value.split("_").join(" ")}
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Fitment;
