// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GoogleSquareFilledSvg from 'icons-base/es/asn/GoogleSquareFilled';

export interface GoogleSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconGoogleSquareFilled: GoogleSquareFilledIconType = (props, context) => (
    <Icon name='GoogleSquareFilled' {...{ ...props, ...context.attrs }} icon={GoogleSquareFilledSvg} />
);

IconGoogleSquareFilled.displayName = 'IconGoogleSquareFilled';
IconGoogleSquareFilled.theme = 'filled';
IconGoogleSquareFilled.originName = 'google-square';

export default IconGoogleSquareFilled;
