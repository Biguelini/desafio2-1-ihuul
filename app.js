require('dotenv').config();
const prompt = require('prompt-sync')();
const ApiClient = require('./ApiClient');
const Conversor = require('./Conversor');

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

(async function main() {
	const apiClient = new ApiClient(API_URL, API_KEY);
	const conversor = new Conversor(apiClient);

	while (true) {
		try {
			let from;
			let to;
			let amount;

			while (true) {
				from = prompt('Moeda origem (ou vazio para sair): ').toUpperCase();

				if (!from.trim()) {
					console.log('Conversor encerrado.');
					return;
				}

				const valido = conversor.validateInputFrom(from)

				if (!valido) {
					continue;
				}

				break;
			}

			while (true) {
				to = prompt('Moeda destino: ').toUpperCase();

				const valido = conversor.validateInputTo(from, to)

				if (!valido) {
					continue;
				}

				break;
			}

			while (true) {
				amount = parseFloat(prompt('Valor: '));

				const valido = conversor.validateInputAmount(amount)

				if (!valido) {
					continue;
				}

				break;
			}

			console.log('\nConvertendo...\n')

			const result = await conversor.convert(from, to, amount);

			console.log(`${from} ${parseFloat(amount).toFixed(2).replace('.', ',')} => ${to} ${parseFloat(result.convertedValue).toFixed(2).replace('.', ',')}`);
			console.log(`Cotação atual: ${from} 1,00 => ${to} ${parseFloat(result.rate).toFixed(6).replace('.', ',')}`);
			console.log('\n')
		} catch (error) {
			console.error(`Erro: ${error.message}`);
		}
	}
})();
