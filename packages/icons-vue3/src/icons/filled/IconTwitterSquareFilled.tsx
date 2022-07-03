// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TwitterSquareFilledSvg from 'icons-base/es/asn/TwitterSquareFilled';

export interface TwitterSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTwitterSquareFilled: TwitterSquareFilledIconType = (props, context) => (
    <Icon name='TwitterSquareFilled' {...{ ...props, ...context.attrs }} icon={TwitterSquareFilledSvg} />
);

IconTwitterSquareFilled.displayName = 'IconTwitterSquareFilled';
IconTwitterSquareFilled.theme = 'filled';
IconTwitterSquareFilled.originName = 'twitter-square';

export default IconTwitterSquareFilled;
