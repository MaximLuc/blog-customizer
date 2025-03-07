import { useState, useEffect } from 'react';
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

export const ArticleParamsForm = ({
	initialStyles,
	onApply,
	onReset,
}: ArticleParamsFormProps) => {
	const [selectedFont, setSelectedFont] = useState<OptionType>(
		initialStyles.fontFamily
	);
	const [selectedColor, setSelectedColor] = useState<OptionType>(
		initialStyles.fontColor
	);
	const [selectedFontSize, setSelectedFontSize] = useState<OptionType>(
		initialStyles.fontSize
	);
	const [selectedBgColor, setSelectedBgColor] = useState<OptionType>(
		initialStyles.backgroundColor
	);
	const [selectedContentWidth, setSelectedContentWidth] = useState<OptionType>(
		initialStyles.contentWidth
	);

	const [isFormOpen, setIsFormOpen] = useState(false);

	const toggleForm = () => {
		setIsFormOpen((prev) => !prev);
	};

	useEffect(() => {
		setSelectedFont(initialStyles.fontFamily);
		setSelectedColor(initialStyles.fontColor);
		setSelectedFontSize(initialStyles.fontSize);
		setSelectedBgColor(initialStyles.backgroundColor);
		setSelectedContentWidth(initialStyles.contentWidth);
	}, [initialStyles]);

	const resetForm = () => {
		setSelectedFont(initialStyles.fontFamily);
		setSelectedColor(initialStyles.fontColor);
		setSelectedFontSize(initialStyles.fontSize);
		setSelectedBgColor(initialStyles.backgroundColor);
		setSelectedContentWidth(initialStyles.contentWidth);
		onReset();
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onApply({
			fontFamily: selectedFont,
			fontColor: selectedColor,
			fontSize: selectedFontSize,
			backgroundColor: selectedBgColor,
			contentWidth: selectedContentWidth,
		});
	};

	return (
		<>
			<ArrowButton isOpen={isFormOpen} onClick={toggleForm} />
			{isFormOpen && (
				<aside className={styles.container_open}>
					<form
						className={styles.form}
						onSubmit={handleSubmit}
						onReset={resetForm}>
						<Text as='h2' size={31} weight={800} uppercase align='left'>
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
							title='Цвет шрифта'
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
