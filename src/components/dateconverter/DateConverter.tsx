import React, { useState, useEffect, FormEvent } from "react";
import { Typography, TextField, Button, CircularProgress } from "@mui/material";
import {
  appHeader,
  dateConvertLabel,
  convertButtonText,
} from "../../constants";
import { ConvertDate } from "../../api/ConvertDate";
import "./DateConverter.css";

const DateConverter = () => {
  const [date, setDate] = useState<string>(new Date().toString());
  const [convertedDate, setConvertedDate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleConvert = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setConvertedDate(await ConvertDate(date));
    setLoading(false);
  };

  return (
    <div className="container">
      <form onSubmit={handleConvert}>
        <Typography variant="h2">{appHeader}</Typography>
        <div className="body">
          <div>
            <Typography variant="h5">{dateConvertLabel}</Typography>
          </div>
          {loading && <CircularProgress />}
          <div className="convertElementsMargin">
            <TextField
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="convertElementsMargin">
            <Button type="submit" variant="contained">
              {convertButtonText}
            </Button>
          </div>
          <div className="convertElementsMargin">
            <Typography variant="h5">{convertedDate}</Typography>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DateConverter;
