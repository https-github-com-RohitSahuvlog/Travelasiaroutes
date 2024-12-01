import { Link } from 'react-router-dom';
import {
	CardCategory,
	CardContainer,
	CardDesc,
	CardMedia,
	CardMediaContainer,
	CardTitle,
} from './CardStyle';

const Card = ({ products }) => {
	if (products.description.length > 80) {
		products.description = products.description.substring(0, 80) + '...';
	}
	// if (products.title.length > 25) {
	// 	products.title = products.title.substring(0, 105) + '...';
	// }

	return (
		<CardContainer>
			<Link to={products.link}>
				<CardMediaContainer>
					<CardMedia src={products.thumbnail} atl={products.title} />
					<CardCategory>{products.region}</CardCategory>
				</CardMediaContainer>
				<CardTitle>{products.title}</CardTitle>
				<CardDesc>{products.description}</CardDesc>
			</Link>
		</CardContainer>
	);
}

export default Card;
