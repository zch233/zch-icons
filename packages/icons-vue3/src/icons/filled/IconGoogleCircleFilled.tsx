// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GoogleCircleFilledSvg from 'icons-base/es/asn/GoogleCircleFilled';

export interface GoogleCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconGoogleCircleFilled: GoogleCircleFilledIconType = (props, context) => (
    <Icon name='GoogleCircleFilled' {...{ ...props, ...context.attrs }} icon={GoogleCircleFilledSvg} />
);

IconGoogleCircleFilled.displayName = 'IconGoogleCircleFilled';
IconGoogleCircleFilled.theme = 'filled';
IconGoogleCircleFilled.originName = 'google-circle';

export default IconGoogleCircleFilled;
