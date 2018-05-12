import { Dimensions, AsyncStorage } from 'react-native';
import { TOKEN } from '../utils';

export const ScreenSize = Dimensions.get('window');
export const imageRatio = 0.5625;

export function ScreenWidthPadding(padding, maxSize): number {
	const paddedSize = ScreenSize.width - (padding * 2);
	return paddedSize > maxSize ? maxSize : paddedSize;
}

export function GetRatioHeight(width): number {
	return width * imageRatio;
}

export async function get(params) {
	const { url, bodyParams } = params;
	// default opts
	const opts = {
		method: 'POST',
		headers: new Headers(),
		body: JSON.stringify(bodyParams)
	};

	// default headers, and Authorization if possible (logged in).
	const headers = opts.headers, token = await AsyncStorage.getItem(TOKEN);
	if (!headers.get('content-type')) opts.headers.append('content-type', 'application/json');
	if (token) opts.headers.append('Authorization', token);
	return fetch(url, opts).then(res => res.json());
}