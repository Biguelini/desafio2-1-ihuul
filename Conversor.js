class Conversor {
	constructor(apiClient) {
		this.apiClient = apiClient;
	}

	async convert(from, to, amount) {
		try {
			const rate = await this.apiClient.getExchangeRate(from, to);
			const convertedValue = (amount * rate).toFixed(2);
			return {
				convertedValue,
				rate: rate.toFixed(6)
			};
		} catch (error) {
			throw error;
		}
	}

	validateInputFrom(from) {
		if (from.length !== 3) {
			console.log('Moeda de origem devem ter exatamente 3 caracteres.');
			return false;
		}

		return true;
	}

	validateInputTo(from, to) {
		if (!from || !to) {
			console.log('Moeda origem ou destino não pode ser vazia.');
			return false;
		}

		if (from === to) {
			console.log('Moeda origem deve ser diferente da moeda destino.');
			return false;
		}

		if (to.length !== 3) {
			console.log('Moeda de destino devem ter exatamente 3 caracteres.');
			return false;
		}

		return true;
	}

	validateInputAmount(amount) {
		if (isNaN(amount) || typeof amount !== 'number') {
			console.log('O valor deve ser um número válido.');
			return false;
		}

		if (amount <= 0) {
			console.log('O valor deve ser maior que 0.');
			return false;
		}

		return true;
	}
}

module.exports = Conversor;
