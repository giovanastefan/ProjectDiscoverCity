import React, { useState, useEffect, ChangeEvent } from 'react';
import { FormContainer, Input, Select, Button, FormWrapper, TextArea } from './RegisterEstablishment.styles';

interface Category {
  id: string;
  category: string;
}

const RegisterForm = () => {
  const [establishment, setEstablishment] = useState({
    name: '',
    description: '',
    site: '',
    image: '',
    startOperation: '',
    endOperation: '',
    workingDays: '',
    menuUrl: '',
    paymentTypes: '',
    category: {
      id: 0
    }
  });

  const [address, setAddress] = useState({
    street: '',
    number: '',
    cep: '',
    neighborhood: '',
    city: '',
    state: '',
    country: ''
  });

  const [contact, setContact] = useState({
    email: '',
    phone: ''
  });

  const [categories, setCategories] = useState(Array<Category>);

  useEffect(() => {
    // Fetch categories from the server
    fetch('http://localhost:8080/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Prepare the data to send to the server
    const data = {
      establishment,
      address,
      contact,
    };

    // Send the data to the server (replace with your API endpoint)
    fetch('http://localhost:8080/establishments/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        // Handle the server response
        console.log(result);
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
  
    if (name === 'categoryId') {
      setEstablishment(prevState => ({
        ...prevState,
        category: {
          id: Number(value)
        }
      }));
    } else {
      setEstablishment(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };
  

  const handleAddressChange = (event: any) => {
    const { name, value } = event.target;

    // Update the address state
    setAddress(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleContactChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Update the contact state
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <><h2>Register Establishment</h2>
    <FormWrapper>
    <FormContainer onSubmit={handleSubmit}>
      <label>
        Establishment Name:
        <Input
          type="text"
          name="name"
          value={establishment.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Description:
        <TextArea
          name="description"
          value={establishment.description}
          onChange={handleChange}
          required
        ></TextArea>
      </label>
      <br />

      <label>
        Website:
        <Input
          type="url"
          name="site"
          value={establishment.site}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Image URL:
        <Input
          type="url"
          name="image"
          value={establishment.image}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Start Operation:
        <Input
          type="time"
          name="startOperation"
          value={establishment.startOperation}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        End Operation:
        <Input
          type="time"
          name="endOperation"
          value={establishment.endOperation}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Working Days:
        <Input
          type="text"
          name="workingDays"
          value={establishment.workingDays}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Menu URL:
        <Input
          type="url"
          name="menuUrl"
          value={establishment.menuUrl}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Payment Types:
        <Input
          type="text"
          name="paymentTypes"
          value={establishment.paymentTypes}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Street:
        <Input
          type="text"
          name="street"
          value={address.street}
          onChange={handleAddressChange}
          required
        />
      </label>
      <br />

      <label>
        Number:
        <Input
          type="text"
          name="number"
          value={address.number}
          onChange={handleAddressChange}
          required
        />
      </label>
      <br />

      <label>
        CEP:
        <Input
          type="text"
          name="cep"
          value={address.cep}
          onChange={handleAddressChange}
          required
        />
      </label>
      <br />

      <label>
        Neighborhood:
        <Input
          type="text"
          name="neighborhood"
          value={address.neighborhood}
          onChange={handleAddressChange}
          required
        />
      </label>
      <br />

      <label>
        City:
        <Input
          type="text"
          name="city"
          value={address.city}
          onChange={handleAddressChange}
          required
        />
      </label>
      <br />

      <label>
        State:
        <Input
          type="text"
          name="state"
          value={address.state}
          onChange={handleAddressChange}
          required
        />
      </label>
      <br />

      <label>
        Country:
        <Input
          type="text"
          name="country"
          value={address.country}
          onChange={handleAddressChange}
          required
        />
      </label>
      <br />

      <label>
        Category:
        <Select
          name="categoryId"
          value={establishment.category.id}
          onChange={handleChange}
          required
        >
          <option value={0}>Select a category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.category}
            </option>
          ))}
        </Select>
      </label>
      <br />

      <label>
            Email:
            <Input
              type="email"
              name="email"
              value={contact.email}
              onChange={handleContactChange}
              required
            />
          </label>
          <br />

          <label>
            Phone:
            <Input
              type="tel"
              name="phone"
              value={contact.phone}
              onChange={handleContactChange}
              required
            />
          </label>
          <br />

      <Button type="submit">Register</Button>
    </FormContainer>
    </FormWrapper>
    </>
  );
};

export default RegisterForm;
