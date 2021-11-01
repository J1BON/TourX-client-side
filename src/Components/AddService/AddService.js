import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";
import Description from "../Home/Description/Description";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://stark-forest-89249.herokuapp.com/pakages", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };

  return (
    <div className="add-service">
      <h2>Please Add a Service</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="add-pakages">
        <input
          {...register("title", { required: true })}
          placeholder="Package Name"
        />
        <input {...register("price", { required: true })} placeholder="Price" />
        <input
          {...register("img", { required: true })}
          placeholder="Image Url"
        />
        <input
          {...register("time", { required: true })}
          placeholder="Durition"
        />
        <input
          {...register("rating", { required: true })}
          placeholder="Rating"
        />
        <input type="submit" className="sub-btn" />
      </form>
      <Description></Description>
    </div>
  );
};

export default AddService;
