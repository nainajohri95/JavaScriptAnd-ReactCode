import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import Card from "antd/es/card/Card";

function Converter() {
  const apiUrl = "https://api.coingecko.com/api/v3/exchange_rates";

  const defaultFirstSelectValue = "Bitcoin";
  const defaultSecondSelectValue = "Ether";

  const [cryptoList, setCryptoList] = useState([]);
  const [inputValue, setInputValue] = useState("0");
  const [firstSelect, setFirstSelect] = useState("defaultFirstSelectValue");
  const [secondSelect, setSecondSelect] = useState("defaultSecondSelectValue");
  const [result, setResult] = useState("0");

  useEffect(() => {
    fetchData();
  }, []); //this will oad once

  async function fetchData() {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();

    const data = jsonData.rates;

    const tempArray = Object.entries(data).map((item) => {
      //object.enteries help us to convert an array to object
      return {
        value: item[1].name,
        label: item[1].name,
        rate: item[1].value,
      };
    });
    setCryptoList(tempArray);
  }

  useEffect(() => {
    if (cryptoList.length == 0) return;

    const firstSelectRate = cryptoList.find((item) => {
      return item.value == firstSelect;
    }).rate;

    const SecondSelectRate = cryptoList.find((item) => {
      return item.value == secondSelect;
    }).rate;

    const resultValue = (inputValue * SecondSelectRate) / firstSelectRate;

    setResult(resultValue);
  }, [inputValue, firstSelect, secondSelect]);

  return (
    <div className="container">
      <Card className="crypto-card" title={<h1>Crypto Converter</h1>}>
        <Form>
          <Form.Item>
            <Input
              onChange={(event) => setInputValue(event.target.value)}
              style={{ width: "300px" }}
            />
          </Form.Item>
        </Form>

        <div className="select-box">
          <Select
            style={{ width: "210px" }}
            default={defaultFirstSelectValue}
            options={cryptoList}
            onChange={(value) => setFirstSelect(value)}
          />
          <Select
            style={{ width: "210px" }}
            default={defaultSecondSelectValue}
            options={cryptoList}
            onChange={(value) => setSecondSelect(value)}
          />
        </div>
        <p>{result}</p>
      </Card>
    </div>
  );
}

export default Converter;
