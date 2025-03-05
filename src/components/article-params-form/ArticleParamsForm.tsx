import { useState } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from '../../ui/select';
import { RadioGroup } from '../../ui/radio-group';
import { Text } from 'src/ui/text/Text';
import {
	OptionType,
	fontFamilyOptions,
	fontColors,
	fontSizeOptions,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import { Separator } from 'src/ui/separator';

interface ArticleParamsFormProps {
	initialStyles: {
		fontFamily: OptionType;
		fontColor: OptionType;
		fontSize: OptionType;
		backgroundColor: OptionType;
		contentWidth: OptionType;
	};
	onApply: (styles: ArticleParamsFormProps['initialStyles']) => void;
	onReset: () => void;
}

export const ArticleParamsForm = () => {
	const [selectedFont, setSelectedFont] = useState<OptionType | null>(
		fontFamilyOptions[0]
	);
	const [selectedColor, setSelectedColor] = useState<OptionType | null>(
		fontColors[0]
	);
	const [selectedFontSize, setSelectedFontSize] = useState<OptionType>(
		fontSizeOptions[1]
	);
	const [selectedBgColor, setSelectedBgColor] = useState<OptionType | null>(
		backgroundColors[0]
	);
	const [selectedContentWidth, setSelectedContentWidth] =
		useState<OptionType | null>(contentWidthArr[0]);

	const [isFormOpen, setIsFormOpen] = useState(false);

	const toggleForm = () => {
		console.log('click');
		setIsFormOpen((prev) => !prev);
	};

	return (
		<>
			<ArrowButton isOpen={isFormOpen} onClick={toggleForm} />
			{isFormOpen && (
				<aside className={styles.container_open}>
					<form className={styles.form}>
						<Text
							as='h2'
							size={31}
							weight={800}
							uppercase
							align='left'
							dynamicLite>
							Задайте параметры
						</Text>
						<Select
							title='Шрифт'
							options={fontFamilyOptions}
							selected={selectedFont}
							onChange={setSelectedFont}
							placeholder='Выберите шрифт'
						/>
						<RadioGroup
							title='Размер шрифта'
							name='fontSize'
							options={fontSizeOptions}
							selected={selectedFontSize}
							onChange={setSelectedFontSize}
						/>
						<Select
							title='Цвет текста'
							options={fontColors}
							selected={selectedColor}
							onChange={setSelectedColor}
							placeholder='Выберите цвет'
						/>

						<Separator />

						<Select
							title='Цвет фона'
							options={backgroundColors}
							selected={selectedBgColor}
							onChange={setSelectedBgColor}
							placeholder='Выберите цвет'
						/>
						<Select
							title='Ширина контента'
							options={contentWidthArr}
							selected={selectedContentWidth}
							onChange={setSelectedContentWidth}
							placeholder='Выберите ширину'
						/>
						<div className={styles.bottomContainer}>
							<Button title='Сбросить' htmlType='reset' type='clear' />
							<Button title='Применить' htmlType='submit' type='apply' />
						</div>
					</form>
				</aside>
			)}
		</>
	);
};
