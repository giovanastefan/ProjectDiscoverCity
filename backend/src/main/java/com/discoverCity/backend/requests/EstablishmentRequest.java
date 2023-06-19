package com.discoverCity.backend.requests;

import com.discoverCity.backend.model.Address;
import com.discoverCity.backend.model.Contact;
import com.discoverCity.backend.model.Establishment;

public class EstablishmentRequest {
	
	private Establishment establishment;
	private Address address;
	private Contact contact;
	
	
	public Establishment getEstablishment() {
		return establishment;
	}
	public void setEstablishment(Establishment establishment) {
		this.establishment = establishment;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public Contact getContact() {
		return contact;
	}
	public void setContact(Contact contact) {
		this.contact = contact;
	}
	
	
	

}
