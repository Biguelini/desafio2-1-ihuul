const axios = require('axios');

class ApiClient {
	constructor(apiUrl, apiKey) {
		this.apiUrl = apiUrl;
		this.apiKey = apiKey;
	}

	async getExchangeRate(from, to) {
		try {
			const response = await axios.get(`${this.apiUrl}/${this.apiKey}/pair/${from}/${to}`);

			if (response.data && response.data.conversion_rate) {
				return response.data.conversion_rate;
			} else {
				throw new Error('Problema ao obter taxa de conversão.');
			}
		} catch (error) {
			throw new Error(`Erro na comunicação com a API: ${error.message}`);
		}
	}
}

module.exports = ApiClient;
