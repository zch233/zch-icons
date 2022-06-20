// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GooglePlusSquareFilledSvg from 'icon-base/es/asn/GooglePlusSquareFilled';

export interface GooglePlusSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGooglePlusSquareFilled: GooglePlusSquareFilledIconType = (props, context) => (
    <Icon name='GooglePlusSquareFilled' {...{ ...props, ...context.attrs }} icon={GooglePlusSquareFilledSvg} />
);

IconGooglePlusSquareFilled.displayName = 'IconGooglePlusSquareFilled';

export default IconGooglePlusSquareFilled;
