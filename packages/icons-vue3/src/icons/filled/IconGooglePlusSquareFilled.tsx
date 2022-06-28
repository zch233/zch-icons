// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GooglePlusSquareFilledSvg from 'gupo-icons-base/es/asn/GooglePlusSquareFilled';

export interface GooglePlusSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconGooglePlusSquareFilled: GooglePlusSquareFilledIconType = (props, context) => (
    <Icon name='GooglePlusSquareFilled' {...{ ...props, ...context.attrs }} icon={GooglePlusSquareFilledSvg} />
);

IconGooglePlusSquareFilled.displayName = 'IconGooglePlusSquareFilled';
IconGooglePlusSquareFilled.theme = 'filled';
IconGooglePlusSquareFilled.originName = 'google-plus-square';

export default IconGooglePlusSquareFilled;
