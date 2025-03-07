import { useState } from 'react';
import { Article } from './Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import {
	fontFamilyOptions,
	fontColors,
	fontSizeOptions,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';

const defaultArticleStyles = {
	fontFamily: fontFamilyOptions[0],
	fontColor: fontColors[0],
	fontSize: fontSizeOptions[1],
	backgroundColor: backgroundColors[0],
	contentWidth: contentWidthArr[0],
};

export const ArticlePage = () => {
	const [articleStyles, setArticleStyles] = useState(defaultArticleStyles);

	const handleApply = (newStyles: typeof defaultArticleStyles) => {
		setArticleStyles(newStyles);
	};

	const handleReset = () => {
		setArticleStyles(defaultArticleStyles);
	};

	return (
		<div>
			<Article styles={articleStyles} />
			<ArticleParamsForm
				initialStyles={defaultArticleStyles}
				onApply={handleApply}
				onReset={handleReset}
			/>
		</div>
	);
};
