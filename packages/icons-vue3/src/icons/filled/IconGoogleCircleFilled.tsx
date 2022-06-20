// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GoogleCircleFilledSvg from 'icon-base/es/asn/GoogleCircleFilled';

export interface GoogleCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGoogleCircleFilled: GoogleCircleFilledIconType = (props, context) => (
    <Icon name='GoogleCircleFilled' {...{ ...props, ...context.attrs }} icon={GoogleCircleFilledSvg} />
);

IconGoogleCircleFilled.displayName = 'IconGoogleCircleFilled';

export default IconGoogleCircleFilled;
