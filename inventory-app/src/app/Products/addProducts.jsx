"use client";

import React, { useState, useEffect } from "react";
import {  Drawer, Form, Input } from "antd";
import { Button } from "antd/es/radio";

const AddProducts = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");

  useEffect(() => {
    console.log("Drawer open state changed:", open);
  }, [open]);

  const showDrawer = () => {
    console.log("Opening drawer...");
    setOpen(true);
  };

  const onClose = () => {
    console.log("Closing drawer...");
    setOpen(false);
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={showDrawer}
          className="absolute top-0 right-0 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg"
        >
          + Add Products
        </button>
      </div>

      <Drawer title="Add Products" onClose={onClose} open={open}>
        
        <Form
          layout={formLayout}
          form={form}
          // initialValues={{ layout: formLayout }}
          // onValuesChange={onFormLayoutChange}
          style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}
        >
          <Form.Item label="Product Name">
            <Input placeholder="Enter the Products Name" />
          </Form.Item>
          <Form.Item label="Stocks">
            <Input placeholder="Enter the number of Stocks" />
          </Form.Item>
          < Form.Item label="Selling Price(SP)">
          <Input placeholder="Enter the Selling Price"/>
          </Form.Item>
          < Form.Item label="Cost Price(CP)">
          <Input placeholder="Enter the Cost Price"/>
          
          </Form.Item>
          
        <Button type="primary">Submit</Button>
     
    
         
        </Form>
      </Drawer>
    </>
  );
};

export default AddProducts;
