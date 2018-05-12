import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors } from './colors';
import { ScreenWidthPadding } from '../utils';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const iStyles = StyleSheet.create({
	scrollContainer: {
		backgroundColor: '#ededed',
	},
	container: {
		flex: 1,
		backgroundColor: '#ededed',
	},
});

export const baseStyles = {
	text: {
		backgroundColor: 'transparent',
		color: colors.text,
		paddingLeft: 10,
	},
};
