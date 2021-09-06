import { LOTS } from './lots'
import { HOMES } from './homes'

export default function handler(req, res) {
	const query = req.query.query.toLowerCase()

	const lots = LOTS
		.filter(({ address, description }) => address.toLowerCase().includes(query) || description.toLowerCase().includes(query))
		.map(({ lotId: id, address: title, description: subtitle, image }) => ({ id, title, image, subtitle, url: `?selectedLot=${id}` }))

	const homes = HOMES
		.filter(({ name, description }) => name.toLowerCase().includes(query) || description.toLowerCase().includes(query))
		.map(({ homePlanId: id, name: title, description: subtitle, image }) => ({ id, title, image, subtitle, url: `?selectedHomePlan=${id}` }))
	
  res.status(200).json(lots.concat(homes))
}
