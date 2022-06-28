// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GooglePlusCircleFilledSvg from 'gupo-icons-base/es/asn/GooglePlusCircleFilled';

export interface GooglePlusCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconGooglePlusCircleFilled: GooglePlusCircleFilledIconType = (props, context) => (
    <Icon name='GooglePlusCircleFilled' {...{ ...props, ...context.attrs }} icon={GooglePlusCircleFilledSvg} />
);

IconGooglePlusCircleFilled.displayName = 'IconGooglePlusCircleFilled';
IconGooglePlusCircleFilled.theme = 'filled';
IconGooglePlusCircleFilled.originName = 'google-plus-circle';

export default IconGooglePlusCircleFilled;
