import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [articleStyles, setArticleStyles] = useState({
		fontFamily: defaultArticleState.fontFamilyOption,
		fontSize: defaultArticleState.fontSizeOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
	});

	return (
		<main
			className={clsx(styles.main)}
			style={
				{ '--bg-color': articleStyles.backgroundColor.value } as CSSProperties
			}>
			<ArticleParamsForm
				initialStyles={articleStyles}
				onApply={(newStyles) =>
					setArticleStyles({
						fontFamily: newStyles.fontFamily,
						fontSize: newStyles.fontSize,
						fontColor: newStyles.fontColor,
						backgroundColor: newStyles.backgroundColor,
						contentWidth: newStyles.contentWidth,
					})
				}
				onReset={() =>
					setArticleStyles({
						fontFamily: defaultArticleState.fontFamilyOption,
						fontSize: defaultArticleState.fontSizeOption,
						fontColor: defaultArticleState.fontColor,
						backgroundColor: defaultArticleState.backgroundColor,
						contentWidth: defaultArticleState.contentWidth,
					})
				}
			/>
			<div
				style={
					{
						'--font-family': articleStyles.fontFamily.value,
						'--font-size': articleStyles.fontSize.value,
						'--font-color': articleStyles.fontColor.value,
						'--container-width': articleStyles.contentWidth.value,
						'--bg-color': articleStyles.backgroundColor.value,
					} as CSSProperties
				}>
				<Article styles={articleStyles} />
			</div>
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
