function getFormattedAddress(address) {
	return `The user lives in ${address.city} / ${address.state}, 
			in the ${address.neighborhood} neighborhood, 
			at "${address.street}" with number ${address.number}`;
}

var address = {
	street: "Rua dos Pinheiros",
	number: 1293,
	neighborhood: "Centro",
	city: "São Paulo",
	state: "SP"
};

console.log(getFormattedAddress(address));
