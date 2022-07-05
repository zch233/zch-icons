import { assignAttrsAtTag } from '../index';
import { TransformFactory } from '../../index';

const EXTRA_ICON_NAMES = [
    'step-backward',
    'step-forward',
    'fast-backward',
    'fast-forward',
    'forward',
    'backward',
    'caret-up',
    'caret-down',
    'caret-left',
    'caret-right',
    'retweet',
    'swap-left',
    'swap-right',
    'loading',
    'loading-3-quarters',
    'coffee',
    'bars',
    'file-jpg',
    'inbox',
    'shopping-cart',
    'safety',
    'medium-workmark',
    'image',
];

export const adjustViewBox: TransformFactory = assignAttrsAtTag('svg', ({ name, previousAttrs }) => ({
    viewBox: EXTRA_ICON_NAMES.includes(name) ? previousAttrs.viewBox : '64 64 896 896', // 特殊图标不做裁剪调整
}));
